console.log(`
JavaScript Assignment
Name: E Ma
Date: 09/14/2025`)

console.log(`1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223\n`)

tests = [32242, 1000000, 0, -123, 9876543210] // Normal positive numbers, Edge cases, Single-digit numbers, Negative numbers, Very large numbers
expectedResult = [24223, 1, 0, -321, 123456789]

function reverseNumForloop(num) {
    let str = num.toString();
    let reversedStr = '';

    for (let i = str.length -1; i >= 0; i--)
    {
        reversedStr += str[i]
    }

    return Number(reversedStr)
}
function reverseNumForloop(num) {
  let str = num.toString();
  let reversedStr = '';

  for (let i = str.length -1; i >= 0; i--)
  {
      reversedStr += str[i]
  }

  return Number(reversedStr)
}

function reverseNumberMath(num) {
    let reversed = 0;
  
    for (let n = num; n > 0; n = Math.floor(n / 10)) {
      let digit = n % 10;             // get the last digit
      reversed = reversed * 10 + digit; // build reversed number
    }
  
    return reversed;
  }

function reverseNumberMathWhileLoop(num) {
    let reversed = 0;
    while (num > 0) {
      let digit = num % 10;           // get the last digit
      reversed = reversed * 10 + digit; // build the reversed number
      num = Math.floor(num / 10);     // remove the last digit
    }
  
    return reversed;
  }

const functions = {
    "For loop with string": reverseNumForloop,
    "Math for loop": reverseNumberMath,
    "Math while loop": reverseNumberMathWhileLoop
};

for (let [name, func] of Object.entries(functions)) {
    console.log(`\nTesting: ${name}`);
    for (let i = 0; i < tests.length; i++) {
        const input = tests[i];
        const expected = expectedResult[i];
        const output = func(input);

        if (output === expected) {
            console.log(`PASS: input=${input}, output=${output}`);
        } else {
            console.log(`FAIL: input=${input}, output=${output}, expected=${expected}`);
        }
    }
}

console.log(`\n 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run\n`)

tests = ['', 'abc', 'aaa']
expected = [true, false, true]
function isPalindrome(str) {
  if (str == '') {return true}
  reversedStr = str.split('').reverse().join('')
  if (reversedStr == str) {
    return true
  }
  return false 
}

for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = isPalindrome(input);
  if (output === expected[i]) {
    console.log(`PASS: input=${input}, output=${output}`);
  } else {
    console.log(`FAIL: input=${input}, output=${output}, expected=${expected[i]}`);
  }
}

console.log(`\n3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g\n`)

tests = ['dog', 'g', '']
expected = [['d', 'do', 'dog', 'o', 'og', 'g'],['g'],[]]
function generateCombinations(str) {
  let res = [];
  for (let start = 0; start < str.length; start++) {
    for (let end = start+1; end <= str.length; end++)
    {
      res.push(str.slice(start, end))
    }
  }
  return res
} 

for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = generateCombinations(input);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${input}', output=[${output.join(", ")}]`);
}

console.log(`\n4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.\n`)

function sortStr(str) {
  return str.split('').sort().join('');
}

tests = ['webmaster', 'g', ''];
expected = ['abeemrstw', 'g', ''];

for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = sortStr(input);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${input}', output='${output}'${passFail === "FAIL" ? `, expected='${expected[i]}'` : ''}`);
}

console.log(`\n5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '\n`)

tests = ['the quick brown fox', '', 'a cb']
expected = ['The Quick Brown Fox','', 'A Cb']
  function capitalizeFirstLetter(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 0)
      // console.log("words[i][0].toUpperCase()", words[i])
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ')
  }

for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = capitalizeFirstLetter(input);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${input}', output='${output}'${passFail === "FAIL" ? `, expected='${expected[i]}'` : ''}`);
}

console.log(`\n6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'\n`)

tests = ['Web Development Tutorial', '', 'hello a str']
expected = ['Development', '', 'hello']

function findLongestStr(str) {
  let longestWord = ''
  let words = str.split(" ")
  for (let word of words) {
    if (word.length > longestWord.length) 
    {
      longestWord = word
    }
  }
  return longestWord
}

