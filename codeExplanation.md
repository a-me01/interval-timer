# interval-timer
 ***This is a file that will explain the JS line by line in plain English.***

```
const clearButton = document.getElementById("clear-button");
```
- This line gets the HTML element with the id of "clear-button" and stores it in the clearButton constant.
```
const ulList = document.getElementById("list");
```
- This line gets the HTML element with the id of "list" and stores it in the ulList constant.
```
let intervalId;
```
-This line of code declares a variable named intervalId and initializes it with the value undefined.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

## generateList(event)
<sub> Function is called when the 'Add Interval' is clicked </sub>
```
function generateList(event) {
```
- This defines a new function called generateList, which takes an event argument that is used to prevent the default form submission behavior when the form's submit button is clicked.
```
event.preventDefault();
```
- This prevents the form from submitting and reloading the page, which is the default behavior.
```
const name = document.getElementById("name").value;
```
- This retrieves the value of the input field with an id of "name" and assigns it to a constant variable called name.
```
const seconds = document.getElementById("seconds").value;
```
- This retrieves the value of the input field with an id of "seconds" and assigns it to a constant variable called seconds.
```
const li = document.createElement("li");
```
- This creates a new li element and assigns it to a constant variable called li.
```
li.innerHTML = ${name} ${seconds}s;
```
- This sets the inner HTML of the li element to a string that includes the name and seconds values, with an "s" appended to the end of the seconds value. This creates a formatted string that will be displayed in the list.
```
const button = document.createElement("button");
    button.innerHTML = "Remove";
    button.addEventListener("click", function () {
      li.remove();
    });
    li.appendChild(button);
```
-This creates a button and stores it in the variable 'button', an event listener is added to this button that removes the corresponding 'li' element when it is clicked, the button is then appended (added to the end of) the 'li' element.
```
const ul = document.getElementById("list");
```
- Retrieves the unordered list element from the document, which has the ID "list", using the getElementById() method and assigns it to a constant variable named ul.
```
ul.appendChild(li);

```
- Adds the newly created li element to the end of the unordered list. This effectively adds a new list item to the existing list.
```
document.getElementById("name").value = "";
document.getElementById("seconds").value = "";
}
```
- Clears the input fields. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

## startTimer()  
<sub> Function is called when the user clicks on the 'Start timer' button </sub>
```
const lis = document.querySelectorAll("#list li");
```
- Selects all the 'li' elements inside the 'ul' element with the ID "list".
```
for (let i = 0; i < lis.length; i++) {
lis[i].classList.remove("current");
}
```
-Removes the "current" class from all of the 'li' elements. The "current" class is used to highlight the current interval that the timer is counting down for.
```
let currentIndex = 0;
let remainingSeconds = 0;
let intervalId;
```
- Initializes some variables:
   - **currentIndex:** This variable is used to keep track of the current 'li' element that the timer is counting down for.
   - **remainingSeconds:** This variable is used to store the number of seconds remaining for the current interval.
   - **intervalId:** This variable is used to store the ID of the interval timer that will be set up later.
```
function countdown() {
```
- The countdown() function is defined within the startTimer() function. This function is responsible for decrementing the remainingSeconds variable every second and updating the timer display.
    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

## countdown() 

```
if (remainingSeconds === 0) {
```
 - Check if the remaining seconds is zero using a conditional statement 'if (remainingSeconds === 0)'.
```
if (currentIndex >= lis.length) {
clearInterval(intervalId);
```
- If the remaining seconds are zero, check if all intervals have been completed by comparing the 'currentIndex' with the length of the 'lis' array. If 'currentIndex' is greater than or equal to the length of 'lis', all intervals have been completed, and the timer should be stopped. So, clear the interval using 'clearInterval(intervalId)'.
```
remainingSeconds = 0;
```

- Set the 'remainingSeconds' to zero.
```
const timerElement = document.getElementById("timer");
timerElement.innerHTML = "0:00";
```
- Get the 'timerElement' by id and set its HTML to "0:00".
```
return;
}
```
- Use the return statement to exit the countdown() function.
```
if (currentIndex > 0) {
lis[currentIndex - 1].classList.remove("current");
}
```
- If there are remaining intervals, remove the "current" class from the previous interval by checking if currentIndex is greater than zero and then removing the "current" class from 'lis[currentIndex - 1]'.
```
const li = lis[currentIndex];
```
- Get the current interval li using the currentIndex.
```
const [name, seconds] = li.innerHTML.split(" ");
```
- Split the innerHTML of the li element into name and seconds using array destructuring.
```
remainingSeconds = parseInt(seconds, 10);
```
- Parse the seconds string as an integer using parseInt(seconds, 10). The second argument 10 specifies the 'radix' of the number system used in the string, in this case, the decimal system.
```
currentIndex++;
```
- Increment currentIndex to move to the next interval.
```
li.classList.add("current");
}
```
- Add the "current" class to the current interval li element.
```
const minutes = Math.floor(remainingSeconds / 60);
const seconds = remainingSeconds % 60;
```
- Calculate the minutes and seconds left for the current interval using 'Math.floor(remainingSeconds / 60)' to get the whole minutes and 'remainingSeconds % 60' to get the remaining seconds.
```
const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;
```
- Format the minutes and seconds using 'toString().padStart(2, "0")'. The padStart() method is used to add a leading zero to the seconds if necessary, so that it always has two digits.
```
const timerElement = document.getElementById("timer");
timerElement.innerHTML = timeString;
```
- Get the 'timerElement' by id and set its HTML to 'timeString'.
```
remainingSeconds--;
}
```
- Decrement the remainingSeconds by one.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

## After countdown() is defined
<sub> Still inside the startTimer() function </sub>
```
countdown();
```
- The countdown() function is called once at the beginning to display the time for the first interval.
```
intervalId = setInterval(countdown, 1000);
}
```
-The intervalId variable is set to the ID of an interval timer that calls the countdown() function every 1000 milliseconds (i.e., every second).
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
## Clearing the li list
```
clearButton.addEventListener("click", function () {
```
- This line adds an event listener to the clearButton element for the "click" event. When the button is clicked, the function that follows will be executed.

```
 clearInterval(intervalId);
```
- This stops the timer by using clearInterval and passing IntervalID.
```
ulList.innerHTML = "";
```
- This line sets the innerHTML property of the ulList element to an empty string, effectively removing all of its child elements.
```
const timerElement = document.getElementById("timer");
timerElement.innerHTML = "0:00";
});
```
-This resets the timer display.
