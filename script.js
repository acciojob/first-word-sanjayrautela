function firstWord(str) {
  // Check if the input string is empty or does not contain any space
  if (str.trim() === '' || !str.includes(' ')) {
    return str; // Return the entire string if conditions are met
  }

  // Extract the first word up to the first space
  const firstSpaceIndex = str.indexOf(' ');
  const firstWord = str.substring(0, firstSpaceIndex);

  return firstWord; // Return the first word
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(str));
