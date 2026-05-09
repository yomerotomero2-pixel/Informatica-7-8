document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function(){

        let name = document.querySelector("#name").value;
        console.log("Hi " + name);

        document.querySelector("h1").innerHTML = "Hi " + name;

        let now = new Date();

        let hour = now.getHours();
        if (hour < 12){
            document.querySelector("#time").innerHTML ="Good morning!";
        }else if (hour < 18){
            document.querySelector("#time").innerHTML ="Good aternoon!";
        }else{
            document.querySelector("#time").innerHTML = "Good night!";
        }

        let day = now.getDay();
        console.log(day);
        if (day == 0){
            document.querySelector("#day").innerHTML = "Today is Sunday";
        }
        if (day == 1){
            document.querySelector('#day').innerHTML = "Today is Monday";
        }
        if (day == 2){
            document.querySelector('#day').innerHTML = "Today is Tuesday";
        }
        if (day == 3){
            document.querySelector('#day').innerHTML = "Today is Wednesday";
        }
        if (day == 4){
            document.querySelector('#day').innerHTML = "Today is Thursday";
        }
        if (day == 5){
            document.querySelector('#day').innerHTML = "Today is Friday";
        }
        if (day == 6){
            document.querySelector('#day').innerHTML = "Today is Saturday";
        }


        if (day == 5){
            document.querySelector('#friday').innerHTML = "Finally Fridaaaaaay! 🕺"
         }
         if (day == 6){
            document.querySelector('#friday').innerHTML = "Just enjoy your weekend 🙌"
         }
         if (day == 0){
            document.querySelector('#friday').innerHTML = "Just enjoy your weekend 🙌"
         }
         if (day == 1){
            document.querySelector('#friday').innerHTML = "Not Friday, yet!"
         }
         if (day == 2){
            document.querySelector('#friday').innerHTML = "Not Friday, yet!"
         }
         if (day == 3){
            document.querySelector('#friday').innerHTML = "Not Friday, yet!"
         }
         if (day == 4){
            document.querySelector('#friday').innerHTML = "Not Friday, yet!"
         }

        return false; //Prevents website from reloading
    };
})
