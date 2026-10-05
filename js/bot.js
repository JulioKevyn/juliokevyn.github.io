/* ==========================================================
   Robô de teste · consulta CEP e CNPJ em lote (BrasilAPI)
   Roda inteiro no navegador. Nada é enviado para servidor meu.
   ========================================================== */

const BOT_MAX = 30;
const BOT_CONCURRENCY = 3;
const BOT_MANUAL_SECONDS = 40;
const BOT_SAMPLE = ['01310-100', '20040-020', '30130-010', '00.000.000/0001-91', '33.000.167/0001-01'];

const botEscape = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function botParse(text) {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    return lines.map(raw => {
        const digits = raw.replace(/\D/g, '');
        const type = digits.length === 8 ? 'CEP' : digits.length === 14 ? 'CNPJ' : null;
        return { raw, digits, type };
    });
}

async function botLookup(item) {
    if (!item.type) return { status: 'invalid' };
    const url = item.type === 'CEP'
        ? `https://brasilapi.com.br/api/cep/v2/${item.digits}`
        : `https://brasilapi.com.br/api/cnpj/v1/${item.digits}`;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try {
        const res = await fetch(url, { signal: ctrl.signal });
        if (res.status === 404 || res.status === 400) return { status: 'notfound' };
        if (res.status === 429) return { status: 'limit' };
        if (!res.ok) return { status: 'net' };
        const d = await res.json();
        if (item.type === 'CEP') {
            const addr = [d.street, d.neighborhood].filter(Boolean).join(', ');
            return { status: 'ok', result: addr || d.cep, city: [d.city, d.state].filter(Boolean).join('/') };
        }
        const name = d.razao_social || d.nome_fantasia || '';
        return {
            status: 'ok',
            result: [name, d.descricao_situacao_cadastral].filter(Boolean).join(' · '),
            city: [d.municipio, d.uf].filter(Boolean).join('/')
        };
    } catch (e) {
        return { status: 'net' };
    } finally {
        clearTimeout(timer);
    }
}

// Evita que uma célula começando com = + - @ vire fórmula ao abrir no Excel.
const botCsvCell = v => {
    let s = String(v ?? '');
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    return `"${s.replace(/"/g, '""')}"`;
};

