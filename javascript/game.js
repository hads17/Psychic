var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var lifeCount = 9
var userguesses = []
var winCount = 0;
var loseCount = 0;
var guessCount = [];
var answer = letters[random()]


//allowing the game to recognize the key
document.onkeyup = function(event){
		if (event.keyCode >= 65 && event.keyCode <= 90){
			guessCount.push(event.key)
			guessCountUpdate();
			console.log(event);
			winLoseCondition();
	}
}
//Listing guesses so far
var guessCountUpdate = function(){
	document.getElementById('guesses').innerHTML = guessCount.join('  , ');
}

var winLoseCondition = function(){
	if(event.key == answer){
		winCount += 1;
		console.log(winCount);
		document.getElementById('wins').innerHTML = winCount;
		reset();
		lifeCount = 9;
		guessCount.length = 0;
	} else if (lifeCount == 0) {
		loseCount += 1;
		console.log(loseCount);
		document.getElementById('losses').innerHTML = loseCount;
		lifeCount = 9
		guessCount.length = 0
	} else {
		lifeCount -= 1;
		document.getElementById('lives').innerHTML = lifeCount;
	}
}

 function reset(){
	answer = letters[random()];

}
function random(){
	return Math.floor((Math.random() * letters.length));
	console.log(answer)
}

