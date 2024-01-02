const assert = require('assert');
const utility = require('../extensions/utility');

function sortByAsc(inputarr) {
  function sort1(arr) {
    const basicElement = arr[arr.length - 1];
    const basicIndex = arr.length - 1;
    let curentIndex = 0;
    let leftSide = [];
    let rightSide = [];
    while (curentIndex < basicIndex) {
      if (arr[curentIndex] > basicElement) {
        rightSide.push(arr[curentIndex]);
      } else leftSide.push(arr[curentIndex]);
      curentIndex += 1;
    }
    if (leftSide.length > 1) leftSide = sort1(leftSide);
    if (rightSide.length > 1) rightSide = sort1(rightSide);

    return leftSide.concat(basicElement, rightSide);
  }
  // inputarr = sort1(inputarr);
  return sort1(inputarr);
}

const min = -100;
const max = 100;
const length = 10;
// for (let i = 0; i < 5; i += 1) {
const arr = utility.getRandomArrayUtil(min, max, length);
const sourceArray = Array.from(arr);
// console.log(sourceArray, sortByAsc(sourceArray))
const sortedArr = arr.sort((a, b) => a - b);
sortByAsc(sourceArray);
// console.log('test', sourceArray, sortedArr);
assert.deepEqual(sourceArray, sortedArr);

// }
