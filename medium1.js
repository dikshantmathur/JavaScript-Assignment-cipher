// Q1. Reverse Words Starting with a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.
// Examples
//  specialReverse (&quot;word searches are super fun&quot;, &quot;s&quot;)
// ➞ &quot;word sehcraes are repus fun&quot;
//  specialReverse (&quot;first man to walk on the moon&quot;, &quot;m&quot;)
// ➞ &quot;first nam to walk on the noom&quot;
//  specialReverse (&quot;peter piper picked pickled peppers&quot;, &quot;p&quot;)
// ➞ &quot;retep repip dekcip delkcip sreppep&quot;

function specialReverse(str1, str2){
    for(let i=0; i<str1.length; i++){
    if( str1[i] == str2 ){
        let rWord = "";
        let word = "";
        while(str1[i] != ' ' && (i-1) != str1.length-1){
            word = word + str1[i];
            i++;
        }
        for(let k=word.length-1; k>=0; k--){
            rWord +=word[k];
        }
        str1 = str1.replace(word, rWord);
        word="";
        rWord=""; 
    }
}
 return str1;
}

var str1 = 'whiskey shows their true colors'
var str2 = 's';
console.log(`specialReverse("${str1}","${str2}") --> ${specialReverse('whiskey shows their true colors', 's')}`);