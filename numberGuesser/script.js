let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}


const compareGuesses = (human,comp,targ) => {
    
    alert(human);
    let hdiff = getAbsoluteDistance(human,targ);
    let cdiff = getAbsoluteDistance(comp, targ);

    if (hdiff  == cdiff){
        return true;
    }

    else if (hdiff < cdiff){
        return true;
    }

    else if (cdiff < hdiff){
        return false;
    }

}

function getAbsoluteDistance(guess,targ){
    return Math.abs(guess - targ)
}

const updateScore = function(str) {
    if(str === 'human'){
        humanScore++;
    }

    else{
        computerScore++;
    }

}

function advanceRound(){
    currentRoundNumber++;
}