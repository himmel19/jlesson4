let nam = prompt('Введите своё имя')
let old = +prompt('Ввдите нынешний год')
let zzz = +prompt('Ввдите год рождения')   


console.log(nam + ',ваш возраст ' + (old - zzz) );


var a = +prompt('Сколько примеров вы хотите решить?');
function rand(max){
    return Math.floor(Math.random() * max + 1);
}
var max = 20;
 
for (i = 0; i < a; i++) {
    var b = rand(max);
    var c = rand(max);
    var e = Math.floor(Math.random() * 4 + 1)
 
    if (e == 1) {
        var sum = b + c;
        var d = prompt("Дайте правильный ответ: " + b + " + " + c + " = ");
    } else if (e == 2) {
        var sum = b - c;
        var d = prompt("Дайте правильный ответ: " + b + " - " + c + " = ");
    } else if (e == 3) {
        var sum = b * c;
        var d = prompt("Дайте правильный ответ: " + b + " * " + c + " = ");
    } else if (e == 4) {
        var sum = b / c;
        var d = prompt("Дайте правильный ответ: " + b + "/" + c + " = ");
    }
 
    if (sum == d){
        console.log("Ваш ответ верный - " + sum);
    } else {
        console.log("Ваш ответ не верный - " + d + "!" + " Верный ответ - " + sum + "!");
    }
}