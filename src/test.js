// function rotateMatrix(matrix) {
//   const hight = matrix.length;
//   const width = matrix[0].length;

//   function init() {
//     const result = [];
//     for (let i = 0; i < hight; i += 1) {
//       result[i] = [];
//       let j = 0;
//       while (j < width) {
//         result[i][j] = 0;
//         j += 1;
//       }
//     }
//     return result;
//   }
//   const result = init();

//   for (let i = 0; i < hight; i += 1) {
//     for (let j = 0; j < width; j += 1) {
//       result[j][width - i - 1] = matrix[i][j];
//     }
//   }
//   return result;
// }
// let m =  [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]
//         ]

// console.log(rotateMatrix(m))
