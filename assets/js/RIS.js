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

// Смена темы
const themeSwitches = document.querySelectorAll('input[name="switchThemes"]');

// Функция для изменения темы
function changeTheme(event) {
    const selectedTheme = event.target.value; // Получить значение выбранного переключателя
    document.documentElement.setAttribute('data-bs-theme', selectedTheme); // Установить атрибут темы
    localStorage.setItem('theme', selectedTheme); // Сохранить тему в localStorage

    // Обновить визуальное отображение текущей темы
    document.querySelectorAll('.selected_theme_block').forEach((el, index) => {
        el.classList.toggle('d-none', themeSwitches[index].value !== selectedTheme);
    });
}

// Установить слушатели событий на переключатели
themeSwitches.forEach((input) => {
    input.addEventListener('change', changeTheme);
});

// Установить начальную тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Получить тему из localStorage или установить "dark" по умолчанию
    document.documentElement.setAttribute('data-bs-theme', savedTheme);

    // Обновить визуальное отображение текущей темы
    const themeSwitches = document.querySelectorAll('input[name="switchThemes"]');
    themeSwitches.forEach((input) => {
        input.checked = input.value === savedTheme;
    });

    // Отметить соответствующий переключатель
    const defaultSwitch = Array.from(themeSwitches).find((input) => input.value === savedTheme);
    if (defaultSwitch) {
        defaultSwitch.checked = true;
    }

    // Обновить текст текущей темы
    document.querySelectorAll('.selected_theme_block').forEach((el, index) => {
        el.classList.toggle('d-none', themeSwitches[index].value !== savedTheme);
    });
});