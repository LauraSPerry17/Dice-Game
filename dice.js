function dice(){
    console.log("indiceRoll");
    var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;
    var total = dice1+dice2;
    if(total==7||total==11){
        document.getElementById("diceOutput").innerHTML = "You rolled" + total + ". You Win";
    }else if(total==2||total==3||total==12){
        document.getElementById("diceOutput").innerHTML = "You rolled" + total + ". You Lose";
    }else{
        document.getElementById("diceOutput").innerHTML = "You rolled" + total + ". Nothing";
    }
}
