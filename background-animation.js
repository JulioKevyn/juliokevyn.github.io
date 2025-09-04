document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];
    const particleCount = 100;
    const maxLineLength = 20;
    const baseSpeed = 0.5;
    const color = 'rgba(0, 230, 118, 0.7)';
    const fadeColor = 'rgba(0, 0, 0, 0.05)';
    const chars = '0123456789ABCDEF!@#$%^&*()_+-=[]{}|;:,.<>?/~';

    const resizeCanvas = () => {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    };

    function Particle() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.speedX = (Math.random() - 0.5) * 2 * baseSpeed;
        this.speedY = (Math.random() - 0.5) * 2 * baseSpeed;
        this.length = Math.floor(Math.random() * maxLineLength) + 5;
        this.chars = Array.from({ length: this.length }, () => chars[Math.floor(Math.random() * chars.length)]);
        this.life = 0;
        this.maxLife = Math.random() * 200 + 100;
    }

    Particle.prototype.draw = function() {
        ctx.fillStyle = color;
        ctx.font = '10px Space Mono';
        ctx.globalAlpha = 1 - (this.life / this.maxLife);
        this.chars.forEach((char, i) => {
            ctx.fillText(char, this.x, this.y + i * 12);
        });
    };

    Particle.prototype.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;

        if (this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20 || this.life > this.maxLife) {
            Object.assign(this, new Particle());
            this.y = Math.random() > 0.5 ? 0 : H;
        }
    };

    const init = () => {
        resizeCanvas();
        particles = Array.from({ length: particleCount }, () => new Particle());
        animate();
    };

    const animate = () => {
        requestAnimationFrame(animate);
        ctx.fillStyle = fadeColor;
        ctx.fillRect(0, 0, W, H);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
    };

    window.addEventListener('resize', resizeCanvas);
    init();
});