for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = findLongestStr(input);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${input}', output='${output}'${passFail === "FAIL" ? `, expected='${expected[i]}'` : ''}`);
}

console.log(`\n7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5\n`)

tests = ['The quick brown fox', '', 'aeiou', 'AAA']
expected = [5, 0, 5, 3]
function countVowels(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if ((['a', 'e','i', 'o', 'u']).includes(letter)) {
      count += 1;
    }
  }
  return count;
}

for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = countVowels(input);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${input}', output='${output}'${passFail === "FAIL" ? `, expected='${expected[i]}'` : ''}`);
}

console.log(`\n
8. Write a JavaScript function that accepts a number as a parameter and checks whether the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
\n`);

tests = [1, 5, 0, 24]
expected = [false, true, false, false]
function checkPrime(num) {
  if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num); i++)
    {
      if (num%i === 0)
      {
        return false
      } 
    }
    return true
}

for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = checkPrime(input);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${input}', output='${output}'${passFail === "FAIL" ? `, expected='${expected[i]}'` : ''}`);
}

console.log(`\n
9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
`);

tests = [{}, true, function(){}, 2, 2.3, '', undefined]
expected = ["object", "boolean", "function", "number", 'number', "string", "undefined"]
function findType(input) {
  return typeof input
}
for (let i = 0; i < tests.length; i++) {
  const input = tests[i];
  const output = findType(input);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${input}', output='${output}'${passFail === "FAIL" ? `, expected='${expected[i]}'` : ''}`);
}

console.log(`\n
10. Write a JavaScript function which returns the n rows by n columns identity matrix.
\n`);

tests = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4]
];

expected = [
  [[1]],
  [[1, 0],
   [0, 1]],
  [[1, 0, 0],
   [0, 1, 0],
   [0, 0, 1]],
  [[1, 0, 0, 0],
   [0, 1, 0, 0],
   [0, 0, 1, 0],
   [0, 0, 0, 1]]
];

function buildMatrix(row, col) {
  let matrix = []
  for (let i=0; i<row; i++) {
    matrix[i]=[]
    for (let j=0; j<col; j++) {
      matrix[i][j] = (i===j) ? 1 : 0;
    }
  }
  return matrix;
} 

for (let i = 0; i < tests.length; i++) {
  const [row, col] = tests[i];
  const output = buildMatrix(row, col);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: buildMatrix(${row}, ${col}) =`);
  console.log(output);
}

console.log(`
11. Write a JavaScript function which will take an array of numbers and find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4
`);

tests = [[1,2,3,4,5]]
expected = [[2,4]]
function findSecond(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length < 2) {
    return [null, null]; // cannot find second lowest/greatest
  }

  let sortedArr = [...arr].sort((a,b) => a-b);
  const lowest = sortedArr[0];
  const greatest = sortedArr[sortedArr.length - 1];

  function findSecondLowest() {
    for (let v of sortedArr) {
      if (v > lowest) return v;
    }
  }

  function findSecondGreatest() {
    for (let v of [...sortedArr].reverse()) {
      if (v < greatest) return v;
    }
  }

  return [findSecondLowest(), findSecondGreatest()];
}

for (let i = 0; i < tests.length; i++) {
  const output = findSecond(tests[i]);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: input=${tests[i]}, output=[${output}]`);
}


// 12. Perfect number
console.log(`\n12. Perfect number check\n`);

tests = [6, 28, 12, 496];
expected = [true, true, false, true];

function isPerfect(num) {
  if (num <= 0) return false;
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

for (let i = 0; i < tests.length; i++) {
  const output = isPerfect(tests[i]);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input=${tests[i]}, output=${output}`);
}

// 13. Factors of a number
console.log(`\n13. Factors of a number\n`);

tests = [6, 28];
expected = [[1,2,3,6],[1,2,4,7,14,28]];

function factors(num) {
  let res = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) res.push(i);
  }
  return res;
}

for (let i = 0; i < tests.length; i++) {
  const output = factors(tests[i]);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: input=${tests[i]}, output=[${output}]`);
}

// 14. Amount to coins
console.log(`\n14. Convert amount to coins\n`);

