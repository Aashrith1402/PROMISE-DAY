// Potential text box for inputing target text
const text = ' As Promise Day arrives, my heart is filled with happiness for having you in my life. Today, I want to make a heartfelt promise to you, one that comes from the deepest chambers of my heart.I promise to cherish every moment we share together, to stand by your side through all the good and bad times, and to love you with complete devotion. I promise to be a support shoulder, your confidant, and your biggest supporter in all your dreams and endeavors.I promise to listen to you, your feelings and opinions, and will always strive to understand you better. I promise to make you laugh, make you dont have tears in your eyes, and to hold you close in times of need. Most importantly, I promise to love you fiercely, passionately, and unconditionally, today and for all the days to come.Happy Promise Day, my love. Heres to a lifetime of love, laughter, and beautiful promises to be kept.';

// Converting the paragraph into an array - string is bad for manipulating
const paragraph = text.split("");


// Initiating how many letters are there
let i = 0;
// var clickSound = new Audio("http://www.freesfx.co.uk/rx2/mp3s/6/18660_1464810669.mp3");
function dashOut(arr) {

    if (i < arr.length) {
        console.log(arr[i]);
        document.querySelector(".textCont").textContent += arr[i];
        // $(".textCont").text() = $(".textCont").text() + arr[i];
        // clickSound.play();
        i++;
        console.log('The i count: ' + i);
        setTimeout(function() { dashOut(arr) }, interval(arr[i]));
    }

}

// setInterval(function(){(dashOut(paragraph))}, 500);
function interval(letter) {
    console.log(letter);
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}

function startFromBegin() {
    i = 0;
    dashOut(paragraph);
}

startFromBegin();