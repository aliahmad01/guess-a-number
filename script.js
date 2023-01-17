let a = Math.floor(Math.random() * 100);
console.log(a);
// let button =document.getElementById('btn');
let container=document.getElementById('container');
let msg1 = document.getElementById('msg1');
let msg2 = document.getElementById('msg2');
let msg3 = document.getElementById('msg3');
let dayNight= document.getElementById('daynight');
let no_of_guesses = 0;
let guesses_nums = [];
let inputTag = document.getElementById("input");
let msg4 = document.getElementById('msg4');
let tries = 3;
msg4.innerText = `Tries Left: ${tries}`;

btn.onclick = () => {

    let input = +document.getElementById("input").value;
    tries--;
    msg4.innerText = `Tries Left: ${tries}`
    // trie()
    if (input < 1 || input > 100) {
        alert("enter between 1 to 100");
    }
    else {
        guesses_nums.push(input);
        no_of_guesses += 1;

        msg1.style.visibility = "initial";
        if (input > a) {
            msg1.innerText = "guess is too high";
            msg2.innerText = `No of guesses: ${no_of_guesses}`;
            msg3.innerText = `Guessed numbers are: ${guesses_nums}`;
        }
        else if (input < a) {
            msg1.innerText = "guess is too low";
            msg2.innerText = `No of guesses: ${no_of_guesses}`;
            msg3.innerText = `Guessed numbers are: ${guesses_nums}`;
        }
        else if (input === a) {
            msg1.innerText = "YooHoo! you win";
            msg2.innerText = `No of guesses: ${no_of_guesses}`;
            msg3.innerText = `You guess in: ${no_of_guesses} tries`;
        }
        if(tries<0){
            alert('over')
            recet();
        }

    }
    
    inputTag.value = '';
    inputTag.focus();
}
const recet= ()=>{
    tries = 3;
    guesses_nums = [];
    no_of_guesses = 0;
    input.value = "";
    msg1.style.visibility = "hidden";
    msg2.innerText = `No of guesses:`;
    msg3.innerText = `Guessed numbers are: None `;
    msg4.innerText = `Tries Left: ${tries} `
}
reset.onclick = () => {
    recet();
    inputTag.focus();
}
let colr=true;
dayNight.onclick = (()=>{
    container.classList.toggle("hide");
    dayNight.classList.toggle('changeText');
    if(colr){ 
        dayNight.innerText='light';  
        colr=false;
    }
    else{
        dayNight.innerText='dark';  
        colr=true;
    }
    
})

// function trie() {
//     if (tries < 0) {
//         // tries = 3;
//         // msg1.style.visibility = "hidden";
//         // msg2.innerText = `No of guesses:`;
//         // msg3.innerText = `Guessed numbers are: None `;
//         // msg4.innerText = `Tries Left: ${tries}`;
//         // alert("over");
//         // if (tries==1){

//         //     recet();
//         // }
//     }
//     else {
//         msg4.innerText = `Tries Left: ${tries}`
//     }
// }




// console.log(a)
// let input;
// let score = 100;

// while(input!=a){
//     score = score-1;
//     input = +prompt("Enter a Number");
//     if(input==a){
//         alert(`congadulations! Your Gusse is correct in ${100-score} chances`);
//     }
//     // break;
//     else if(input>a && input<100){
//         console.log(`your numper ${input} is greater then GUSSE `);
//         console.log("Try Again");
//     }
//     else if(input<a && input>0){
//         console.log(`your numper ${input} is less then GUSSE `);
//         console.log("Try Again");
//     }
//     else {
//         console.log("Enter value between 1 & 100")
//     }
// }


// let arr=[];;
// for(let i=1; i<=100; i++ ){
//     arr.push(i);
// }
// console.log(arr);
// let index=1 ;
// arr.forEach((e)=>{
//     arr.splice(index , 2)
//     index++;
// })
// console.log(arr);