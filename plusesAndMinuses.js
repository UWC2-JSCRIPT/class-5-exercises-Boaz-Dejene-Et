// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let count = 0;

function addCount() {
    count = count + 1;
    document.getElementById("count").innerHTML = count
    console.log(count)
}

function substractCount() {
    count = count - 1;
    document.getElementById("count").innerHTML = count
    console.log(count)
}

document.getElementById("count").innerHTML = count