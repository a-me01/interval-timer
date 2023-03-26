# Interval timer 
_A simple interval timer created with HTML, CSS and JS_

### An interval timer with these functionalities:
* Allows the user to create intervals using a HTML form.
* Provides visual feedback of the current interval being timed.
* Buttons to remove individual intervals from the created list.
* Clear button to stop the timer and clear the list.


### Known bugs:
* Only accepts one word inputs for interval names, due to array destructuring.
* App does not check whether user input is a number, possible NaN errors.
* Allows user to add empty intervals.
* Deleting intervals from the list while the timer is running, doesn't stop the timer.

### Things I could implement:
* Pause/play button for the timer.
* Allow the user to add different units for time rather than just seconds.
* Allow the user to reorder the list with draggable 'li' elements.
* Alert the user when an interval finishes.
* Add a way for the user to edit individual intervals in the list (such as name, time etc).
* Add a way for the user to save created interval lists and name the saved list.
