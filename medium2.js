// Q2. Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the
// array are identical, and false otherwise. The array will contain 4 elements.
// Examples
//  testJackpot ([&quot;@&quot;, &quot;@&quot;, &quot;@&quot;, &quot;@&quot;]) ➞ true
//  testJackpot ([&quot;abc&quot;, &quot;abc&quot;, &quot;abc&quot;, &quot;abc&quot;]) ➞ true
//  testJackpot ([&quot;SS&quot;, &quot;SS&quot;, &quot;SS&quot;, &quot;SS&quot;]) ➞ true
//  testJackpot ([&quot;&amp;&amp;&quot;, &quot;&amp;&quot;, &quot;&amp;&amp;&amp;&quot;, &quot;&amp;&amp;&amp;&amp;&quot;]) ➞ false
//  testJackpot ([&quot;SS&quot;, &quot;SS&quot;, &quot;SS&quot;, &quot;Ss&quot;]) ➞ false

const testJackpot = (sample) => {
    var ans;
    for(let i=0; i<sample.length-1; i++){
        if( sample[i] == sample[i+1]){
            ans = true;
        }else{
            ans = false;
            break;
        }
    }
    return ans;
}

let sample = ["SS", "SS", "SS", "SS"];
console.log(`testJackpot("${sample}") --> ${testJackpot(sample)}`);

sample = ["@","@@","@@","@@"];
console.log(`testJackpot("${sample}") --> ${testJackpot(sample)}`);