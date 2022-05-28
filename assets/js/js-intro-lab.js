/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
    return "TEST SUCCEEDED";
    } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
    return a;
    } else {
    return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

/* checks vowel or not */

function checkVowel(str) {
    return (str.toUpperCase() === "A" || str.toUpperCase() === "E" || str.toUpperCase() === "I" || str.toUpperCase() === "O" || str.toUpperCase() === "U");
}

/* find sum */
function sum(arr) {
    let result = 0; 
    return arr.reduce((result, num) => result+num);
}

/* find multiply*/
function multiply(arr) {
    let total = 1;
    return arr.reduce((total,num)=> total*num);

}

/*string reverse*/
function strReverse(str) {
    return str.split('').reverse().join('');
}

/* length of largest word in an array */
function findLongestWord(words) {
    let maxLength = 0
    for(i in words) {
    maxLength =  max(maxLength, words[i].length);
    }
    return maxLength;
}
/* filter long words */
function filterLongWords(words , i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

/* assignment */
console.log("Expected output of checkVowel('A') is true "+ myFunctionTest(true, checkVowel("A")));
console.log("Expected output of sum([1,2,3,4]) is 10 "+ myFunctionTest(10, sum([1,2,3,4])));
console.log("Expected output of multiply([1,2,3,4]) is 24 "+ myFunctionTest(24, multiply([1,2,3,4])));
console.log("Expected output of strReverse('Apple') is elppA "+ myFunctionTest("elppA", strReverse("Apple")));
console.log("Expected output of findLongestWord(['Star','Country','Computer','Encyclopedia'])  is 12 "+ myFunctionTest(12, findLongestWord(['Star','Country','Computer','Encyclopedia'])));
console.log("Expected output of filterLongWords(['Star','Country','Computer','Encyclopedia'], 7)  is ['Computer', 'Encyclopedia'] "+ myFunctionTest(JSON.stringify(['Computer', 'Encyclopedia']), JSON.stringify(filterLongWords(['Star','Country','Computer','Encyclopedia'], 7))));

console.assert(checkVowel("A"), "Expected output of checkVowel('A') is true ");
console.assert(10 === sum([1,2,3,4]),"Expected output of sum([1,2,3,4]) is 10 ");
console.assert(24 === multiply([1,2,3,4]),"Expected output of multiply([1,2,3,4]) is 24");
console.assert("elppA" === strReverse("Apple"), "Expected output of strReverse('Apple') is elppA ");
console.assert(12 === findLongestWord(['Star','Country','Computer','Encyclopedia']),"Expected output of findLongestWord(['Star','Country','Computer','Encyclopedia']) is 12");
console.assert(JSON.stringify(['Computer', 'Encyclopedia']) === JSON.stringify(filterLongWords(['Star','Country','Computer','Encyclopedia'], 7)),"Expected output of filterLongWords(['Star','Country','Computer','Encyclopedia'], 7)  is ['Computer', 'Encyclopedia']");
    
/* jsfiddle code using map/filter/reduce */
const a = [1,3,5,3,3];
console.log(a.map(i => i*10).toString());
console.log(a.filter(i => i === 3).toString());
console.log(a.reduce((prevValue,currentValue) => prevValue*currentValue));