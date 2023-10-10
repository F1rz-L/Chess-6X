attackButton.onclick=function(){
    var randnum = Math.floor(Math.random() * 6 + 1)

    document.querySelector("#dice").setAttribute("src", "dice/dice" + randnum + ".svg"); 
}