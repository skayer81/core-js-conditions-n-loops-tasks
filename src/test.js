// /**
//  * Returns the nearest largest integer consisting of the digits of the given positive integer.
//  * If there is no such number, it returns the original number.
//  * Usage of String class methods is not allowed in this task.
//  *
//  * @example:
//  * 12345    => 12354
//  * 123450   => 123504
//  * 12344    => 12434
//  * 123440   => 124034
//  * 1203450  => 1203504
//  * 90822    => 92028
//  * 321321   => 322113
//  *
//  * @param {number} number The source number
//  * @returns {number} The nearest larger number, or original number if none exists.
//  */
// function getNearestBigger(number) {
//   let arr = String(number).split('');
//   let index;
//   for (let i = arr.length - 2; i >= 0; i -= 1){
//     if (arr[i] < arr[i+1]){
//    //   [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       index = i;
//       break;
//     }
//   }
//   let arr1 = arr.slice(0, index);
//   let arr2 = arr.slice(index).sort((a,b) => a - b);
//   let arr3 = []
//   let flag = true
//   for (let i = 0; i < arr2.length; i += 1){
//     if (arr2[i] > arr[index] && flag) {
//       arr1.push(arr2[i])
//       flag = false;
//     }
//     else arr3.push(arr2[i])
//   }
//   arr1 =  arr1.concat(arr3);
//   return Number(arr1.join(''))
// }

// getNearestBigger(12345)//12354
// getNearestBigger(123450)//123504
// getNearestBigger(12344)//12434
// getNearestBigger(1203450)//1203504
// getNearestBigger(90822)//92028
// getNearestBigger(321321)//322113

// // * 12345    => 12354
// // * 123450   => 123504
// // * 12344    => 12434
// // * 123440   => 124034
// // * 1203450  => 1203504
// // * 90822    => 92028
// // * 321321   => 322113
