// camelCase where you capitalise the second word, used in Javascript
// this is an example of DOM, how you use JavaScript to modify a website


// Taking the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
// we define a function that gets the element from the document by it´s Id in this case 'count-el'
let countEl = document.getElementById("count-el")
let count = 0 // intialize the count as 0

/* we create a function that listens for clicks on the increment button and 
increments the count variable when the button is clicked. */
function increment() {
    // += takes current value and ads the nuber 1 to it
    count += 1
    countEl.textContent = count

} 

function save(){
    // Create a variable that contains both the count and the dash separator
    let countStr = count + " - "
    saveEl.textContent += countStr
    // To set the count back to 0 each time you save you need to set the countEl and the count to 0
    countEl.textContent = 0
    count = 0
}


/* ------------ MOUSE HOVER INCREMENT BUTTON -------------- */
document.getElementById("increment-btn").onmouseover = function() {mouseOver()};
document.getElementById("increment-btn").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("increment-btn").style.background = "rgb(227, 59, 160)";
}

function mouseOut() {
    document.getElementById("increment-btn").style.background = "rgb(177, 54, 201)";
}   

/* ------------ MOUSE HOVER SAVE BUTTON -------------- */

document.getElementById("save-btn").onmouseover = function() {mouseOverSave()};
document.getElementById("save-btn").onmouseout = function() {mouseOutSave()};

function mouseOverSave() {
    document.getElementById("save-btn").style.background = "rgb(32, 136, 46)";
}

function mouseOutSave() {
    document.getElementById("save-btn").style.background = "rgb(32, 126, 136)";
} 


/* ------------ POP-UP GREETING -------------- */

let myGreeting = setTimeout(function () {
    alert("Count away.. one 🐑 two 🐑 🐑 three 🐑 🐑 🐑 .....🧐 :)");
  }, 5000);

/* ------------ CLOCK -------------- */

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector(".clock").textContent = time;
  }
  
  displayTime();
  const createClock = setInterval(displayTime, 1000);

