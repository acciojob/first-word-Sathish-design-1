function firstWord(str) {
  if (str.indexOf(' ') === -1) {
    return str.trim(); // Return the trimmed string if there's no space
  } else {
    return str.slice(0, str.indexOf(' ')).trim(); // Extract the first word
  }
}
const s = prompt("Enter String:");
alert(firstWord(s));