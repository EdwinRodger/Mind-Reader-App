// Get the current window
var win = nw.Window.get();

// Set window properties
win.width = 360;
win.height = 360;
win.setResizable(false)
win.setPosition("center")

var text = document.getElementById("text");

var btn = document.getElementById("btn");

var btn2 = document.getElementById("btn2");
btn2.hidden = true

var btn3 = document.getElementById("btn3");
btn3.hidden = true

var input = document.getElementById("input");
input.hidden = true


btn.addEventListener("click", function () {
    text.innerHTML = "Enter the number you have in your mind"
    btn.hidden = true
    btn2.hidden = false
    input.hidden = false
})

btn2.addEventListener("click", function () {
    if (input.value == "") {
        text.innerHTML = "You don't have any number in your mind"
    } else {
        text.innerHTML = "The number you have in your mind is " + input.value + "!";
    }
    input.hidden = true
    btn2.hidden = true
    btn3.hidden = false
})

btn3.addEventListener("click", function () {
    win.close()
})

text.innerHTML = "Today I will read your mind"

setInterval(function () {
    win.closeDevTools()
}, 16)