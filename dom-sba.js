// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("timer").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "Your tea is ready! :)";
//   }
// }, 1000);

let teaArr = [
    {type: "green", time: 2 , temp: 160},
    {type: "white", time: 3 , temp: 180},
    {type: "black", time: 4 , temp: 212},
    {type: "herbal", time: 5 , temp: 212} ]


let chooseTeaEl = document.getElementById("choose-tea-btn")
let dropdownEl = document.getElementById("dropdown-menu")
let teaButtonsEl = document.querySelectorAll(".tea-btn")
let teaInstructionsEl = document.querySelector(".dynamic-content")
let teaTimerEl = document.getElementById("timer-text")
let startTimerEl = document.getElementById("start")
let stopTimerEl = document.getElementById("stop")
let resetTimerEl = document.getElementById("reset")
let musicPlayerEl = document.getElementById("music-button")
let audioPlayerEl = document.getElementById("audio-player")
// console.log(musicPlayerEl);

// // console.log(teaButtonsEl)
// // console.log(chooseTeaEl)
// // console.log(dropdownEl)
// console.log(teaArr)
let isPlaying = false
function playMusic(){
 
    musicPlayerEl.addEventListener("click", () => {
        if (isPlaying === false) {
            audioPlayerEl.play();
            musicPlayerEl.textContent = "Pause Music";
            isPlaying = true;
        }
        else {
            audioPlayerEl.pause();
            musicPlayerEl.textContent = "Play Music";
            isPlaying = false;
        }
        })} playMusic()

    function chooseTea() {
        chooseTeaEl.addEventListener("click", () => {
            dropdownEl.classList.toggle("no-display")
        })   
    }

    chooseTea()


    // 1. Function will listen for click event on the dropdown menu buttons onplay. 
    // 2. Upon click, it will parse through the teaArr and look for the objects whos text property matches the button element text.  
    // 3. When a match is found it will then use the matching objects other properties to dynamically populate the temp and time variables
    //  4. which are then inserted into tea instructions and timer as template literal values.
    function teaTypePopulate() {
        let time = 0
            let temp = 0


        teaButtonsEl.forEach((button) => {
            let buttonText = button.textContent
            let minutes = 0
            let temp = 0
            let type = ""
        
                // 1.
            button.addEventListener("click", () => {
                //2. 
                teaArr.forEach((teaObject) => {
                    // console.log(teaObject.type)
                    // console.log(buttonText)
               
                        // 3.
                    if (teaObject.type == buttonText) {
                       temp = teaObject.temp;
                        minutes = teaObject.time;
                        type = teaObject.type;

                    
                        // 4.                     
                        teaTimerEl.textContent = `${minutes}:00`
                        teaInstructionsEl.textContent = `Brew ${type} tea at ${temp}°F for ${minutes} minutes.`}

                    //     else { console.log("not a match") } 
            })})
                })}
    teaTypePopulate()