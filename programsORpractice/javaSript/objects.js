
let car={
    brand: "toyota",
    model: "innova",
    year:2020
}
console.log(car);

//add
console.log(car.type="petrol");
console.log(car);

//update
console.log(car.model="fortuner");
console.log(car);

//delete
console.log(delete car.year);
console.log(car);


//functions inside a object
let student={
    id:101,
    name:"Gagan",
    branch:"ECE",
    marks: {
        kannada: 120,
        english: 85,
        hindi: 97
    }
}
//fetch
console.log(student.marks.kannada);
//or
console.log(student["marks"]["kannada"]);

//add
console.log(student.marks.maths=87);
console.log(student);

//update
console.log(student.marks.english=90);
console.log(student);

//delete
console.log(delete student.marks.hindi);
console.log(student);

//named and arrow functions inside object

//named function
let mydata={
    name: "Gagan",
    add: function (a,b){
        console.log(`addition of ${a} and ${b} is:`,a+b);
        
    }
}
mydata.add(3,5)


//arrow function
let myData={
    name: "Gagan",
    add1:  (c, d) => c+d
}

console.log(myData.add1(5,8));


//using this keyword
let account={
    name: "Gagan",
    balance: 5000,
    deposite:function(amount){
        this.balance+=amount
        console.log(`${this.name} balance is ${this.balance}`)
        
    }
} 
account.deposite(3000)


//object methods

//freeze
console.log(Object.freeze(car));

//add
console.log(car.type="diesel");
console.log(car);

//update
console.log(car.model="innova");
console.log(car);

//delete
console.log(delete car.year);
console.log(car);

//isFrozen
console.log(Object.isFrozen(car));


//seal
console.log(Object.seal(student));

console.log(student.marks.maths=50);
console.log(student);

//update
console.log(student.marks.english=60);
console.log(student);

//delete
console.log(delete student.marks.hindi);
console.log(student);


console.log(Object.isSealed(student));


//keys
console.log(Object.keys(account));

//values
console.log(Object.values(account));



//object destructuring

let {name, balance}=account

console.log(`${name} and ${balance}`);

let {id, name1, branch, marks :{ kannada,english,hindi,maths} }=student
console.log(`student ${id} and name ${name} from branch got marks like ${kannada}, ${english}, ${hindi}, ${maths}`);







