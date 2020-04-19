function a (){
    let name = prompt('Enter your name')
    alert('Hello,' + name)
}

a()



function cube (a){
    a = prompt('enter the number')
    return a**3
    }

cube()




function avg2() {
    let c = +prompt('введите первое число')
    let d = +prompt('введите второе число')
    let result = ((c+d)/2)
    
    return result;
}





function sum3() {
    var a = parseInt(prompt('Первое число')) || 0;
    var b = parseInt(prompt('Второе число')) || 0;
    var c = parseInt(prompt('Третье число')) || 0;
    return a+b+c;
  }
  console.log(sum3())


//Здесь есть вопрос
//Функция работает как нужно но только через промпт, не могу понять как без промпта присвоить параметрам функции число 0 в случае если не указан диапазон
function intRandom(min,max) {
    if(min || max === undefined){
        min = prompt('min') || 0;
        max = prompt('min') || 0;}
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        return Math.round(rand)
    }

intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
intRandom(-1,-1) // вернет -1
intRandom(0,1) // вернет 0 или 1
intRandom(10) //вернет 0 до 10 включительно



//Функция работает,только не совсем понятно с запятой в алерте,без нее все пишется слитно в строке,а если добавляю ее как строчку в цикле в конце строки то она получается завершает приветствие и вылазит даже если параметр всего один,для нее ведь явно не нужно делать отдельный if,как это лучше воплотить?
function greetAll(name) {
    var result = '';
    var i;
 for (i = 0; i < arguments.length; i++) {
       result += arguments[i] + ',';
    }
    return alert(`Hello ${result}`);
 }






function sum(name) {
    var result = +('');
    var i;
 for (i = 0; i < arguments.length; i++) {
       result += arguments[i];
    }
    return alert(result);
 }


sum(1) // => 1
sum(2) // => 2
sum(10,20,40,100) // => 170
