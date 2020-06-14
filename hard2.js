// Q2. Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have
// numbers in them. If there are no strings containing numbers, return an empty array.
// Examples
//  numInStr ([&quot;1a&quot;, &quot;a&quot;, &quot;2b&quot;, &quot;b&quot;]) ➞ [&quot;1a&quot;, &quot;2b&quot;]
//  numInStr ([&quot;abc&quot;, &quot;abc10&quot;]) ➞ [&quot;abc10&quot;]
//  numInStr ([&quot;abc&quot;, &quot;ab10c&quot;, &quot;a10bc&quot;, &quot;bcd&quot;]) ➞ [&quot;ab10c&quot;, &quot;a10bc&quot;]
//  numInStr ([&quot;this is a test&quot;, &quot;test1&quot;]) ➞ [&quot;test1&quot;]

let arr = ["ab1c", "ab10c", "a10bc", "bcd"];
var x;
let newArr = [];
let flag = 0;
let k=0;
for(let j=0; j<arr.length; j++){
    x = arr[j];
    for(let i=0; i<x.length; i++){
        if( x[i]==0 || x[i]==1 || x[i]==2 || x[i]==3 || x[i]==4 || x[i]==5 || x[i]==6 || x[i]==7 || x[i]==8 || x[i]==9)
        flag=1;
        break;
    }
}
console.log(flag);
if(flag = 1){ newArr[k] = x;
                 k++; }
flag=0;

console.log(newArr);