tests = [[46, [25,10,5,2,1]], [100, [50,20,10,5,1]]];
expected = [[25,10,10,1],[50,50]];

function amountToCoins(amount, coins) {
  let res = [];
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      res.push(coin);
    }
  }
  return res;
}

for (let i = 0; i < tests.length; i++) {
  const [amount, coins] = tests[i];
  const output = amountToCoins(amount, coins);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: amount=${amount}, coins=[${coins}], output=[${output}]`);
}

// 15. Compute b^n
console.log(`\n15. Compute b^n\n`);

tests = [[2,3],[5,4]];
expected = [8,625];

function power(b,n) {
  return Math.pow(b,n);
}

for (let i = 0; i < tests.length; i++) {
  const [b,n] = tests[i];
  const output = power(b,n);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: b=${b}, n=${n}, output=${output}`);
}

// 16. Extract unique characters
console.log(`\n16. Unique characters in a string\n`);

tests = ["thequickbrownfoxjumpsoverthelazydog"];
expected = ["thequickbrownfxjmpsvlazydg"];

function uniqueChars(str) {
  return [...new Set(str)].join('');
}

for (let i = 0; i < tests.length; i++) {
  const output = uniqueChars(tests[i]);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${tests[i]}', output='${output}'`);
}

// 17. Count occurrences of each letter
console.log(`\n17. Letter occurrences\n`);

tests = ["hello"];
expected = [{h:1,e:1,l:2,o:1}];

function countLetters(str) {
  const counts = {};
  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

for (let i = 0; i < tests.length; i++) {
  const output = countLetters(tests[i]);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${tests[i]}', output=${JSON.stringify(output)}`);
}

// 18. Binary search
console.log(`\n18. Binary search\n`);

tests = [[1,3,5,7,9],5];
expected = [2];

function binarySearch(arr, target) {
  let left=0, right=arr.length-1;
  while(left <= right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) left = mid+1;
    else right = mid-1;
  }
  return -1;
}

for (let i = 0; i < tests.length; i++) {
  const [arr,target] = tests[i];
  const output = binarySearch(arr,target);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: arr=[${arr}], target=${target}, output=${output}`);
}

// 19. Array elements larger than a number
console.log(`\n19. Array elements larger than a number\n`);

tests = [[[1,2,3,4,5],3]];
expected = [[4,5]];

function largerThan(arr,num){
  return arr.filter(x=>x>num);
}

for (let i = 0; i < tests.length; i++) {
  const [arr,num] = tests[i];
  const output = largerThan(arr,num);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: arr=[${arr}], num=${num}, output=[${output}]`);
}

// 20. Generate a string id (random characters)
console.log(`\n20. Generate random string id\n`);

tests = [5, 8];
expected = ["any", "any"]; // We'll check only length

function randomId(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let res = '';
  for (let i = 0; i < length; i++) {
    res += chars[Math.floor(Math.random() * chars.length)];
  }
  return res;
}

for (let i = 0; i < tests.length; i++) {
  const length = tests[i];
  const output = randomId(length);
  const passFail = output.length === length ? "PASS" : "FAIL";
  console.log(`${passFail}: length=${length}, output='${output}'`);
}

// 21. All possible subsets of fixed length
console.log(`\n21. Subsets of fixed length\n`);

tests = [[[1,2,3],2]];
expected = [[[1,2],[1,3],[2,3]]];

function combinations(arr, len) {
  let res = [];
  function helper(start, comb) {
    if (comb.length === len) {
      res.push([...comb]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      comb.push(arr[i]);
      helper(i+1, comb);
      comb.pop();
    }
  }
  helper(0, []);
  return res;
}

for (let i = 0; i < tests.length; i++) {
  const [arr, len] = tests[i];
  const output = combinations(arr,len);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: arr=[${arr}], length=${len}, output=${JSON.stringify(output)}`);
}

// 22. Count occurrences of a specific letter
console.log(`\n22. Count occurrences of a letter\n`);

tests = [['microsoft.com','o']];
expected = [3];

function countLetter(str, letter){
  return [...str].filter(c => c === letter).length;
}

for (let i = 0; i < tests.length; i++) {
  const [str, letter] = tests[i];
  const output = countLetter(str, letter);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: str='${str}', letter='${letter}', output=${output}`);
}

