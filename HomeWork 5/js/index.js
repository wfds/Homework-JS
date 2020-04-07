let a = {
  name: 'Asd',
  surname: 'Sad'
  }
let b = {
  name: 'Asd',
  surname: 'Sad'
  }
let c = {
  name: 'Asd',
  surname: 'Sad'
  }

a.age = 15
b.fatherName = 'Fdsa'
c.sex = 'male'


if ('age' in a) {
  alert("Ключ age есть в массиве a!");
} else {
  alert("Ключa age нет в массиве a!");
}
if ('fatherName' in a) {
  alert("Ключ fatherName есть в массиве a!");
} else {
  alert("Ключa fatherName нет в массиве a!");
}
if ('sex' in a) {
  alert("Ключ sex есть в массиве a!");
} else {
  alert("Ключa sex нет в массиве a!");
}

if ('age' in b) {
  alert("Ключ age есть в массиве b!");
} else {
  alert("Ключa age нет в массиве b!");
}
if ('fatherName' in b) {
  alert("Ключ fatherName есть в массиве b!");
} else {
  alert("Ключa fatherName нет в массиве b!");
}
if ('sex' in b) {
  alert("Ключ sex есть в массиве b!");
} else {
  alert("Ключa sex нет в массиве b!");
}

if ('age' in c) {
  alert("Ключ age есть в массиве c!");
} else {
  alert("Ключa age нет в массиве c!");
}
if ('fatherName' in c) {
  alert("Ключ fatherName есть в массиве c!");
} else {
  alert("Ключa fatherName нет в массиве c!");
}
if ('sex' in c) {
  alert("Ключ sex есть в массиве c!");
} else {
  alert("Ключa sex нет в массиве c!");
}


if (a.hasOwnProperty("age")) {
  console.log("Ключ age существует!");
} else {
  console.log("Ключ age не существует!");
}








        let a = {
          name: 'Olixer',
          surname: 'Wood'
          }
          let b = {
          name: 'Oliver',
          surname: 'Wood'
          }
          let c = {}
          let persons = [a,b,c]

          persons[2] =  c = {name: 'Kifor',surname: 'Weed'}






          for (var i = 0, length = persons.length; i < length; i++) {
            console.log(persons[i]);
          }

          //OR

          persons.forEach(element => console.log(element))





          for (var i = 0, length = persons.length; i < length; i++) {
            console.log('name = ' + persons[i]['name'] + ', surname = ' + persons[i]['surname']);
          }




          for (var i = 0, length = persons.length; i < length; i++) {
            for( var pers in a,b,c) {
            console.log(a[pers])}
          }





          















