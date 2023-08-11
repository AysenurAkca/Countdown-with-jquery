let startingMinutes=25;
let time = startingMinutes * 60;
let setTime;
let reset;
let minutes;
let seconds;


 $("#start").click(function(){
    startingMinutes = 25;
    time = startingMinutes * 60;
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds<10 ? "0"+ seconds : seconds;
    $("#timer").html(`${minutes}:${seconds}`);
    $("#edit-text").hide()
    $("#edit-btn").hide()
    setTime = setInterval(updateCountDown, 1000);
    if(minutes == 0 && seconds ==0){
        clearInterval(setTime)
        clearInterval(reset)
        clearInterval(edit)
        playMusic() 
    }
})

$("#reset").click(function(){
    clearInterval(setTime)
    startingMinutes = 25;
    time = startingMinutes * 60;
    reset= setInterval(updateCountDown, 1000);
    
})

function updateCountDown(){
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds<10 ? "0"+ seconds : seconds;
    $("#timer").html(`${minutes}:${seconds}`);
    time--;
    if(minutes == 0 && seconds ==0){
        clearInterval(setTime)
        clearInterval(reset)
        clearInterval(edit)
        playMusic() 
    }
}

function playMusic() {
    let audio = new Audio("timeup.mp3")
    audio.play()
  }

$("#edit").click(function(){
    $("#edit-text").show()
    $("#edit-btn").show()
    clearInterval(setTime)
    clearInterval(reset)
})



$("#edit-btn").click(function(){
    startingMinutes = Number($("#edit-text").val());
    time = startingMinutes * 60;
    minutes = Math.floor(time / 60);
    seconds = "00";
    $("#timer").html(`${minutes}:${seconds}`);
    edit = setInterval(updateCountDown, 1000);
    if(minutes == 0 && seconds ==0){
        clearInterval(setTime)
        clearInterval(reset)
        clearInterval(edit)
        playMusic() 
    }
})