// 23. First non-repeated character
console.log(`\n23. First non-repeated character\n`);

tests = ['abacddbec','aabbcc','xyz'];
expected = ['e', null, 'x'];

function firstNonRepeated(str){
  for (let c of str){
    if (str.indexOf(c) === str.lastIndexOf(c)) return c;
  }
  return null;
}

for (let i = 0; i < tests.length; i++) {
  const output = firstNonRepeated(tests[i]);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${tests[i]}', output='${output}'`);
}

// 24. Bubble Sort
console.log(`\n24. Bubble Sort\n`);

tests = [[12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]];
expected = [[1,4,9,12,23,64,84,98,122,213,234,345,455,546,3223]];

function bubbleSort(arr){
  let sorted = [...arr];
  for (let i=0;i<sorted.length;i++){
    for (let j=0;j<sorted.length-i-1;j++){
      if(sorted[j]>sorted[j+1]){
        [sorted[j],sorted[j+1]]=[sorted[j+1],sorted[j]];
      }
    }
  }
  return sorted;
}

for (let i = 0; i < tests.length; i++) {
  const output = bubbleSort(tests[i]);
  const passFail = JSON.stringify(output) === JSON.stringify(expected[i]) ? "PASS" : "FAIL";
  console.log(`${passFail}: input=[${tests[i]}], output=[${output}]`);
}

// 25. Longest country name
console.log(`\n25. Longest country name\n`);

tests = [["Australia", "Germany", "United States of America"]];
expected = ["United States of America"];

function longestCountry(arr){
  let longest = '';
  for (let c of arr){
    if (c.length > longest.length) longest = c;
  }
  return longest;
}

for (let i = 0; i < tests.length; i++) {
  const output = longestCountry(tests[i]);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input=[${tests[i]}], output='${output}'`);
}

// 26. Longest substring without repeating characters
console.log(`\n26. Longest substring without repeating characters\n`);

tests = ["abcabcbb","bbbbb","pwwkew"];
expected = ["abc","b","wke"];

function longestUniqueSubstring(str){
  let maxStr='', curr='';
  for (let c of str){
    let idx = curr.indexOf(c);
    if (idx>=0) curr = curr.slice(idx+1);
    curr += c;
    if (curr.length>maxStr.length) maxStr=curr;
  }
  return maxStr;
}

for (let i = 0; i < tests.length; i++) {
  const output = longestUniqueSubstring(tests[i]);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${tests[i]}', output='${output}'`);
}

// 27. Longest palindrome in string
console.log(`\n27. Longest palindrome\n`);

tests = ["bananas","abracadabra","racecar"];
expected = ["anana","aca","racecar"];

function longestPalindrome(str){
  let maxP='';
  for (let i=0;i<str.length;i++){
    for (let j=i+1;j<=str.length;j++){
      let sub=str.slice(i,j);
      if(sub===sub.split('').reverse().join('') && sub.length>maxP.length){
        maxP=sub;
      }
    }
  }
  return maxP;
}

for (let i = 0; i < tests.length; i++) {
  const output = longestPalindrome(tests[i]);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: input='${tests[i]}', output='${output}'`);
}

// 28. Pass function as parameter
console.log(`\n28. Pass function as parameter\n`);

function callFunc(func, val){
  return func(val);
}

function square(x){ return x*x; }

tests = [[square, 5]];
expected = [25];

for (let i=0;i<tests.length;i++){
  const [func,val] = tests[i];
  const output = callFunc(func,val);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: func=${func.name}, val=${val}, output=${output}`);
}

// 29. Get function name
console.log(`\n29. Get function name\n`);

tests = [function test(){}, function hello(){}, function(){}];
expected = ["test","hello","anonymous"];

function getFunctionName(func){
  return func.name || 'anonymous';
}

for (let i=0;i<tests.length;i++){
  const output = getFunctionName(tests[i]);
  const passFail = output === expected[i] ? "PASS" : "FAIL";
  console.log(`${passFail}: output='${output}'`);
}
