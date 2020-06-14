// Q3. Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in
// the same sequential order as the old array (minus duplicates).

// Examples
//  removeDups ([1, 0, 1, 0]) ➞ [1, 0]
//  removeDups ([&quot;The&quot;, &quot;big&quot;, &quot;cat&quot;]) ➞ [&quot;The&quot;, &quot;big&quot;, &quot;cat&quot;]
//  removeDups ([&quot;John&quot;, &quot;Taylor&quot;, &quot;John&quot;]) ➞ [&quot;John&quot;, &quot;Taylor&quot;]

const removeDups = (arr) => {
    let newArr = [];
    let j=0;
    for(let i=0; i<arr.length; i++){
        if( newArr.includes(arr[i])){
            continue;
        }
        else{
            newArr[j] = arr[i];
            j++;
        }
    }
    return newArr;
}

let arr = ["John", "Taylor", "John", "Steve"];
console.log(`removeDups(${arr}) --> ${removeDups(arr)}`);

arr = [1, 0, 1, 0, 2];
console.log(`removeDups(${arr}) --> ${removeDups(arr)}`);