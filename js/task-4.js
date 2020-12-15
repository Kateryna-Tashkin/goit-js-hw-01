let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let userInput = prompt("Сколько ремонтных дроидов Вы хотите купить?");
userInput = Number(userInput);

if (userInput === 0) {
    console.log('Отменено пользователем!');
} else if (userInput * pricePerDroid > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    totalPrice = credits - userInput * pricePerDroid;
    console.log(
        `Вы купили ${userInput} дроидов, на счету осталось ${totalPrice} кредитов. `
    )
}

