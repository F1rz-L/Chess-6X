diceroll.onclick=function(){
    var randnum = Math.floor(Math.random() * 6 + 1)

    document.querySelector("#dice").setAttribute("src", "img/dice" + randnum + ".svg"); 
}