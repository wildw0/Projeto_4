
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]');

    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAsw)
    }
})
window.addEventListener('scroll', function() {
    const scroll = window.scrollY || document.documentElement.scrollTop;
    const opacity = 0 + (scroll - 99) / (window.innerHeight - 1);
    
        if (opacity < 0) {
        opacity = 1;
        }
    
        document.querySelector('.visao__geral__Bg').style.opacity = opacity;
    });

    function openOrCloseAsw (elements) {
        const item = 'faq__questions__item--is-open';
        const elementParent = elements.target.parentNode;
    
        elementParent.classList.toggle(item);
    }