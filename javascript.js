let enemyHP = 50;
let playerHP = 50;
let attackCount = 0;
let momentum = 0;
let diceRotation = 0;
let diceDisplay = document.querySelector("#dice")
let gameOverScreen = document.querySelector("#gameOverScreen")
let gameOverText = document.querySelector("#gameOverText")

function newTurn(){
    enemyTurn();
    
}

function attack(a){
    let playerAttackRandom = Math.floor(Math.random() * 6 + 1)
    
    if(attackCount>=3){
        playerAttackRandom = Math.floor(Math.random() * 4 + 1);
        diceDisplay.style.filter = "invert(13%) sepia(58%) saturate(6970%) hue-rotate(357deg) brightness(111%) contrast(120%)";
    }
    else{
        diceDisplay.style.filter = "none"
    }

    // if(momentum>=1){
    // }
        playerAttackRandom*(momentum*0.5+1)
        momentum = 0;

    enemyHP -= playerAttackRandom;
    diceDisplay.setAttribute("src", "dice/dice" + parseInt(playerAttackRandom) + ".svg");
    diceRotation += 90;
    diceDisplay.style.rotate = diceRotation+'deg';
    enemyHealth.style.width = enemyHP*2 + "%";

    console.log("PlayerDmg = " + playerAttackRandom)
    console.log("attackCount = " + attackCount)

    if(enemyHP<1){
        gameOver();
    }

    attackCount++
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
    diceDisplay.style.filter = "none"
    attackCount = 0;
    momentum++
    console.log(momentum)
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
    diceDisplay.style.display = "none";
    enemyHealth.style.width = "100%";
    playerHealth.style.width = "100%";
    diceDisplay.style.filter = "none"
    diceDisplay.style.display = "block";
}