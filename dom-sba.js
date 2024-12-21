
let teaArr = [
    {type: "green", time: 2 , temp: 160},
    {type: "white", time: 3 , temp: 180},
    {type: "black", time: 4 , temp: 212},
    {type: "herbal", time: 5 , temp: 212} ]

    let selectedTea
    let timerInterval 
    let remainingSeconds 


let chooseTeaEl = document.getElementById("choose-tea-btn") 
let timerButtonsEl = document.getElementById("timer-buttons")

let dropdownEl = document.getElementById("dropdown-menu")
let teaButtonsEl = document.querySelectorAll(".tea-btn")
let teaInstructionsEl = document.querySelector(".dynamic-content")
let timerDiv = document.getElementById("timer-div")
let teaTimerEl = timerDiv.firstElementChild
let musicPlayerEl = document.getElementById("music-button")
let audioPlayerEl = document.getElementById("audio-player")
let bellSoundEl = document.createElement("audio")
bellSoundEl.src = "./assets/bell.mp3"  
bellSoundEl.id = "bell"
document.body.appendChild(bellSoundEl) 


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
                        remainingSeconds = teaObject.time * 60;
                        type = teaObject.type;
                        
                        console.log("Remaining Seconds:", remainingSeconds);
                       
                    
                        // 4.                     
                        teaTimerEl.textContent = formatTime(remainingSeconds)
                        teaInstructionsEl.textContent = `Brew ${type} tea at ${temp}°F for ${minutes} minutes.`}
                        // console.log(teaTimerEl.textContent);

                    //     else { console.log("not a match") } 
            })})
                })}
    teaTypePopulate()

            function formatTime(seconds) {
                let minutes = Math.floor(seconds / 60);
                let remainingSeconds = seconds % 60; // Calculate the remaining seconds
                return `${String(minutes).padStart(1, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
              }
            
      

// //remaining items: 
// 1. timer to countdown in real time 
// 2. and trigger bell sound
// 3. push notification 
// 4. and changeto its text content



// The timerCountdown will be a handler function for the timerStart function. It should convert the value into minutes and reduce the count down by one second per second until the count down is 0:00 at wich poiont the audio element should play()

console.log(teaTimerEl.textContent)
let startTimerEl = document.getElementById("start")
let stopTimerEl = document.getElementById("stop")
let resetTimerEl = document.getElementById("reset")
let timerInternal;
let seconds =0 ;
function timerStart() {
   
    if (!remainingSeconds || remainingSeconds <= 0) {
      alert("Please select a tea type first!");
      return;
    }
 
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        sendNotification("Your tea is ready!");
       
        if (remainingSeconds > 0) {
          remainingSeconds--;
          teaTimerEl.textContent = formatTime(remainingSeconds); // Update the timer display
          console.log(`Time left: ${remainingSeconds} seconds`);
        } else {
          
          clearInterval(timerInterval); 
          timerInterval = null; //
          teaTimerEl.textContent = "0:00"; 
          bellSoundEl.play(); // 
          sendNotification("Your tea is ready!"); 
          console.log("Timer has finished!");
        }
      }, 1000);
    }
  }

  
  // Function 2: Stop the timer
  function timerStop() {
        if (timerInterval) {
            clearInterval(timerInterval); 
            timerInterval = null; 

          }
  }
  
  // 3. Reset the timer
 
function timerReset() {
    timerStop(); // Ensure the timer is stopped before resetting
    if (selectedTea) {
      remainingSeconds = selectedTea.time * 60; 
      teaTimerEl.textContent = formatTime(remainingSeconds); 
      console.log("Timer reset.");
    } 
    else {
      teaTimerEl.textContent = "0:00";
      console.log("No tea selected, timer reset to 0:00.");
    }
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
            
        })   
    }
    chooseTea()

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

    // BOM Method send push when tea timer is done! even if you stray to another tab its really the window object
    
    function sendNotification(message) {
        if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Your tea is ready :)");
            }
        });
    }}

    // Tea Leaf Reader // form validation // 

    const teaFortunes = [
        "A small creature watches over you, unseen. It marvels at your persistence and wonders if you notice it, too.",
        "A great opportunity will find its way to you soon. You’ll hesitate, and the opportunity will wait patiently.",
        "You’ve been carrying something heavy for too long. This week, you’ll set it down, and it will roll farther than you expect.",
        "Someone you admire will reach out soon. Their words will feel rehearsed, but their intentions will be genuine.",
        "You’ll notice a shadow in a place it shouldn’t be. It’s just passing through, but it knows your name.",
        "The wind will carry a secret to you this week. You’ll recognize it as your own, whispered back to you.",
        "A forgotten kindness will be returned to you soon. It will arrive in a form you almost don’t recognize.",
        "A door you haven’t opened in a long time will creak slightly this week. You won’t open it, but you’ll think about what’s behind it.",
        "You’ll notice a bird watching you today. It knows something you don’t, but it approves of your decision anyway.",
        "Something small and soft will find its way to you soon. It will remind you of a time you thought you’d forgotten.",
        "This week, you’ll misplace something dear to you. It will return to you on its own, carrying the faint scent of pine.",
        "You’ll laugh unexpectedly today. For a moment, it will feel like the walls are listening, and they’ll seem pleased.",
        "The next time you hear someone say your name, listen closely. It will sound slightly different than you remember.",
        "Your reflection will catch you off guard this week. It will seem as though it’s trying to tell you something, but only in passing.",
        "A soft glow will surround you soon, unnoticed by most. Those who do notice will feel warmer for it."
      ];

    function formValidation() {
        let form = document.getElementById("form")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let valid = true
            let errorMessage - ""
            
            let name = document.getElementById("name").value
            let birthday = document.getElementById("birthday").value
            let tea = document.querySelector('input[name="tea"]:checked').value
            if (!name || !birthday || !tea) {
                
            }