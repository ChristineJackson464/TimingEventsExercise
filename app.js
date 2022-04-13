// TimingEventsExercise

// B-1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
    const div1 = document.querySelector('#first');
    const p1 = document.createElement('p');
    p1.innerText = 'Hi';
    div1.append(p1);
}, 1000);


// B-2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
    div2 = document.querySelector('#timeout-nesting');
    const p2 = document.createElement('p');
    p2.innerText= "One";
    div2.append(p2);

    setTimeout(() => {
        const p3 = document.createElement('p');
        p3.innerText= 'Two';
        div2.append(p3);
    }, 1000);
}, 2000);
//! The nested time should be lesser than outer!


// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let count = 1;
const stop = setInterval(() => {
    console.log(count);
    count++;
}, 1000);

// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
//! COULD NOT GET TO STOP: review CORRECTED version
const stopButton = document.querySelector("button");
stop.addEventListener(`click`, () => {
    clearInterval(stop);
});

// BONUS

// B-4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).

/* Research:

<!-- Display the countdown timer in an element -->
<p id="demo"></p>

// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
*/
//! DID NOT ATTEMPT

const div3 = document.querySelector('#countdown');
const p4 = document.createElement('p');
let num = 120;
const count2 = setInterval(() => {
    if (num> 0){
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        p4.innerText = `${minutes}:${seconds}`;
        div3.append(p4);
    } else {
        clearInterval(count2);
        p4.innerText = 'TIME IS UP!';
        div3.append(p4);
    }
    num--;
}, 1000);


/*
OR
    const startMin = 2;
    let time = startMin * 60;
    let countDownEvent = document.querySelector('countdown');
    let timer = setInterval(updateCountdown, 1000);

    function updateCountdown () {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds > 10 ? '0' + seconds:seconds;
        countDownEvent.innerHTML = `${minutes}:${seconds}`;
        time--;
        if (time === 0) {
            countDownEvent.innerHTML = 'TIME IS UP!';
            clearInterval(timer);
        }
    }
*/