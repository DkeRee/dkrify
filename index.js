function dkrify(string){
	const randomChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	function random(cap){
		return Math.floor(Math.random() * cap);
	}

	function seizure(textArray, length){
		var output = "";
		for (var i = 0; i < length; i++){
			output += textArray[random(textArray.length)];
		}
		return output;
	}

	function seizureInit(length){
		var randomTextArray = [];
		for (var i = 0; i < length; i++){
			randomTextArray.push(randomChar[random(randomChar.length)]);
		}
		return randomTextArray;
	}

	function checkForCh(word){
		var chCounter = false;
		for (var i = 0; i < word.length; i++){
			if (word[i] == "c"){
				if (!chCounter.length){
					chCounter = true;
				} else {
					chCounter = false;
				}
			}
			if (word[i] == "h" && chCounter){
				return i + 1;
			}
		}
	}

	const wordArray = string.split(" ");

	function fuckingDie(){
		for (var i = 0; i < wordArray.length; i++){
			const spam = randomChar.concat(["🧀", "😩", "🥵", "🚽", "✅", "🤭", "👍", "💦", "💀", "🍆", "😡", "🔪", "❌", "🍉"]);
			wordArray[i] = seizure(spam, 30);
		}
	}

	for (var i = 0; i < wordArray.length; i++){
		var word = wordArray[i].toLowerCase();

		//special cases

		//chchify
		if (word.includes("ch")){
			var chance = random(100);
			var chIndex = checkForCh(word.toLowerCase());

			if (chance > 50){
				word = word.slice(0, chIndex) + seizure(["c", "h"], random(4) + 1) + word.slice(chIndex);
			} else {
				word = word.slice(0, chIndex) + seizure(["🧀", "😩", "🥵"], random(5) + 1) + word.slice(chIndex);
			}
		}

		//dkr

		if (random <= 5){
			if (word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u")){
				var output = "";
				for (var o = 0; o < word.length; o++){
					if (word[o] == "a" || word[o] == "e" || word[o] == "i" || word[o] == "o" || word[o] == "u"){
						output += "r";
					} else {
						output += word[o];
					}
				}
				word = output;
			}
		}

		//jumble
		for (var o = 0; o < 2; o++){
			if (random(100) <= 5){
				if (random(50) <= 50){
					word = `${word} ${seizure(["🧀", "😩", "🥵", "🚽", "✅", "🤭", "👍", "💦", "💀", "🍆", "😡", "🔪", "❌", "🍉"], random(2) + 1)}`;
				} else {
					word = `${seizure(["🧀", "😩", "🥵", "🚽", "✅", "🤭", "👍", "💦", "💀", "🍆", "😡", "🔪", "❌", "🍉"], random(2) + 1)} ${word}`;
				}
			}

			if (random(100) <= 40 && word.length > 3){
				var chance = random(word.length);
				word = word.slice(0, chance) + seizure(seizureInit(2), 2) + word.slice(chance);
			}
		}

		//fucking die
		if (random(100) <= 2){
			fuckingDie();
		}

		//change word after dkrifying
		wordArray[i] = word;
	}
	return wordArray.join(" ");
}

exports.dkrify = dkrify;