/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

// function arrToDigit(arr, arrSize) {
//     let digit = 0;
    
//     for (let i = 0; i < arrSize; i++) {
//         digit += arr[i]*Math.pow(10,arrSize-1-i)
//         // console.log(digit);
        
//     }
//     return digit;
// }

// function digitToArr(digit, size) {
//     let arr = [];
//     for (let i = size - 1; i >= 0; i--) {
//         let divisor = Math.pow(10, i);
//         let val = Math.floor(digit / divisor);
//         arr.push(val);
//         digit %= divisor;
//     }
//     return arr;
// }

// // console.log(arrToDigit([2,4,3],3));

// // console.log(digitToArr(708, 3));



var addTwoNumbers = function(l1, l2) {
    let result = [];
    let carry = 0;
    let i = 0, j = 0;
    while (i < l1.length || j < l2.length || carry) {
        let x = i < l1.length ? l1[i] : 0;
        let y = j < l2.length ? l2[j] : 0;
        let sum = x + y + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i++;
        j++;
    }
    return result;
};

console.log(addTwoNumbers([2,4,3,9],[5,6,4]));
