import json
import os
import asyncio
from playwright.async_api import async_playwright

# --- Nossas Configurações ---
JSON_FILE = 'templates.json'
OUTPUT_DIR = 'images/templates'
# A largura da janela define como o site responsivo será renderizado. 1366px é uma boa base.
VIEWPORT_WIDTH = 1366
VIEWPORT_HEIGHT = 768 # Altura inicial, o script captura a página inteira de qualquer forma.

def setup_directory():
    """Garante que a nossa pasta de imagens existe antes de salvarmos algo nela."""
    if not os.path.exists(OUTPUT_DIR):
        print(f"Criando o diretório para as imagens: {OUTPUT_DIR}")
        os.makedirs(OUTPUT_DIR)

async def capture_screenshots():
    """A função principal que usa Playwright para orquestrar tudo."""
    print("Iniciando o poderoso automatizador de capturas com Playwright...")

    if not os.path.exists(JSON_FILE):
        print(f"Xiii, chefe. Não achei o arquivo '{JSON_FILE}'. Ele precisa estar aqui na mesma pasta, ok?")
        return

    # Lendo o nosso "banco de dados" JSON
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        templates = json.load(f)

    # A mágica do Playwright começa aqui
    async with async_playwright() as p:
        # Usamos o Chromium, mas poderia ser firefox ou webkit
        browser = await p.chromium.launch()
        page = await browser.new_page()
        # Definindo o tamanho da "tela" do navegador virtual
        await page.set_viewport_size({"width": VIEWPORT_WIDTH, "height": VIEWPORT_HEIGHT})

        print(f"Beleza, encontrei {len(templates)} modelos na lista. Mãos à obra!")

        # Um por um, vamos processar cada modelo do JSON
        for i, template in enumerate(templates):
            file_path = template['url']
            output_filename = template['thumbnail']
            
            # Precisamos do caminho absoluto para o navegador encontrar o arquivo no seu PC
            absolute_file_path = os.path.abspath(file_path)
            
            print(f"({i+1}/{len(templates)}) Preparando para fotografar: {file_path}...")

            try:
                # Navegando para o arquivo HTML local
                await page.goto(f"file:///{absolute_file_path}")
                
                # Esperamos um pouquinho pra garantir que tudo (imagens, fontes) carregou
                await page.wait_for_load_state('networkidle')

                # Tiramos a foto da página inteira e salvamos direto no lugar certo
                await page.screenshot(path=output_filename, full_page=True)
                
                print(f"    -> Foto tirada com sucesso! Salva como '{output_filename}'")

            except Exception as e:
                print(f"    -> Eita, deu um erro aqui com o arquivo '{file_path}': {e}")
                print("    -> Chefe, confere se o caminho no JSON tá certinho, beleza?")

        # Fechamos o navegador para não deixar nada aberto
        await browser.close()
        print("\nMissão cumprida! Todas as capturas de tela foram geradas com sucesso.")

# Ponto de partida do nosso script
if __name__ == "__main__":
    setup_directory()
    # O asyncio.run é como a gente executa uma função "async"
    asyncio.run(capture_screenshots())

