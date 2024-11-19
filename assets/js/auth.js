function toggleForm(event) {
    event.preventDefault();  // Отмена стандартного действия кнопки
    const formContainer = document.querySelector('.form-container');
    formContainer.classList.toggle('rotate');
}
