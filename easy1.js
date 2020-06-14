// Q1. Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string
// (the single character) is found in the second string.
// Examples
//  charCount (&quot;a&quot;, &quot;edabit&quot;) ➞ 1
//  charCount (&quot;c&quot;, &quot;Chamber of secrets&quot;) ➞ 1
//  charCount (&quot;b&quot;, &quot;big fat bubble&quot;) ➞ 4

function char_count(letter, str)
{
    var letter_count = 0;
    for (var position = 0; position < str.length; position++)
    {
        if(str.charAt(position) == letter)
        {
            letter_count += 1;
        }
    }
    return letter_count;
}
console.log(char_count('d','sdadsaa'));