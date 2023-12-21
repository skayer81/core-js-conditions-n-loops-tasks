/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
// function getSpiralMatrix(size) {
//   const result = init();// = Array(size).fill([]);
//   let leftBorder = 0;
//   let rigthBorder = size - 1;
//   let topBorder = 0;
//   let downBorder = size - 1;
//   let count = 1;

//   while (count <= size ** 2){
//     toRigth();
//     toDown();
//     toLeft();
//     toUp();
//   }

//   return result;

//   function init(){
//     const result = [];
//     for (let i = 0; i < size; i += 1) {
//       result.push([]);
//       let j = 0;
//       while (j < size) {
//         result[i].push(0)
//         j += 1;
//       }
//     }
//     return result
//   }

//   function toRigth(){
//     for (let i = leftBorder; i <= rigthBorder; i += 1){
//       result[topBorder][i] = count;
//       count += 1;
//     }
//     topBorder += 1;
//   }

//   function toDown(){
//     for (let i = topBorder; i <= downBorder; i += 1){
//       result[i][rigthBorder] = count;
//       count += 1;
//     }
//     rigthBorder -= 1;
//   }

//   function toLeft(){
//     for (let i = rigthBorder; i >= leftBorder; i -= 1){
//       result[downBorder][i] = count;
//       count += 1;
//     }
//     downBorder -= 1;
//   }

//   function toUp(){
//     for (let i = downBorder; i >= topBorder; i -= 1){
//       result[i][leftBorder] = count;
//       count += 1;
//     }
//     leftBorder += 1;
//   }
// }

//  console.log(getSpiralMatrix(5))
