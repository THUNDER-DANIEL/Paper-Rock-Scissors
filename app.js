
let items=[`rock`, `paper ` , `scissors`]



function play(playerChoice){
    let cChoice = computer()
    // console.log(cChoice)

    if(playerChoice === cChoice){
        return document.getElementById('win-msg').innerText = `TIE`;
    }

    if(cChoice==="scissors"){
        if(playerChoice==="paper"){
            return document.getElementById('win-msg').innerText = " Scissors WINS 1";
        }
        else{
            return document.getElementById('win-msg').innerText = "No One Wins paper wins 2";
        }
    }

    if(cChoice==="scissors"){
        if(playerChoice==="rock"){
            return document.getElementById('win-msg').innerText = " Rock WINS 3";
        }
        else{
            return document.getElementById('win-msg').innerText = "No One Wins paper wins 4";
        }
    }


    if(cChoice==="paper"){
        if(playerChoice==="scissors"){
            return document.getElementById('win-msg').innerText = " Scissors WINS 5";
        }
        else{
            return document.getElementById('win-msg').innerText = "No One Wins Rock wins 6";
        }
    }


    if(cChoice==="paper"){
        if(playerChoice==="rock"){
            return document.getElementById('win-msg').innerText = "Rock wins 7";
        }
        else{
            return document.getElementById('win-msg').innerText = " No One Wins Scissors wins 8";
        }
    }

    if(cChoice==="rock"){
        if(playerChoice==="paper"){
            return document.getElementById('win-msg').innerText = `Paper Wins 9`;
        }
        else{
            return document.getElementById('win-msg').innerText = `No One Wins Scissors wins 10`;
        }
    }

    if(cChoice==="rock"){
        if(playerChoice==="scissors"){
            return document.getElementById('win-msg').innerText = `Rock Wins 11`;
        }
        else{
            return document.getElementById('win-msg').innerText = `No One Wins paper wins 12`;
        }
    }

    document.getElementById('comp').innerText = `COMPUTER: ${cChoice}`
}

play()




function computer(){
    let index= Math.floor(Math.random()*items.length)
    let computerChoice = items[index]
    return computerChoice
}
computer()


// Determine the value of each item (Paper rock scissor) LOGIC 
//         rock wins over scissors / loses to paper ++
//         paper wins over rock  / loses to scissors
//         scissors wins over paper / loses to rock 





// How to add the computer logic / math random

// how to battle/compare player vs computer( else if)