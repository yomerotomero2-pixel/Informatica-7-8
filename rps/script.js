function game(user){
    let randumNum = Math.random();
    console.log(randumNum);

    let subtitle = document.querySelector("h2");
    if(randumNum > 0.3 < 0.6){
        subtitle.innerHTML = "Rock👊";
    }
    if(randumNum < 0.3){
        subtitle.innerHTML = "Paper✋";
    }
    if(randumNum > 0.6){
        subtitle.innerHTML = "Scissors✌️";
    }else{
        subtitle.innerHTML = "Rock";
    }

    let result = document.querySelector("h3");
    if(user == "Rock"){
        result.innerHTML = "You won";
    }else{
        result.innerHTML = "You lost";
    }
    if(user == "Paper"){
        result.innerHTML = "You won";
    }else{
        result.innerHTML ="You lost";
    }
    if(user == "Scissors"){
        result.innerHTML = "You won";
    }else{
        result.innerHTML ="You lost";
    }

}

