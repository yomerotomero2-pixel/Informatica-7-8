// va a esperar a que todo cargue
document.addEventListener("DOMContentLoaded",function(){
    const kick = new Audio("sounds/kick.wav");//de esa carpeta sacamos el audio y lo ponemos en una variable
    const snare = new Audio("sounds/snare.wav");
    const clap = new Audio ("sounds/clap.wav");
    const cowbell = new Audio("sounds/cowbell.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const openhat = new Audio("sounds/openhat.wav");
    const tom = new Audio("sounds/tom.wav");
    const yuh = new Audio("sounds/yuh.wav");

    const kickDiv = document.querySelector("#kick");
    const snareDiv = document.querySelector("#snare");
    const clapDiv = document.querySelector("#clap");
    const cowbellDiv = document.querySelector("#cowbell");
    const hihatDiv = document.querySelector("#hihat");
    const openhatDiv = document.querySelector("#openhat");
    const tomDiv = document.querySelector("#tom");
    const yuhDiv = document.querySelector("#yuh");

    //window  to the whole browser
    window.addEventListener("keydown",function(event){//todo lo que suceda en este curly brackets va a suceder en lo que presionamos una tecla
        if (event.key == "a"){
            kick.currentTime = 0;
            kick.play();
            kickDiv.classList.add("active");
        } else if (event.key == "s"){
            snare.currentTime = 0;
            snare.play();
            snareDiv.classList.add("active");
        } else if (event.key == "c"){
            clap.currentTime = 0;
            clap.play();
            clapDiv.classList.add("active");
        } else if (event.key == "o"){
            cowbell.currentTime = 0;
            cowbell.play();
            cowbellDiv.classList.add("active");
        } else if (event.key == "h"){
            hihat.currentTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");
        } else if (event.key == "p"){
            openhat.currentTime = 0;
            openhat.play();
            openhatDiv.classList.add("active");
        } else if (event.key == "t"){
            tom.currentTime = 0;
            tom.play();
            tomDiv.classList.add("active");
        } else if (event.key == "y"){
            yuh.currentTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
        }
    })

    window.addEventListener("keyup", function(event){
        if (event.key == "a") {
            kickDiv.classList.remove("active");
        } else if (event.key == "s") {
            snareDiv.classList.remove("active");
        } else if  (event.key == "c") {
            clapDiv.classList.remove("active");
        } else if (event.key == "o") {
            cowbellDiv.classList.remove("active");
        } else if (event.key == "h") {
            hihatDiv.classList.remove("active");
        } else if (event.key == "p") {
            openhatDiv.classList.remove("active");
        } else if (event.key == "t") {
            tomDiv.classList.remove("active");
        } else if (event.key == "y") {
          yuhDiv.classList.remove("active");
        }
    })
})

