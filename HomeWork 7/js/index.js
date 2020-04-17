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




