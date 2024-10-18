function accordionList(){
    document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-list dt');
    accordionItems[0].classList.add('ativo');
    accordionItems[0].nextElementSibling.classList.add('ativo');

    function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
    }

    accordionItems.forEach((item) => {
    item.addEventListener('click',activeAccordion);
    });
})
}
accordionList()

function animacaoSuaveScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.7;
        function animarScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativar-scroll');
                } else {
                    section.classList.remove('ativar-scroll'); // Remove a classe quando a seção não é visível
                }
            });
        }
        animarScroll(); // Executa a função ao carregar a página
        window.addEventListener('scroll', animarScroll);
    }
}

animacaoSuaveScroll();