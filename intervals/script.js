let counter = 5;


function count() {
    document.querySelector('h1').innerHTML = counter;
    const alarm = new Audio("alarm.mp3");

    if (counter > 0){
        counter--;
        document.querySelector('h1').innerHTML = counter;
    }else if (counter == 0){
        alarm.play();
        time--;
    }

    
}

    document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);//we use interval so it wont stop
    document.querySelector("button").disabled = true;





    };
});

