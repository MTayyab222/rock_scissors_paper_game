let userScore=0;
let comScore=0;
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const CompScorePara=document.querySelector("#comp-score");

const genComChoice=()=>{
    const options=["rock","paper","Scissors"];
    const randIndx= Math.floor(Math.random()*3);
    return options[randIndx];
}


const drawGame=()=>{
    // console.log("Game was draw!");
    msg.innerText="Game was Draw, play again!";
    // msg.style.backgroundColor ="green";
}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    // console.log("You Won!");
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`you win! your ${userChoice} beats ${compChoice}` ;
    // msg.style.backgroundColor ="green";
}else{
    comScore++;
    CompScorePara.innerText=comScore;
    // console.log("You Lost!");
    msg.innerText=`You lose!  ${compChoice} beasts your ${userChoice}`;
    // msg.style.backgroundColor ="red";
}
}

const playGame=(userChoice)=>{
    console.log("User choice =",userChoice);
    //computer choice
    const compChoice=genComChoice();
    console.log("computer choice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }

    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors paper
           userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice === "scissors") {
            userWin = compChoice === "paper" ? true : false;
          }
        else{
        //rock , paper
        compChoice==="rock"?false: true;
        }
      showWinner(userWin , userChoice, compChoice);

       }

       
};

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked!",userChoice)
        playGame(userChoice);
    })
})