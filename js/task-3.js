const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userInput = prompt("Введите пароль");

if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'; 
}
else if (userInput === null) {
    message = 'Отменено пользователем!'
}
else {
    message = 'Доступ запрещен, неверный пароль!'
}

alert(message);
