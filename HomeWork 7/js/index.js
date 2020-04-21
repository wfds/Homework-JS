var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]

let fun = function(data) {
    return function(a,b){
    return a[data] > b[data] ? 1:-1;
    }
    }

persons.sort(fun(age));


let fun = function byField(data, order) {
    var collator = new Intl.Collator(["en", "ru"], {
        numeric: true
    });
    order = order ? 1 : -1;
    return function(a, b) {
        return order * collator.compare(a[data], b[data])
    };
}



persons.sort(fun('name', false));



let mas = ["1", {}, null, undefined, "500", 700]
let result  = mas.map(function(item, index, arr) {
    var number = parseInt(item);
    return isNaN(number)? item : number;
  });
  console.log(result)





  let red = ["0", 5, 3, "string", null]
  let result = red.reduce(function(previousValue, currentValue){
    return typeof(currentValue)==='number'?
    previousValue*=currentValue : previousValue
     }, 1)
     console.log(result);







     var phone = {
        brand: "meizu",
        model: "m2",
        ram: 2,
        color: "black",
    };


function filter(object,key,value){
    var result = {};
    for(var key in object){
      if(key == key || object[key] == value)  result[key] = object[key];
    }
    return result;
  }
  console.log(filter(phone, "color",2));


  filter(phone,(key,value) => key == "color" || value == 2)







  function map(object, reducer) {
    return Object.entries(object).reduce(reducer, {})
  }
  const result = map({ name: 'Ivan', age: 24 }, (object, [key, value]) => {
      object[key + "_"] = value + "$";
      return object
  });
  console.log(result);










