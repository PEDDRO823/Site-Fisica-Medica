script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"> script
    script
        // Script para ativar tooltips
        document.addEventListener('DOMContentLoaded', function() {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            });
            
            // Animar contadores
            animateCounters();
            
            // Mostrar botão de voltar ao topo quando a página rolar
            window.onscroll = function() {scrollFunction()};
        });
        
        // Função para animar contadores
        function animateCounters() {
            const counters = document.querySelectorAll('.counter-value');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.innerText;
                let count = 0;
                const inc = target / speed;
                
                const updateCount = () => {
                    count = count + inc;
                    
                    if(count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCount();
            });
        }
        
        // Função para mostrar/esconder botão de voltar ao topo
        function scrollFunction() {
            var backToTopButton = document.getElementById("back-to-top");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "flex";
            } else {
                backToTopButton.style.display = "none";
            }
        }
        
        // Função para voltar ao topo
        function topFunction() {
            document.body.scrollTop = 0; // Para Safari
            document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
        }
    script