const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const comp=document.getElementById("computer");
const user=document.getElementById("user");
const change=document.getElementById("change");
const won=document.getElementById("won");

let usercount=0;
let compcount=0;

btn1.addEventListener("click",() => button(1));

btn2.addEventListener("click",() => button(2));

btn3.addEventListener("click",() => button(3));

function getComputerChoice() 
{
    const options = ["Rock", "Paper", "Scissor"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function getWhoWon()
{
    if(usercount===5 || compcount===5)
    {
        if(usercount===5)
        {
            alert("You Won The Match !");
        }
        else if(compcount===5)
        {
            alert("Computer Won The Match !");
        }
        usercount=null;
        compcount=null;
        user.value=usercount;
        comp.value=compcount;
        change.innerHTML="Play Rock Paper Scissor";
    }
}

function button(value) 
{
    const choices = ["Rock", "Paper", "Scissor"];
    const userChoice = choices[value - 1];
    const computer = getComputerChoice();
    let result = "";

    if (userChoice === computer) 
    {
        result = `You Chose ${userChoice} | Computer Chose ${computer}, It's a Tie!`;
    } 
    else if ((userChoice === "Rock" && computer === "Scissor") || (userChoice === "Paper" && computer === "Rock") ||(userChoice === "Scissor" && computer === "Paper")) {
        result = `You Chose ${userChoice} | Computer Chose ${computer}, You Won!`;
        user.value = ++usercount;
    } 
    else 
    {
        result = `You Chose ${userChoice} | Computer Chose ${computer}, Computer Won!`;
        comp.value = ++compcount;
    }
    
    change.innerHTML = result;
    getWhoWon();
}