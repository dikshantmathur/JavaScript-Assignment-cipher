// Q1. Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.
// Examples
//  convert (5) ➞ 300
//  convert (3) ➞ 180
//  convert (2) ➞ 120

function time_convert(num)
 { 
  var seconds = num * 60;
  return seconds;         
}
console.log(time_convert(5));
console.log(time_convert(3));
console.log(time_convert(2));