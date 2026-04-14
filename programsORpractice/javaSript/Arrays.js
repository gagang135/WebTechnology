let a=["shirt","pant","watch"]

console.log(a);

 //CRUD operations

 //Add
 console.log(a[3]="shoes")

 //fetch
 console.log(a[2])

 //update
 console.log(a[1]="jeens")

 //delete
 console.log(delete a[3])

 console.log(a);

let pro=["apple","orange","banana"]
 //push
 console.log(pro.push("mango","grapes"))

 console.log(pro);
 
 //unshift

 console.log(pro.unshift("butterfruit","pomogranate"));

 console.log(pro);

 //pop

 console.log(pro.pop());

 console.log(pro);

 //shift

 console.log(pro.shift());

 console.log(pro);

 //splice

 console.log(pro.splice(1,2));

 console.log(pro);

 console.log(pro.splice(1,1,"guava", "pineapple"));

 console.log(pro);

 //slice

 console.log(pro.slice(1,3));

 console.log(pro.slice(0));

 //includes

 console.log(pro.includes("pineapple"));

 console.log(pro.includes("apple"));

 //map, filter and reduce

let shop=[4000, 5000, 300]


console.log(shop);

//map
let b=shop.map((x)=>{
    return x-(x*0.18)
})

console.log(b);


let c=shop.map((y)=>{
    return y*2
})

console.log(c);

//filter
let d=shop.filter((item)=>{
    return item>4000
})

console.log(d);


//reduce
let e=shop.reduce((z,g)=>{
    return z+g
})

console.log(e);


//concat
let p1=['a','b','c']
let p2=['d','e','f']

console.log(p1.concat(p2));

//flat

let nested=[10,20,[30,40,[50,60]]]

console.log(nested.flat(2));

console.log(nested.flat(1));

//new set

let dev=[1,2,2,3,4,1,2,2,3,4,3]

console.log(...new Set(dev));


//sort
console.log(pro.sort())


//sorting of numbers

let num=[30,46,65,78,54,52,44]
console.log(num);
let no=num.sort((h,j)=>{
    return h-j;
})

console.log(" sorted numbers ",no);

//spread and reset


//spread
let num1=[1,2,5]
let num2=[10,2,5]
console.log(...num1,...num2);

//rest
function dem(...number)
{
    return number.map(n=>n*2);
}
console.log(dem(10,20,30,40,50,60));

//array destruncturing

let arr=[1,2,"hello",'A']

let [p,q,r,s]=arr;
console.log(p);
console.log(q);
console.log(r);
console.log(s);

let[aa,bb,[cc,dd,[ee,ff]]]=nested;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
console.log(ee);
console.log(ff);








 
 
 
 
 
 
 
 
 
 
 
 
 