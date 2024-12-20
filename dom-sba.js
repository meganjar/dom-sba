
let teaArr = [
    {type: "green", time: 2 , temp: 160},
    {type: "white", time: 3 , temp: 180},
    {type: "black", time: 4 , temp: 212},
    {type: "herbal", time: 5 , temp: 212} ]



let chooseTeaEl = document.getElementById("choose-tea-btn") 
let timerButtonsEl = document.getElementById("timer-buttons")

let dropdownEl = document.getElementById("dropdown-menu")
let teaButtonsEl = document.querySelectorAll(".tea-btn")
let teaInstructionsEl = document.querySelector(".dynamic-content")
let timerDiv = document.getElementById("timer-div")
let teaTimerEl = timerDiv.firstChild
let startTimerEl = document.getElementById("start")
let stopTimerEl = document.getElementById("stop")
let resetTimerEl = document.getElementById("reset")
let musicPlayerEl = document.getElementById("music-button")
let audioPlayerEl = document.getElementById("audio-player")
let bellSoundEl = document.createElement("audio")
bellSoundEl.src = "./assets/bell.mp3"  
bellSoundEl.id = "bell"
document.body.appendChild(bellSoundEl) 

// //remaining items: 
// 1. timer to countdown in real time 
// 2. and trigger bell sound
// 3. push notification 
// 4. and changeto its text content

// sba req accessing children and style from DOM
function sbaReq() {
    let kiddies = timerButtonsEl.children
  for (kids of kiddies) {
    kids.style.margin = "5px";
   
    }
  }
  
//   kiddies.forEach((node) => {
//         node.style.margin = "5px"
//         console.log(timerButtonsEl.children); // Check what's inside the NodeList
//     })
 sbaReq()

// The timerCountdown will be a handler function for the timerStart function. It should convert the value into minutes and reduce the count down by one second per second until the count down is 0:00 at wich poiont the audio element should play()
function timerStart() {
    
}



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
            console.log('click');
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
                        console.log(teaTimerEl.textContent);

                    //     else { console.log("not a match") } 
            })})
                })}
    teaTypePopulate()

    // BOM Method send push when tea timer is done! even if you stray to another tab its really the window object
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Hello! This is a push notification.");
            }
        });
    }