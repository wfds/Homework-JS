//HW1

const sayHello = new Promise (resolve => {
    setTimeout(() => {
        console.log(`Hello world`)
    }, 2500);

})




const checkNumber = data => {
    return new Promise()
    (resolve,reject) ; {
    if (typeof data !== 'number') {
    const error = new Error('data is not a number');
    }
    reject(error);
    if(data & 1){
    return new Promise(resolve => 
    
    setTimeout(()=> resolve()
    ,2000))
    }
    resolve(odd);
    if(data & 2){
    return new Promise(resolve => 
    
    setTimeout(()=> resolve()
    ,1000))
    }
    resolve(even);
    }}
    checkNumber(3)


const ifDataNumber = data => {
    return new Promise((resolve, reject) => {
      if (typeof data !== "number") {
        reject("Data is not a number");
      }
      const isOdd = data % 2;
      const ms = isOdd ? 3000 : 5000;
    //   const callback = isOdd ? resolve : reject;
    //   reject('Even')
      setTimeout( ms, isOdd ? "Odd" : "Even")
      
    });
  };
   ifDataNumber(4) 

//HW2


const wait = ms =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log(`wait ${ms}`);
    }, ms)
  );

  wait(2000)
  wait(4000)


// HW3


    Object.prototype.reverseString = function(str){
        return console.log(str.split("").reverse().join(""));
    }
    reverseString("hello");



    Object.prototype.isPalindrome = function(s) {
        return console.log(s == s.split("").reverse().join("")) ? true : false;
    }
    
    isPalindrome('hello')



const name = 'hello'
const map = Array.prototype.map
const mapForString = map.call(name, eachLetter =>{
    return `${eachLetter}*`
})
    console.log(mapForString.join(""))






Array.prototype.myFilter = function(func){
    const result=[];
    for(let i=0; i<this.length; i++) {
         console.log('this[i]', this[i]);
        if(func(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

function isFive(item) {
    if(item >= 5) {
        return item
    } 
 }

 const list = [12,2,5,9,0,33]

 console.log(list.myFilter(isFive))





Array.prototype.myReduce = function(func) {
    for (let i=0; i<this.length; i++) {
        result = func(0,this[i]);
    }
    console.log('total scores: ',result);
    return result;
};

function adder(a,b) {
    return a + b;
}

const class1 = [90,98,89,100,100,86,94];

console.log(class1.myReduce(adder,0))







Array.prototype.myMap = function(func) {
    for(let i=0; i<this.length; i++) {
        this[i]=func(this[i]);
    }
    return this;
};
 
function addOne(item) {
    return item+1;
}

const numbers = [1,2,3];
const letters = ["a", "b", "c"]

console.log(numbers.myMap(addOne));
console.log(letters.myMap(addOne));