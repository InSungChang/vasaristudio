document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector(".circle");
    const numbers = document.querySelectorAll(".number");
    const dots = document.querySelectorAll(".dot");
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const descricao = document.querySelector(".descricao");
    const saibaMais = document.getElementById("saiba-mais");

    const totalItems = numbers.length;
    const circleRadius = 275;
    const numberRadius = circleRadius + 40;
    const dotRadius = circleRadius;

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

    function rotateToPosition(clickedIndex, duration = 1000) {
        const rotationAngle = -clickedIndex * (360 / totalItems);
        circle.style.transition = `transform ${duration}ms ease-out`;
        circle.style.transform = `rotate(${rotationAngle}deg)`;

        numbers.forEach((number) => {
            number.style.transition = `transform ${duration}ms ease-out`;
            number.style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
        });

        dots.forEach((dot) => {
            dot.style.transition = `transform ${duration}ms ease-out`;
            dot.style.transform = `translate(-50%, -50%) rotate(${-rotationAngle}deg)`;
        });
    }

    function updateText(clickedIndex) {
        const titles = ["Identidade Visual", "Social Media Strategy", "Social Media", "Audio Visual", "Google ADS", "Meta ADS", "UX design", "Desenvolvimento de Aplicação Web", "A análise de dados", "Suporte técnico", "Infraestrutura", "Marcas e Patentes"];
        const subtitles = ["saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais.", "saiba mais."];
        const descricoes = ["Através de um design criativo e estratégico, transformamos sua marca em uma experiência que conecta com seu público, de forma única e personalizada.",
            "Desenhamos um plano de ação nas redes sociais que vai além da simples publicação de posts. Combinamos estratégia, criatividade e dados para construir uma comunidade engajada e impulsionar seus resultados de negócio.",
            "Nosso processo transforma sua marca em uma história nas redes sociais. Com estratégia, conteúdo criativo e design único.",
            "Sua marca ganha vida através de vídeos criativos e impactantes. Produzimos conteúdo audiovisual que reflete a identidade da sua marca.",
            "Com uma análise completa do mercado, criamos campanhas personalizadas no Google, monitoradas de perto para que seu produto seja visto por mais pessoas.",
            "Através de uma análise estratégica, criaremos campanhas personalizadas nas redes sociais Facebook e Instagram, visando aumentar a visibilidade do seu perfil e do seu produto.",
            "Desenhamos e programamos experiências que encantam e facilitam a jornada do usuário, alinhando estética e funcionalidade. Focamos em entender o fundo das necessidades e desejos do seu público, para que cada interação seja intuitiva, prática, agradável e criativa. Com uma abordagem focada no usuário, buscamos criar conexões reais entre marcas e pessoas, tornando cada contato único e simultaneamente. E esse site é o maior exemplo de tudo isso ;)",
            "Criação, manutenção e atualização de sistema baseado na web. São programas que é executado na internet, ou seja, os arquivos e dados trabalhados são processados e armazenados na internet. Não é necessário instalar o aplicativo no computador.",
            "Resolução de problemas técnicos e um atendimento dedicado aos usuários. Com isso, garantimos que dúvidas e dificuldades sejam solucionadas de forma rápida e eficiente, proporcionando uma experiência mais tranquila e produtiva.",
            "O suporte técnico oferece a resolução de problemas técnicos e um atendimento dedicado aos usuários. Com isso, garantimos que dúvidas e dificuldades sejam solucionadas de forma rápida e eficiente, proporcionando uma experiência mais tranquila e produtiva.",
            "Com uma infraestrutura sólida e atualizada, a empresa ganha em eficiência operacional e consegue prevenir problemas técnicos, além de oferecer uma base confiável para o crescimento e inovação tecnológica.",
            "Marcas e Patentes"];  

        title.textContent = titles[clickedIndex];
        subtitle.textContent = subtitles[clickedIndex];
        descricao.textContent = descricoes[clickedIndex];
    }

    // Inicializa a posição dos números e dots
    positionItems();

    // Animação inicial
    const initialRotations = 1; // Número de rotações completas
    const initialDuration = 4000; // Duração total da animação em milissegundos
    const finalIndex = 0; // Índice do número 00

    circle.style.transition = `transform ${initialDuration}ms ease-in-out`;
    circle.style.transform = `rotate(${-180 * initialRotations}deg)`;

    numbers.forEach((number) => {
        number.style.transition = `transform ${initialDuration}ms ease-in-out`;
        number.style.transform = `translate(-50%, -50%) rotate(${360 * initialRotations}deg)`;
    });

    dots.forEach((dot) => {
        dot.style.transition = `transform ${initialDuration}ms ease-in-out`;
        dot.style.transform = `translate(-50%, -50%) rotate(${360 * initialRotations}deg)`;
    });

    // Após a animação inicial, rotacione para a posição do número 00
    setTimeout(() => {
        rotateToPosition(finalIndex, 1000);
        updateText(finalIndex);
    }, initialDuration);

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
        const keys = document.querySelectorAll('.keyboard-key, .tab');
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        randomKey.classList.add(randomAnimation);
        randomKey.addEventListener('animationend', () => {
            randomKey.classList.remove(randomAnimation);
        }, {once: true});
    }
    
    setInterval(animateRandomKey, 1000);

    // Função para exibir o painel com base no índice
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

    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
        if (index !== 0 && index !== 5) {
            panel.classList.add('inactive');
        }
    });

    // Adiciona event listeners para as abas
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showPanel(index);
        });
    });

    panels.forEach((panel, index) => {
        panel.addEventListener('click', () => {
            showPanel(index);
        });
    });

});
