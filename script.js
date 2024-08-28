document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector(".circle");
    const numbers = document.querySelectorAll(".number");
    const dots = document.querySelectorAll(".dot");
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const descricao = document.querySelector(".descricao");
    const saibaMais = document.getElementById("saiba-mais");

    const totalItems = numbers.length;
    const circleRadius = 275; // Raio do círculo (metade da largura/altura)
    const numberRadius = circleRadius + 40; // Posiciona os números fora do círculo
    const dotRadius = circleRadius; // Mantém os dots na borda do círculo

    function positionItems() {
        numbers.forEach((number, index) => {
            const angle = (index / totalItems) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * numberRadius + circleRadius;
            const y = Math.sin(angle) * numberRadius + circleRadius;
            number.style.left = `${x}px`;
            number.style.top = `${y}px`;
        });

        dots.forEach((dot, index) => {
            const angle = (index / totalItems) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * dotRadius + circleRadius;
            const y = Math.sin(angle) * dotRadius + circleRadius;
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
        });
    }

    function rotateToPosition(clickedIndex) {
        const rotationAngle = -clickedIndex * (360 / totalItems);
        circle.style.transform = `rotate(${rotationAngle}deg)`;

        numbers.forEach((number) => {
            number.style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
        });

        dots.forEach((dot) => {
            dot.style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
        });
    }

    function updateText(clickedIndex) {
        const titles = ["Identidade Visual", "Social Media Strategy", "Social Media", "Audio Visual", "Google ADS", "Meta ADS", "Aguarde, vem aí mais novidades!", "Aguarde, vem aí mais novidades!"];
        const subtitles = ["saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais."];
        const descricoes = ["Através de um design criativo e estratégico, transformamos sua marca em uma experiência que conecta com seu público, de forma única e personalizada.",
            "Desenhamos um plano de ação nas redes sociais que vai além da simples publicação de posts. Combinamos estratégia, criatividade e dados para construir uma comunidade engajada e impulsionar seus resultados de negócio.",
            "Nosso processo transforma sua marca em uma história nas redes sociais. Com estratégia, conteúdo criativo e design único.",
            "Sua marca ganha vida através de vídeos criativos e impactantes. Produzimos conteúdo audiovisual que reflete a identidade da sua marca.",
            "Com uma análise completa do mercado, criamos campanhas personalizadas no Google, monitoradas de perto para que seu produto seja visto por mais pessoas.",
            "Meta ADS",
            "Aguarde, vem aí mais novidades para você!!!",
            "Aguarde, vem aí mais novidades para você!!!"]

        title.textContent = titles[clickedIndex];
        subtitle.textContent = subtitles[clickedIndex];
        descricao.textContent = descricoes[clickedIndex];
    }

    // Inicializa a posição dos números e dots
    positionItems();

    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            const clickedIndex = parseInt(number.getAttribute('data-index'));
            rotateToPosition(clickedIndex);
            updateText(clickedIndex);
        });
    });

    saibaMais.addEventListener("click", () => {
        if (descricao.style.display === "block") {
            descricao.style.display = "none";
        } else {
            descricao.style.display = "block";
        }
    });

    const animations = [
        'animate-flip',
        'animate-fade',
        'animate-pulse',
        'animate-shake',
        'animate-rotate',
        'animate-scale',
        'animate-bounce'
    ];
    
    function animateRandomKey() {
        const keys = document.querySelectorAll('.keyboard-key');
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        randomKey.classList.add(randomAnimation);
        randomKey.addEventListener('animationend', () => {
            randomKey.classList.remove(randomAnimation);
        }, {once: true});
    }
    
    setInterval(animateRandomKey, 2000);

    function showPanel(index) {
        const panels = document.querySelectorAll('.panel');
        const tabs = document.querySelectorAll('.tab');

        panels.forEach((panel, i) => {
            if (i === index) {
                panel.classList.add('active-panel');
                tabs[i].classList.add('active-tab');
                tabs[i].classList.remove('inactive');
            } else {
                panel.classList.remove('active-panel');
                tabs[i].classList.remove('active-tab');
                tabs[i].classList.add('inactive');
            }
        });

        // Mantenha a aba lightblue sempre no topo
        tabs[0].classList.remove('inactive');
    }

    // Inicializa o painel 5 como ativo
    showPanel(5);

    // Adiciona a classe 'inactive' a todas as abas, exceto a lightblue e a ativa, ao carregar a página
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        if (index !== 0 && index !== 5) {
            tab.classList.add('inactive');
        }
    });

    // Adiciona event listeners para as abas
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showPanel(index);
        });
    });
    
});