// ==================== MÚSICA LOCAL - musica.mp3 ====================
let audio = null;
let isPlaying = false;

function toggleMusic() {
    const btn = document.getElementById('music-btn');
    
    if (!audio) {
        // Usando o arquivo local musica.mp3
        audio = new Audio('musica.mp3');
        audio.loop = true;        // Repete a música automaticamente
    }
    
    if (isPlaying) {
        audio.pause();
        btn.classList.remove('playing');
        btn.innerHTML = '🎵 Tocar Música para Mamãe';
    } else {
        audio.play().then(() => {
            btn.classList.add('playing');
            btn.innerHTML = '⏸️ Pausar Música';
        }).catch(err => {
            console.error(err);
            alert("Não foi possível tocar a música.\n\nVerifique se o arquivo 'musica.mp3' está na mesma pasta do index.html");
        });
    }
    
    isPlaying = !isPlaying;
}

// ==================== OUTRAS FUNÇÕES ====================
function entrarHomenagem() {
    const splash = document.getElementById('splash-screen');
    const main = document.getElementById('main-screen');
    
    splash.style.opacity = '0';
    
    setTimeout(() => {
        splash.classList.add('hidden');
        main.classList.remove('hidden');
        main.style.opacity = '1';
    }, 800);
}

function enviarHomenagem() {
    const mensagens = [
        "💖 Mamãe, te amo infinitamente!",
        "❤️ Obrigada por tudo que você faz por mim!",
        "🌸 Você é o maior presente de Deus na minha vida!",
        "😭 Meu coração transborda de gratidão e amor por você!",
        "💕 Te amo mais que ontem e menos que amanhã!"
    ];
    
    const randomMsg = mensagens[Math.floor(Math.random() * mensagens.length)];
    
    alert("💌 Abraço virtual enviado!\n\n" + randomMsg + "\n\nEla sentiu esse carinho agora! ❤️");
    confettiEffect();
}

function confettiEffect() {
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = ['❤️','💖','🌸','💕'][Math.floor(Math.random()*4)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-50px';
            heart.style.fontSize = '2rem';
            heart.style.zIndex = '1000';
            heart.style.transition = 'all 4s ease-out';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.top = '100vh';
                heart.style.transform = `rotate(${Math.random() * 800 - 400}deg)`;
            }, 100);

            setTimeout(() => heart.remove(), 5000);
        }, i * 25);
    }
}