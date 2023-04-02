var red = 255;
var green = 255;
var blue = 255;


function colorCreater(){
    red = document.getElementById("Vred").value;
    green = document.getElementById("Vgreen").value;
    blue = document.getElementById("Vblue").value;

    document.getElementById("Pred").innerHTML = red;
    document.getElementById("Pgreen").innerHTML = green;
    document.getElementById("Pblue").innerHTML = blue;

    colorCode = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("clrValue").innerHTML = colorCode;
    document.getElementById("bg").style.background = colorCode;
}