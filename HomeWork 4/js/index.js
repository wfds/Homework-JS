let body = {
    tagName: 'body',
    attrs:{},
    text: '',
    subTags:[
        {tagName: 'div',
         attrs: {},
         text: '',
         subTags:[
             {tagName: 'span',
              attrs: {},
              text: 'Enter a data please',
              subTags:[]
             },
             {tagName: 'br',
             attrs: {},
             text: '',
             subTags:[]
            },
            {tagName: 'input',
            attrs: {
                type: 'text',
                id: 'name' 
                },
            text: '',
            subTags:[]
            },
            {tagName: 'input',
            attrs: {
                type: 'text',
                id: 'surname' 
                },
            text: '',
            subTags:[]
            }
        ]
        },
        {tagName: 'div',
            attrs: {},
            text: '',
            subTags:[
                {tagName: 'button',
                attrs:{
                    id: 'type'
                },
                text: 'ok',
                subTags: []
                },
                {tagName:'button',
                attrs:{
                    id: 'cancel'
                },
                text:'Cancel',
                subTags:[]
                }
    ]
,}]}
body.subTags[1].subTags[1].text
body.subTags[0].subTags[3].attrs.id

var notebook = {
    brand: prompt('Enter a brand'),
    type: prompt('Enter a type'),
    model: prompt('Enter a model'),
    ram: Number(prompt('Enter a ram')),
    size: prompt('Enter a size'),
    weight: Number(prompt('Enter a weight')),
    resolution: {
        width: Number(prompt('Enter a resolution width')),
        height: Number(prompt('Enter a resolution height')),
    }
}

var phone = {
    brand: prompt('Enter a brand'),
    model: prompt('Enter a model'),
    ram: Number(prompt('Enter a ram')),
    color: prompt('Enter a color'),
}

var person = {
    name: prompt('enter your name'),
    surname: prompt('enter your surname'),
    married: confirm('Are you married? (Yes - Ok / No - Cancel) '),
}

person.smartphone = phone
person.laptop = notebook
notebook.owner = person
phone.owner = person






let a = []
a.push(prompt('key'))
a.push(prompt('key'))
a.push(prompt('key'))




let conf = ''
while (conf == 0) {
    conf = confirm('Yes or No?')
    if (conf) {
        break;
    }
}






var arr = [];
for(var i = '';i = prompt('add []');arr.push(i)) {
    if(i === null) {
        break}
}






var arrr =[]
for (var i = 0;arrr[i]=prompt('add[]');i++) {
    if (arrr[i] === false) 
    break;
}
//Не смог разобраться почему при нажатии отмены добавляет елемент null







for (var j = 1; Math.random() <= 0.9;j++) {
if (Math.random > 0.9) 
    break;
}
alert(j)







var i = prompt('максимальное значение прогрессии')
var sum = 0
for (var j = 1;j<=i; j=j+3) {
    sum=sum+j 
}
alert(sum)







var width  = 11  
var board = ''  
for (var x = 0; x < width; x++) {
         if (x % 2 == 0){
             board += " ";
         } else {
             board += "#";
         }
}








str=''
for (var i=0;i<10;i++){

        for (var j=0;j<10;j++){
            str+=j;
            }
            str+=`\n`;
            }








var height = 10;
var width = 12;
var board = "";
for (var y = 0; y < height; y++) {
    if(y>0) board += "\n";
    for (var x = 0; x < width; x++) {
        if ((x + y) % 2 == 0){
            board += ".";
        } else {
            board += "#";
        }
    }
}










var r = []
for (var i = 0, j = i**3;i<4;i++) {
    r.push(j);
}
//?????????????????????????????????????????????????????








var table = new Array(10)
for(var i = 0; i < table.length; i++)
table[i] = new Array(10);
for(var row = 0, str = ''; row < table.length; row++) {
for(var col = 0; col < table[row].length; col++) {
table[row][col] = (row+1)*(col+1);
str += table[row][col] + '  ';
}
}
//вроде получилось создать таблицу,но работает она непарвильно из-за того что есть [0] элемент в массиве, table [2][2] возвращает 9



