// /**
//  * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
//  * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
//  * Usage of Array class methods is not allowed in this task.
//  *
//  * @param {string} str - The string to shuffle.
//  * @param {number} iterations - The number of iterations to perform the shuffle.
//  * @return {string} The shuffled string.
//  *
//  * @example:
//  *  '012345', 1 => '024135' 012345/021345/021435
//  *  'qwerty', 1 => 'qetwry'
//  *  '012345', 2 => '024135' => '043215'
//  *  'qwerty', 2 => 'qetwry' => 'qtrewy'
//  *  '012345', 3 => '024135' => '043215' => '031425'
//  *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
//  */
// function shuffleChar(str, iterations) {
//   let iterationCount = 0;
//   const resultArr = [str];
//   let result = str;
//   let isRepeat = false;
//   while (iterationCount < iterations && !isRepeat) {
//     let lSide = '';
//     let rSide = '';
//     for (let i = 0; i < result.length; i += 1) {
//       if (i % 2 === 0) lSide += result[i];
//       else rSide += result[i];
//     }
//     result = lSide + rSide;
//   //  console.log(result, iterationCount)
//     iterationCount += 1;
//     resultArr.push(result);
//     if (result === str) isRepeat = true;
//   }
//   console.log(resultArr)

//   if (iterationCount < iterations) {
//     console.log('меньше', iterations, resultArr.length, iterations % (resultArr.length -1))
//     result = resultArr[iterations % (resultArr.length -1)];
//   }

//   return result;
// }
// console.log(shuffleChar('0123456789', 20), '0483726159')
// //console.log(shuffleChar('qwerty', 4), 'qrwtey')
