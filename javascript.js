let enemyHP = 50
let playerHP = 50
let diceDisplay = document.querySelector("#dice");


function attack(){
    let playerAttackRandom = Math.floor(Math.random() * 6 + 1)
    enemyHP -= playerAttackRandom;

    diceDisplay.setAttribute("src", "dice/dice" + playerAttackRandom + ".svg");
    enemyHealth.style.width = enemyHP*2 + "%";
    
    if(enemyHP<1){
        gameOver();
    }

    enemyTurn();
}

function enemyTurn(a){
    let enemyAttackRandom = Math.floor(Math.random() * 6 + 1)

    if(a==="block"){
        enemyAttackRandom /= 4;
    }

    playerHP -= enemyAttackRandom;
    playerHealth.style.width = playerHP*2 + "%";

    if(playerHP<1){
        gameOver();
    }
}

function block(){
    enemyTurn("block");
}

function gameOver(){
    alert("Game Over!");
    enemyHP=50;
    playerHP=50;
    enemyHealth.style.width = "100%";
    playerHealth.style.width = "100%";
}