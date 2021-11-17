var first = document.getElementById("first")
var second = document.getElementById("second")
var third = document.getElementById("third")



function playFirstAudio() {
    console.log("clicked")
    var audio1 = new Audio("carpentry.wav");
    audio1.play();
}

function playSecondAudio() {
    console.log("clicked 2")
    var audio2 = new Audio("shotgun_x.wav")
    audio2.play();
}

function playThirdAudio() {
    console.log("clicked 3")
    var audio3 = new Audio("ricochet_x.wav")
    audio3.play();
}
