function changeColor(){

}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeColorR(){
    document.getElementById('text').style.color="Red";
}
function changeColorB(){
    document.getElementById('text').style.color="Blue";
}
function changeColorG(){
    document.getElementById('text').style.color="GREEN";
}
function changeBg(){
    var color = document.getElementById('colorsel').value ;
    document.getElementsByTagName('td')[1].style.backgroundColor=color;
    
}

