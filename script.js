function firstWord(s) {
  // Check if the input string is empty or does not contain any space
  if (s.trim() === '' || !s.includes(' ')) {
    return s; // Return the entire string if conditions are met
  }

  // Extract the first word up to the first space
  const firstSpaceIndex = s.indexOf(' ');
  const firstWord = s.substring(0, firstSpaceIndex);

  return firstWord; // Return the first word
}

// Do not change the code below

const userInput = prompt("Enter String:");
alert(firstWord(userInput));
