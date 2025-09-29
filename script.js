function firstWord(str) {
  const indexOfSpace = str.indexOf(' ');
  if (indexOfSpace === -1) {
    return str; // Return entire string if no space is found
  }
  return str.substring(0, indexOfSpace); // Return substring up to first space
}

const s = prompt("Enter String:");
alert(firstWord(s));