// Q3. Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.
// a = 1, e = 2, i = 3, o = 4, u = 5
// Examples
//  replaceVowel(&quot;karachi&quot;) ➞ &quot;k1r1ch3&quot;
//  replaceVowel(&quot;chembur&quot;) ➞ &quot;ch2mb5r&quot;
//  replaceVowel(&quot;khandbari&quot;) ➞ &quot;kh1ndb1ri&quot;

function replacevowel(text) {
      var s = text.split('');
      for (var i = 0; i < s.length; i++) {
          switch(s[i]) {
            case ' ':
              break;
            case 'a':
              s[i] = '1';
              break;
            case 'e':     
              s[i] = '2';
              break;
              case 'i':
              s[i] = '3';
              break;
              case 'o':
              s[i] = '4';
              break;
              case 'u':
              s[i] = '5';
              break;
            default:
              s[i] = String.fromCharCode(s[i].charCodeAt(0));
          }
      }
      return s.join('');
  }
  console.log(replacevowel('karachi'));