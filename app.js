// Grabbing The Element We Need To Monitor
const box = document.getElementById("box");

// Event listener to handle hover or mouseover & change color to blue
box.addEventListener("mouseover", () => box.style.backgroundColor = "blue");

// Event listener to mousedown & change color to red
box.addEventListener("mousedown", () => box.style.backgroundColor = "red");

// Event listener to handle mouseup & change color to yellow
box.addEventListener("mouseup", () => box.style.backgroundColor = "yellow");

// Event listener to handle double click & change color to green
box.addEventListener("dblclick", () => box.style.backgroundColor = "green");

// Event listener to handle mousewheel anywhere on the page
document.body.addEventListener("mousewheel", () => box.style.backgroundColor = "orange");



// Event listener to handle keys for color change
document.addEventListener("keydown", (event) => {
    if ( event.which === 66 ) {
        box.style.backgroundColor = "blue";
    } else if ( event.which === 82) {
        box.style.backgroundColor = "red";
    } else if ( event.which === 89 ) {
        box.style.backgroundColor = "yellow";
    } else if ( event.which === 71 ) {
        box.style.backgroundColor = "green";
    } else if ( event.which === 79 ) {
        box.style.backgroundColor = "orange";
    }
});