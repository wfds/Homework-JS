
function a (b)
{
    alert(b);
}

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




function avg2(c,d) {
    let result = ((c+d)/2)
    
    return result;
}
avg2(1,2)
avg2(10,5)




function sum3(a=0,b=0,c=0) {
    return a+b+c;
  }
  sum3(1,2,3)
  sum3(5,10,100500)
  sum3(5,10)





function intRandom(min=0,max=0) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
}

intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
intRandom(-1,-1) // вернет -1
intRandom(0,1) // вернет 0 или 1
intRandom(10) //вернет 0 до 10 включительно




function greetAll(name) {
    var result = '';
    var i;
 for (i = 0; i < arguments.length; i++) {
       result += ',' +  arguments[i];
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
