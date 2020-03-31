const m = Number(prompt('enter number'))
if(m === 10) {
    alert('Равно')
} else if (m > 10) {
    alert('Больше')
} else if (m < 10) {
    alert('Меньше')
} else {
    alert('Неправильное значение')
}



const age = Number(prompt('Please enter your age'))
if(age >= 18) {
    alert('Complete')
} else {
    alert('Negative')
}

const aGe = Number(prompt('Please enter your age'))
alert(aGe >= 18 ? 'Complete' : 'Negative')



const q = Number(prompt('first number'))
const w = Number(prompt('second number'))
const e = Number(prompt('third number'))
if(q > w && q > e) {
    alert(q)
} else if(w > q && w > e) {
    alert(w)
} else if(e > q && e > w) {
    alert(e)
} else {
    alert('enter number pls')
}




const log = 'test'
const pas = 'password'
const login = prompt('Введите логин')
//alert(login === log ? prompt('Password' === pas ? '33' : '44') : 'Нет такого пользователя')
const password = q
if(login === log) {
    const q = prompt('Введите пароль')
} else {
    alert('Нет такого пользователя')
}
if(password === pas) {
    alert('Добро пожаловать')
} else {
    alert('Не верный пароль')
}



let exc = prompt('Выберите валюту usd или eur')
switch (exc) {
    case 'usd':
        alert('1 usd = 27.7 uah')
        break
    case 'eur':
        alert('1 eur = 29 uah')
        break
    default:
        alert('Неверно выбран тип валюты')
}
let sum = Number(prompt('введите сумму'))
if(exc === 'usd' && sum > 0) {
    alert(sum *= 27.7)
} else if(exc === 'eur' && sum > 0) {
    alert(sum *= 29)
} else {
    alert('try again')
}



const c = prompt('Введите число от 1 до 9')
const v = prompt('Введите число от 1 до 9')
let summ = Number(prompt('Чему равно умножение этих двух чисел?'))
if (summ === (c * v)) {
    alert('Правильно!')
} else {
    alert(`Не верно, правильный ответ - ${c * v}`)
}






const x = Number(prompt('камень - 1, ножницы - 2, бумага - 3'))
function getRandomArbitrary(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
  }
const y = Math.floor(Math.random() * (4 - 1)) + 1;
alert(y);
if(x === 2 && y === 3) {
    alert('Вы победили!!!')
} else if(x === 1 && y === 2) {
    alert('Вы победили!!!')
} else if(x === 3 && y === 1) {
    alert('Вы победили!!!')
} else if(x === y) {
    alert('Ничья!!!')
} else {
    alert('Вы проиграли!!! :С')
}














