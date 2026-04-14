
// id
let id=document.getElementById('demo')

console.log(id);


//class
let classs=document.getElementsByClassName('test')

console.log(classs)
console.log(Array.isArray(classs));
console.log(Array.from(classs));

//tagname

let tag=document.getElementsByTagName('section')
console.log(tag);
console.log(Array.isArray(tag));
console.log(Array.from(tag));


//query selector

let query=document.querySelector('button')
let div=document.querySelector('div')
let sec=document.querySelector('section')
console.log(query);
console.log(div);
console.log(sec);

//query selector all
let btn=document.querySelectorAll('button')
let di=document.querySelectorAll('div')
let se=document.querySelectorAll('section')
console.log(btn);
console.log(di);
console.log(se);


//innerHTML
let idi=document.getElementsByClassName('test')
idi[0].innerHTML= '<h1>Good Morning</h1>';
idi[1].innerHTML='<h4>Good evening</h4>'
console.log(idi)


//innertext
let idea=document.getElementsByClassName('text')
idea[0].innerText= '<h1>Good Morning</h1>';
idea[1].innerText='<h4>Good evening</h4>'
console.log(idi)

//innercontent
let ideal=document.getElementsByClassName('test1')
ideal[0].textContent= '<h1>Good Morning</h1>';
ideal[1].textContent='<h4>Good evening</h4>'
console.log(idi)

//append
let buloon=document.createElement('button')
let head=document.createElement('h1')
buloon.innerHTML="im button"
head.innerHTML="baloon"
document.body.append(buloon,head);

//append
//appendchild
//set attributes
//get attributes
//remove
//assignment1

let table=document.createElement('table')
table.border='1px'
let row1=document.createElement('tr')
let row2=document.createElement('tr')
let row3=document.createElement('tr')
let col1=document.createElement('td')
let col2=document.createElement('td')
let col3=document.createElement('td')
let col4=document.createElement('td')
let col5=document.createElement('td')
let col6=document.createElement('td')
let col7=document.createElement('td')
let col8=document.createElement('td')
let col9=document.createElement('td')


col1.innerHTML='lamborghini'
col2.innerHTML='ferrari'
col3.innerHTML='mclaren'
col4.innerHTML='bugatti'
col5.innerHTML='porsche'
col6.innerHTML='aston martin'
col7.innerHTML='Koenigsegg'
col8.innerHTML='pagani'
col9.innerHTML='maserati'
row1.append(col1,col2,col3)
row2.append(col4,col5,col6)
row3.append(col7,col8,col9)
table.append(row1,row2,row3)

document.body.append(table)


