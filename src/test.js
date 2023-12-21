// /**
//  * Sorts an array of numbers in ascending order in place.
//  * Employ any sorting algorithm of your choice.
//  * Take into account that the array can be very large. Consider how you can optimize your solution.
//  * In this task, the use of methods of the Array and String classes is not allowed.
//  *
//  * @param {number[]} arr - The array to sort.
//  * @return {number[]} The sorted array.
//  *
//  * @example:
//  *  [2, 9, 5]       => [2, 5, 9]
//  *  [2, 9, 5, 9]    => [2, 5, 9, 9]
//  *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
//  */
// function sortByAsc(arr) {
//   let flag = true;
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     result[i] = arr[i];
//   }
//   console.log(arr, result)

//   function sort() {
//     flag = false;
//     for (let i = 0; i < result.length - 1; i += 1) {
//       if (result[i] > result[i + 1]) {
//         [result[i], result[i + 1]] = [result[i + 1], result[i]];
//         flag = true;
//       }
//     }
//   }

//   while (flag) sort();

//   return result;
// }

// console.log(sortByAsc([-2, 9, 5, -3, 10, -4 , -5, 10]), 1)
