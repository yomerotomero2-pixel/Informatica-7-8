// function game(user){
//     let randumNum = Math.random();
//     console.log(randumNum);

//     let subtitle = document.querySelector("h2");
//     if(randumNum > 0.33 < 0.66){
//         subtitle.innerHTML = "Rock👊";
//     }
//     if(randumNum < 0.3){
//         subtitle.innerHTML = "Paper✋";
//     }
//     if(randumNum > 0.6){
//         subtitle.innerHTML = "Scissors✌️";
//     }else{
//         subtitle.innerHTML = "Rock";
//     }


//     let result = document.querySelector("h3");
//     if(user == "Rock"){
//         result.innerHTML = "You won";
//     }else{
//         result.innerHTML = "You lost";
//     }
//     if(user == "Paper"){
//         result.innerHTML = "You won";
//     }else{
//         result.innerHTML ="You lost";
//     }
//     if(user == "Scissors"){
//         result.innerHTML = "You won";
//     }else{
//         result.innerHTML ="You lost";
//     }

// }

//PROFE'S
function game(userChoice){
    let randomNum = Math.random();
    let compChoice;
    if (randomNum < 0.33){
        compChoice = " Rock";
    } else if (randomNum < 0.66){
        compChoice = "Paper";
    } else if (randomNum < 1);{
        compChoice = "Scissors";
    }

    let result = document.querySelector
    ("#result");
    if (userChoice == compChoice){
        result.innerHTML ="Tie";
    }else if (userChoice == "Rock"){
        if(compChoice == "Paper"){
            result.innerHTML = "Take the L";
        } else {
            result.innerHTML = "You got it";
        }
    }
}

// document.addEventListener('DOMContentLoaded',function(){
//     document.querySelector(#rock-button").onclick = "Rock");
// })
