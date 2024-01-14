let userScore=0;
let compScore=0;
let userscorepara=document.querySelector("#userscore");
let compscorepara=document.querySelector("#compscore");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


let showWinner = (userWin,userchoice,compchoice)=>{
    
    if(userWin){
        userScore++;
        msg.innerText=`You Win ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscorepara.innerText=userScore;
        }
    else{
        compScore++;
        msg.innerText=`You Lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        compscorepara.innerText=compScore;
    }
};
const playgame=(userchoice)=>{

    const compchoice = genCompChoice();
    if(userchoice===compchoice){
        msg.innerText="Draw,Play Again";
        msg.style.backgroundColor="blue";
    }
    
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;
            
        }
        else if(userchoice==="paper"){
            userWin=compchoice==="scissors"?false:true;
        }
        else{
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
    
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
});