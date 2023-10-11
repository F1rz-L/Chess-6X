let enemyHP = 50;
let playerHP = 50;
let momentum;
let diceDisplay = document.querySelector("#dice");
let gameOverScreen = document.querySelector("#gameOverScreen")
let gameOverText = document.querySelector("#gameOverText")

function newTurn(){
    enemyTurn();
}

function attack(a){
    let playerAttackRandom = Math.floor(Math.random() * 6 + 1)
    enemyHP -= playerAttackRandom;

    diceDisplay.setAttribute("src", "dice/dice" + playerAttackRandom + ".svg");
    enemyHealth.style.width = enemyHP*2 + "%";
    
    if(enemyHP<1){
        gameOver();
    }

    newTurn();
}

function enemyTurn(a){
    let enemyAttackRandom = Math.floor(Math.random() * 6 + 1)

    if(a==="block"){
        enemyAttackRandom /= 4;
    }

    playerHP -= enemyAttackRandom;
    playerHealth.style.width = playerHP*2 + "%";

    if(playerHP<1){
        gameOver("lose");
    }
}

function block(){
    enemyTurn("block");
}

function gameOver(a){
    if(a==="lose"){
        gameOverScreen.style.display="block"
        gameOverText.innerHTML = "You Lost!"
        playerHealth.style.width = "0%"
    }
    
    else{
        gameOverScreen.style.display="block"
        gameOverText.innerHTML = "You Win!"
        enemyHealth.style.width = "0%";
    }
}

function gameOverHide(){
    gameOverScreen.style.display = "none"
    enemyHP=50;
    playerHP=50;
    enemyHealth.style.width = "100%";
    playerHealth.style.width = "100%";
}