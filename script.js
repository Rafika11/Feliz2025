// Definindo a data do Ano Novo 2025
const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = newYearDate - now;

    // Calculando dias, horas, minutos e segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Exibindo os valores no HTML com animação
    gsap.to("#days", { textContent: days, duration: 1, ease: "power2.out", snap: { textContent: 1 } });
    gsap.to("#hours", { textContent: hours, duration: 1, ease: "power2.out", snap: { textContent: 1 } });
    gsap.to("#minutes", { textContent: minutes, duration: 1, ease: "power2.out", snap: { textContent: 1 } });
    gsap.to("#seconds", { textContent: seconds, duration: 1, ease: "power2.out", snap: { textContent: 1 } });

    // Se a contagem terminar, mostrar a mensagem de Ano Novo com animação
    if (timeLeft <= 0) {
        // Escondendo a contagem e exibindo a mensagem com fade-in
        gsap.to("#timer", { opacity: 0, duration: 1 });
        gsap.to("#new-year-message", { opacity: 1, duration: 2, delay: 1 });

        // Adicionando animação de entrada para o título
        gsap.from("#new-year-message h2", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
        gsap.from("#new-year-message p", { opacity: 0, y: 50, duration: 1, delay: 1, ease: "power2.out" });
    }
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Inicializando Particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffdb58"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: false
            }
        }
    }
});
