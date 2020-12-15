let country;
let cost;
let isValid = true;

country = prompt("Укажите страну проживания");
if (country === null) {
    console.log("Отменено пользователем");
    isValid = false;
} else {
    switch (country.toLowerCase()) {
        case "китай":
            cost = 100;
            break;
        case "чили":
            cost = 250;
            break;
        case "австралия":
            cost = 170;
            break;
        case "индия":
            cost = 80;
            break;
        case "ямайка":
            cost = 120;
            break;
        default:
            console.log("В вашей стране доставка не доступна");
            isValid = false;
            break;
    }
}
if (isValid) {
    console.log(`Доставка в ${country.charAt(0).toUpperCase()}${country.substr(1).toLowerCase()} будет стоить ${cost} кредитов`);
    alert(`Доставка в ${country.charAt(0).toUpperCase()}${country.substr(1).toLowerCase()} будет стоить ${cost} кредитов`);
}