function initBot() {
    const root = document.getElementById('try-bot');
    if (!root) return;

    const statusLabel = { ok: tr('sOk'), notfound: tr('sNotFound'), invalid: tr('sInvalid'), net: tr('sNet'), limit: tr('sLimit') };

    root.innerHTML = `
        <div class="try-grid">
            <div class="try-panel">
                <label for="try-input" class="try-label">${tr('tryInput')}</label>
                <textarea id="try-input" class="try-input" rows="8" spellcheck="false" placeholder="01310-100&#10;33.000.167/0001-01&#10;..."></textarea>
                <div class="try-actions">
                    <button type="button" class="btn btn-primary" id="try-run"><i class="fas fa-play"></i> <span>${tr('tryRun')}</span></button>
                    <button type="button" class="btn btn-ghost" id="try-sample">${tr('trySample')}</button>
                    <button type="button" class="btn btn-ghost" id="try-clear">${tr('tryClear')}</button>
                </div>
                <p class="try-note" id="try-msg" aria-live="polite">${tr('tryPriv')}</p>
            </div>
            <div class="terminal try-term">
                <div class="terminal-bar"><div class="dots"><i></i><i></i><i></i></div><span>${tr('tryLogTitle')}</span></div>
                <div class="try-log" id="try-log" data-lenis-prevent><span class="dim">${tr('tryIdle')}</span></div>
            </div>
        </div>
        <div class="try-out" id="try-out" hidden>
            <div class="try-stats" id="try-stats" aria-live="polite"></div>
            <div class="try-table-wrap" data-lenis-prevent>
                <table class="try-table">
                    <thead><tr><th>${tr('colInput')}</th><th>${tr('colType')}</th><th>${tr('colResult')}</th><th>${tr('colCity')}</th><th>${tr('colStatus')}</th></tr></thead>
                    <tbody id="try-rows"></tbody>
                </table>
            </div>
            <button type="button" class="btn btn-ghost" id="try-csv"><i class="fas fa-download"></i> ${tr('tryCsv')}</button>
        </div>`;

    const $in = document.getElementById('try-input');
    const $run = document.getElementById('try-run');
    const $msg = document.getElementById('try-msg');
    const $log = document.getElementById('try-log');
    const $out = document.getElementById('try-out');
    const $rows = document.getElementById('try-rows');
    const $stats = document.getElementById('try-stats');
    const $csv = document.getElementById('try-csv');
    let rows = [];
    let running = false;

    const logLine = (html, cls = '') => {
        $log.insertAdjacentHTML('beforeend', `<div class="${cls}">${html}</div>`);
        $log.scrollTop = $log.scrollHeight;
    };
    const stamp = () => new Date().toLocaleTimeString('pt-BR', { hour12: false });

    document.getElementById('try-sample').addEventListener('click', () => { $in.value = BOT_SAMPLE.join('\n'); $in.focus(); });
    document.getElementById('try-clear').addEventListener('click', () => {
        if (running) return;
        $in.value = ''; $out.hidden = true; rows = [];
        $log.innerHTML = `<span class="dim">${tr('tryIdle')}</span>`;
        $msg.textContent = tr('tryPriv');
    });

    $csv.addEventListener('click', () => {
        const head = [tr('colInput'), tr('colType'), tr('colResult'), tr('colCity'), tr('colStatus')];
        const body = rows.map(r => [r.raw, r.type || '', r.result || '', r.city || '', statusLabel[r.status]]);
        const csv = '﻿' + [head, ...body].map(l => l.map(botCsvCell).join(';')).join('\r\n');
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
        a.download = 'consulta-robo.csv';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });

    function renderRows() {
        $rows.innerHTML = rows.map(r => `<tr>
            <td data-l="${botEscape(tr('colInput'))}">${botEscape(r.raw)}</td>
            <td data-l="${botEscape(tr('colType'))}">${botEscape(r.type || '-')}</td>
            <td data-l="${botEscape(tr('colResult'))}">${r.status ? botEscape(r.result || '-') : '<span class="dim">...</span>'}</td>
            <td data-l="${botEscape(tr('colCity'))}">${botEscape(r.city || '-')}</td>
            <td data-l="${botEscape(tr('colStatus'))}">${r.status ? `<span class="pill ${r.status}">${botEscape(statusLabel[r.status])}</span>` : ''}</td>
        </tr>`).join('');
    }

    $run.addEventListener('click', async () => {
        if (running) return;
        let items = botParse($in.value);
        if (!items.length) { $msg.textContent = tr('tryEmpty'); $in.focus(); return; }
        $msg.textContent = items.length > BOT_MAX ? tr('tryMax') : tr('tryPriv');
        items = items.slice(0, BOT_MAX);

        running = true;
        $run.disabled = true;
        $run.querySelector('span').textContent = tr('tryRunning');
        rows = items.map(i => ({ ...i }));
        $out.hidden = false;
        $csv.disabled = true;
        renderRows();
        $stats.innerHTML = '';
        $log.innerHTML = '';
        const t0 = performance.now();
        logLine(`<span class="dim">[${stamp()}]</span> ${tr('tryLogStart')}`);
        logLine(`<span class="dim">[${stamp()}]</span> ${rows.length} ${tr('tryLogRead')}`);

        let next = 0;
        const worker = async () => {
            while (next < rows.length) {
                const idx = next++;
                const row = rows[idx];
                logLine(`<span class="dim">[${stamp()}]</span> ${tr('tryLogQuery')} ${botEscape(row.type || '?')} ${botEscape(row.digits || row.raw)}`);
                Object.assign(row, await botLookup(row));
                logLine(`<span class="dim">[${stamp()}]</span> ${botEscape(row.digits || row.raw)} <span class="${row.status === 'ok' ? 'ok' : 'bad'}">${row.status === 'ok' ? tr('tryLogOk') : botEscape(statusLabel[row.status])}</span>`);
                renderRows();
            }
        };
        await Promise.all(Array.from({ length: Math.min(BOT_CONCURRENCY, rows.length) }, worker));

        const secs = (performance.now() - t0) / 1000;
        const ok = rows.filter(r => r.status === 'ok').length;
        logLine(`<span class="dim">[${stamp()}]</span> ${tr('tryLogEnd')} · ${secs.toFixed(1)}s`, 'ok');
        const fmtMin = s => s < 90 ? `${Math.round(s)} s` : `${(s / 60).toFixed(1).replace('.', ',')} min`;
        $stats.innerHTML = [
            [rows.length, tr('stItems')], [ok, tr('stOk')], [rows.length - ok, tr('stErr')],
            [secs.toFixed(1).replace('.', ',') + ' s', tr('stBot')], [fmtMin(rows.length * BOT_MANUAL_SECONDS), tr('stManual')]
        ].map(([n, l]) => `<div><strong>${botEscape(n)}</strong><span>${botEscape(l)}</span></div>`).join('');

        $csv.disabled = false;
        $run.disabled = false;
        $run.querySelector('span').textContent = tr('tryRun');
        running = false;
    });
}

document.addEventListener('DOMContentLoaded', initBot);
