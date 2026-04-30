function coin(user){
    let randumNum = Math.random(); //aqui guaradamos este numero en una variable que podemos usar luego
    console.log(randumNum); //esto solo es para ver los numero que se estan generando
    let coinresult;

    let subtitle = document.querySelector("h2"); //con el queryselector agarramos cosas del html para usarlos rn el script.js
    if(randumNum > 0.5){
        subtitle.innerHTML = "Heads"; //de mi subtitile vamos a modificar el texto
        coinresult = "Heads";

    }else{
        subtitle.innerHTML ="Tails";
        coinresult = "Tails";
    }

    let result = document.querySelector("h3");
    if(user == coinresult){
        result.innerHTML = "You won";
    }else{
        result.innerHTML = "You lost";
    }
}



