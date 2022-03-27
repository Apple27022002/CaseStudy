const computer =document.querySelector(".computer img");
const player =document.querySelector(".player img");
const computerPoints =document.querySelector(".computerPoints");
const playerPoints =document.querySelector(".playerPointPoints");
const options =document.querySelectorAll(".options button") ;

options.forEach((option) => {
    option.addEventListener("click",()=>{
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(()=>{
            computer.classList.remove(" shakeComputer ");
            player.classList.remove(" shakePlayer ");

            player.scr="./" + option.innerHTML+"Player.png";

            const choice =["Stone","Paper","Cisos"];
            let arrayNo =Math.floor(Math.random() * 3);
            let computerChoice = choice[arrayNo];
            computer.scr ="/."+ computerChoice +"Computer.png";

            let cPoints =parseInt(computerPoints.innerHTML);
            let pPoints =parseInt(playerPoints.innerHTML);

            if (option.innerHTML==="Stone"){
                if (computerChoice==="Paper")
                    computerPoints.innerHTML =cPoints+1;
                else if (computerChoice==="Cisos")
                    playerPoints.innerHTML=pPoints+1;
            }else if (option.innerHTML==="Paper"){
                if (computerChoice===" Cisos")
                    computerPoints.innerHTML=pPoints+1;
                else if (computerChoice==="Stone")
                    playerPoints.innerHTML=pPoints+1;
            }else if (option.innerHTML==="Cisos"){
                if (computerChoice==="Stone")
                    computerPoints.innerHTML=cPoints+1;
                else if (computerChoice==="Paper")
                    playerPoints.innerHTML=pPoints+1;

            }
        },900);
    });
});