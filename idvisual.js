document.addEventListener("DOMContentLoaded", () => {

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

    // Inicializa o painel 8 como ativo
    showPanel(2);

    // Adiciona a classe 'inactive' a todas as abas, exceto a lightblue e a ativa, ao carregar a página
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        if (index !== 0 && index !== 2) {
            tab.classList.add('inactive');
        }
    });

    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
        if (index !== 0 && index !== 2) {
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