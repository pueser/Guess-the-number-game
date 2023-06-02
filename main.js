//유저는 숫자를 입력할수 있다.
//유자가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 적으면 UP! 이라고 알려준다
//유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 DOWN!이라고 알려준다
//유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하면, That's right이라고 뜨고 게임종료한다.
//유저는 총 5번의 기회가 있다
//게임이 종료되면 버튼은 비활성화 된다
//리셋버튼을 누르면 게임이 초기화 된다.
//유저가 1~100범위의 밖에 숫자를 입력할 시에 경고에 메시지가 뜬다
//유저가 이미 입력한 값을 또 입력할 시에 경고메시지가 뜬다
//반응형UI만들기

let computerumber = 0;
let usernumber = document.getElementById("user-number");
let resultarea = document.getElementById("result-area");
let playbutton = document.getElementById("play-button");
let chancearea = document.getElementById("chance-area");
let resetbutton = document.getElementById("reset-button");
let img = document.getElementById("basic-img");
let chance =5;
playbutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);

function num (){
    computerumber = Math.floor((Math.random()*100))+1;
    console.log("정답", computerumber);
}

function play(){
    if(usernumber.value<1 || usernumber.value>100 || usernumber.value == null || isNaN(usernumber.value) == true ){
        resultarea.textContent = "1부터 100사이의 값을 입력하세요.";
        usernumber.value = null; 
        return;
    }
    
    chance --;
    chancearea.textContent = `남은기회 ${chance}번`
    if(chance==0){
        resultarea.textContent = "~GAME OVER~"
        img.src="images/fail.gif";
        playbutton.disabled = true;
        usernumber.value = null; 
        return;
    }
    
    if(usernumber.value < computerumber){
       resultarea.textContent = "UP!"
       img.src="images/up.gif";
       usernumber.value = null; 
   }else if(usernumber.value > computerumber){        
       resultarea.textContent = "DOWN!"
       img.src="images/down.gif";
       usernumber.value = null; 
    }else{
       resultarea.textContent = "That's right!"
       playbutton.disabled = true;
       img.src="images/success.gif";
       usernumber.value = null; 
    }
}
function reset(){
    chance =6;
    chance --;
    chancearea.textContent = `남은기회 ${chance}번`
    playbutton.disabled = false;
    usernumber.value ='';
    num ();
    resultarea.textContent = "1부터 100사이의 값을 입력하세요.";
    img.src="images/basic.gif";
}

num();