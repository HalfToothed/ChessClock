const set = document.getElementById("set");
const whiteTimer = document.getElementById("white");
const blackTimer = document.getElementById("black");
const whiteDiv = document.getElementById("clockWhite");
const blackDiv = document.getElementById("clockBlack");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
let time;
let whiteState = 0;
let blackState = 0;
let id;

set.addEventListener('click', function(){
    time = document.getElementById("time").value;
    white.textContent = `${time} : ${"00"} `;
    black.textContent = `${time} : ${"00"} `;
    
  //  BlackClock(time,blackState);
    WhiteClock(time,whiteState,blackState);
})



function WhiteClock(time, whiteState,blackState){

    let min = time -1;
    let sec = 60;
    
    whiteDiv.addEventListener('click', function(){
      
        console.log("white");
        if(whiteState == 1){
            whiteState = 1;
            id = setInterval(countingWhite, 1000)
        }else{
            clearInterval(id);
            id = setInterval(countingBlack, 1000)
            blackState =1;
        }
    })

    function countingWhite(){ 
        if(time > 0){
            if(sec > 0){
                sec--;
                if(sec == 0){
                    min--;
                    sec = 60;
                }
                console.log(min + ":" + sec);
                changeWhite(sec,min);
 
            }
        }
        
    }
    function changeWhite(sec, min){

        if(sec == 60){
            sec = "0"; 
        }
       
        sec = sec <= 9 ? '0' + sec : sec;
        min = min <= 9 ? '0' + min : min;

        if(min = -1 && sec == 0){
            console.log("hey");
            whiteTimer.textContent = `${"00"} : ${"00"} `;
        }else{
        whiteTimer.textContent = `${min} : ${sec} `;
        }
        
    }

    // BLACK 

    let minute = time -1;
    let second = 60;

    blackDiv.addEventListener('click', function(){
        console.log("black");
        if(blackState == 0){
            id = setInterval(countingBlack, 1000)
            blackState = 1;
        }else{
            clearInterval(id);
            blackState = 0;
            id = setInterval(countingWhite, 1000)
            whiteState =0;
        }
    })

    function countingBlack(){ 
        if(time > 0){
            if(second > 0){
                second--;
                if(second == 0){
                    minute--;
                    second = 60;
                }
                console.log(minute + ":" + second);
                changeBlack(second,minute);
            
                
            }
        }
        
    }
    function changeBlack(second, minute){

        if(second == 60){
            second = "0";
        }
      
        second = second <= 9 ? '0' + second : second;
        minute = minute <= 9 ? '0' + minute : minute;

        if(minute == -1 && second == 0){
            console.log("hey");
            blackTimer.textContent = `${"00"} : ${"00"} `;
        }else{
        blackTimer.textContent = `${minute} : ${second} `;
        }
        
    }

    function clear(){
        clearInterval(id);
    }
}

pause.addEventListener("click", function(){
    clearInterval(id);
    
})

reset.addEventListener("click", function(){
    window.location.reload();
})