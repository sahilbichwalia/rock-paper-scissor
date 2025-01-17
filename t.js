let userscore=0;
let underscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usscore=document.querySelector("#userscore");
const compscore=document.querySelector("#compscore");
const gencomputerChoice = () =>{
    //rock paper scissor
    const options = ["rock","paper","scissor"];
    const randomind=Math.floor(Math.random()*3);
    return options[randomind];

}
const drawgame =() =>{
    console.log("game was draw.");
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="#81b31";
}
const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userscore++;
        usscore.innerText=userscore;
        console.log("you Win");
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        underscore++;
        compscore.innerText=underscore;
        console.log("you Lose");
        msg.innerText=`you Lose. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
    }

// }
const Playgame= (userChoice)=>{
    console.log("user choice = ",userChoice);
    // generate computer choice
    const compChoice=gencomputerChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice==compChoice){
        drawgame();

    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            //scissor paper
            userwin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){//rock scissor
            userwin=compChoice==="scissor" ? false:true;
        }
        else{
            //rock paper
            userwin=compChoice==="rock" ? false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }



}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");

        // console.log("choice was clicked",);
        Playgame(userChoice);
        
    });
});