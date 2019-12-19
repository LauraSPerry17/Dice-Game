function playRPS(){
    var user =document.getElementById("userInput").value.toLowerCase();
    var comp = Math.floor(Math.random()*3)+1;
        if(comp == 1){
            comp="rock";
        }else if(comp == 2){
            comp="paper";
        }else{
            comp="scissors";
        }
        if(comp==user){
            document.getElementById("RPSOutput").innerHTML = "You chose " + user + "Computer chose " + comp + ". You Win";
        }else if ((user=="rock" && comp=="scissors")||(user == "paper"&& comp == "rock")||(user == "scissors" && comp=="paper")){
            document.getElementById("RPSOutput").innerHTML = "You chose " + user + "Computer chose " + comp + ". You Lose";
        }else{
            document.getElementById("RPSOutput").innerHTML = "You chose " + user + "Computer chose " + comp + ". You Tied";
        }
}