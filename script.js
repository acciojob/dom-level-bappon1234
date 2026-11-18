//your JS code here. If required.

let currentElement = document.getElementById("level");
let levelCount = 0;


while (currentElement && currentElement.parentElement) {
    levelCount++;
    currentElement = currentElement.parentElement;
}


alert(`The level of the element is: ${levelCount}`);
