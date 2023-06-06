let computerumber = 0;
let usernumber = document.getElementById("user-number");
let resultarea = document.getElementById("result-area");
let playbutton = document.getElementById("play-button");
let chancearea = document.getElementById("chance-area");
let resetbutton = document.getElementById("reset-button");
let img = document.getElementById("basic-img");
let usernumberlist = [];
let chance =5;
playbutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
usernumber.addEventListener("focus", function(){
    usernumber.value = "";
});

function num (){
    computerumber = Math.floor(Math.random()*100)+1;
    console.log("정답", computerumber);
}
num();

function play(){
    let uservalue = usernumber.value;
    
    if(uservalue<1 || uservalue>100 || uservalue == null || isNaN(uservalue) == true){
        resultarea.innerText = "1부터 100사이의 값을 입력하세요.";
        return;
    }

    if(usernumberlist.includes(uservalue)){
        resultarea.innerText = "이미 입력한 값 입니다.";
        return;
    }
    
    
    chance --;
    chancearea.innerText = `남은기회 ${chance}번`
    
    if(uservalue < computerumber){
       resultarea.innerText = "UP!"
       img.src="images/up.gif";
   }else if(uservalue > computerumber){        
       resultarea.innerText = "DOWN!"
       img.src="images/down.gif";
   }else {
    resultarea.innerText = "That's right!"
       img.src="images/success.gif";
       playbutton.disabled = true;
   return;
   }

    
    if(chance==0){
        resultarea.innerText = "~GAME OVER~"
        img.src="images/fail.gif";
        playbutton.disabled = true;
    }

    usernumberlist.push(uservalue);
}

function reset(){
    chance =5;
    chancearea.innerText = `남은기회 ${chance}번`
    playbutton.disabled = false;
    usernumberlist = [];
    usernumber.value = "";
    num ();
    resultarea.innerText = "1부터 100사이의 값을 입력하세요.";
    img.src="images/basic.gif";
}

