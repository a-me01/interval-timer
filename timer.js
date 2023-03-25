
const clearButton = document.getElementById("clear-button");
const ulList = document.getElementById("list");

let intervalId;
// form to generate li into the ul
function generateList(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const seconds = document.getElementById("seconds").value;
    const li = document.createElement("li");
    li.innerHTML = `${name} ${seconds}s`;
    const button = document.createElement("button");
    button.innerHTML = "Remove";
    button.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(button);
    const ul = document.getElementById("list");
    ul.appendChild(li);
    document.getElementById("name").value = "";
    document.getElementById("seconds").value = "";
  }

// interval timer function
function startTimer() {
    // storing li's into variable
    const lis = document.querySelectorAll("#list li");

    // remove "current" class from all li on execution
    for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("current");
    }

    // variable setting
    let currentIndex = 0;
    let remainingSeconds = 0;
    let intervalId;

    // updated, timer ends in 0
    function countdown() {
        if (remainingSeconds === 0) {
            if (currentIndex >= lis.length) {
                clearInterval(intervalId);
                remainingSeconds = 0;
                const timerElement = document.getElementById("timer");
                timerElement.innerHTML = "0:00";
                return;
            }
            // Remove the "current" class from the previous li element
            if (currentIndex > 0) {
                lis[currentIndex - 1].classList.remove("current");
            }
            const li = lis[currentIndex];
            // destructured array - makes 2 variables in one line using split() method
            const [name, seconds] = li.innerHTML.split(" ");
            remainingSeconds = parseInt(seconds, 10);
            currentIndex++;
            // Add the "current" class to the current li element
            li.classList.add("current");
        }
        // calculates the number of full minutes remaining, rounded down to the nearest integer.
        const minutes = Math.floor(remainingSeconds / 60);
        // calculates the number of seconds remaining after subtracting the full minutes.
        const seconds = remainingSeconds % 60;
        // padstart method to format the seconds in the countdown,
        // first argument is how long string should be, second argument is 
        // the number to use for padding (ie. 01:03, rather than 1:3)
        const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        const timerElement = document.getElementById("timer");
        timerElement.innerHTML = timeString;
        remainingSeconds--;
    }
    countdown();

    intervalId = setInterval(countdown, 1000);


    // clear button to clear the li list and stop the timer
    clearButton.addEventListener("click", function () {
    // stop the timer by using clearInterval and passing in interval ID
    clearInterval(intervalId);
    ulList.innerHTML = "";
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = "0:00";
  });

}