function firstWord(s) {
  // your code here
	if(str.trim() === '' || !str.includes(' ')){
		return str;
	}

	const firstSpaceIndex = str.indexOf(' ');
	const firstWord = str(0 , firstSpaceIndex);

	return firstword;
	
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
