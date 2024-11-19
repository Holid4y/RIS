// accordion
document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        const targetContent = document.getElementById(button.getAttribute('data-target'));

        // Убираем класс "show" у всех секций контента и кнопок
        document.querySelectorAll('.accordion-content, .accordion').forEach(el => {
            el.classList.remove('show');
        });

        // Добавляем класс "show" к текущей кнопке и контенту
        button.classList.add('show');
        targetContent.classList.add('show');
    });
});

// Убираем inline-стили display:none для контента, который изначально не отображается
document.querySelectorAll('.accordion-content:not(.show)').forEach(content => {
    content.style.display = '';
});
