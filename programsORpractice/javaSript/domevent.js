
//dom events => onclick
let but=document.createElement('button')
but.innerHTML="login"
but.onclick=()=>{
    console.log("login successful");
    document.write("login successful")
}
document.body.append(but);


//dom events => onclick
let liked=document.getElementsByTagName('button')
function like(){
    alert("liked")
}

//dom events => add event listener
let hr=document.createElement('hr')
document.body.append(hr)
let btn=document.createElement('button')
btn.innerHTML='signin'
document.body.append(btn)

btn.addEventListener("click",function(){
    console.log('signin successful');
    document.write("signin successfully")
    
})


//assignment 2
let bts=document.getElementById("bts")
console.log(bts);

bts.addEventListener('click',() => {
    let user=document.getElementById('user').value;
    console.log(user);

    let pass=document.getElementById('pass').value;
    console.log(pass);

    let div=document.querySelector("div")
    console.log(div);


    console.log("logged in successfully")
    div.innerHTML=`username is ${user} and password is ${pass}`;
})
