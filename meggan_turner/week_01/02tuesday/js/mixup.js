// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the
// concatenation of the two strings (separated by a space) slicing out and swapping
// the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!


var mixUp = function (string1, string2) {

  var newString1 = string2.slice(0,2) + string1.slice(2, (string1.length));
  var newString2 = string1.slice(0,2) + string2.slice(2, (string2.length));
  var result = newString1 + " " + newString2;
  return result;

}
