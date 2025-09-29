function firstWord(str) {
  str = str.trim(); 
  const indexOfSpace = str.indexOf(' ');
  if (indexOfSpace === -1) {
    return str; 
  }
  return str.substring(0, indexOfSpace); 
}

const s = prompt("Enter String:");
alert(firstWord(s));