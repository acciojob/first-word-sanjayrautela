function firstWord(s) {
  // your code here
	if(s.trim() === '' || !s.includes(' ')){
		return str;
	}

	const firstSpaceIndex = s.indexOf(' ');
	const firstWord = s(0 , firstSpaceIndex);

	return firstword;
	
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
