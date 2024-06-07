//guess the number challenge

// const max = prompt("Enter the number:");

// const random =  Math.floor(Math.random()*max)+1;

// let guess = prompt("Guess the number:");

// while(true){
//     if(guess == "quit"){
//         console.log("User quit");
//         break;
//     }

//     if(guess == random){
//         console.log("You are right! random no. is",random);
//         break;
//     }else if(guess < random){
//         guess = prompt("your number was too small..please try again");
//     }else{
//         guess = prompt("your number was too large..please try again");
//     }
// }

// function multi(func,count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let great = function(){
//      console.log("Namaskar!!");
// }

// multi(great,10);

const student = {
    name : "Sneha",
    age:19,
    eng : 90,
    math :98,
    phy :89,
    getVal() {
        let avg = (this.eng + this.math +this.phy)/3;
         console.log(`${this.name} got avg marks = ${avg}`);
    }
}

console.log("Hello");
console.log("Hello");
try{
    console.log(a);
}catch{
    console.log("caught an error a is not defined");
}
console.log("Hello");
console.log("Hello");
console.log("Hello");

