let enemyHP = 50
let playerHP = 50

function attack(){
    let attackRandom = Math.floor(Math.random() * 6 + 1)
    enemyHP -= attackRandom;

    document.querySelector("#dice").setAttribute("src", "dice/dice" + attackRandom + ".svg"); 

    enemyHealth.style.width = enemyHP*2 + "%";
    if(enemyHP<0){
        enemyHealth.style.width = "0%";
        gameOver()
    }
}

function gameOver(){
    alert("Game Over!")
    enemyHP=50;
    enemyHealth.style.width = "100%";
}