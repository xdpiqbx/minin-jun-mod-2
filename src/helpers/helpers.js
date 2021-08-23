export const generateWords = (number, callback) => {
  const lastNum = number % 10;
  if (number <= 21) {
    if (number > 1 && number <= 4) {
      callback('человека тусанут');
    } else {
      callback('человек тусанёт');
    }
  } else if (number > 21) {
    if (lastNum > 1 && lastNum <= 4) {
      callback('человека тусанут');
    } else {
      callback('человек тусанёт');
    }
  }
};

// const testGenerateWords = (number) => {
//   const lastNum = number % 10;
//   if (number <= 21) {
//     if (number > 1 && number <= 4) {
//       return 'человека тусанут';
//     } else {
//       return 'человек тусанёт';
//     }
//   } else if (number > 21) {
//     if (lastNum > 1 && lastNum <= 4) {
//       return 'человека тусанут';
//     } else {
//       return 'человек тусанёт';
//     }
//   }
// };

// for (let index = 0; index < 100; index++) {
//   console.log(index, testGenerateWords(index));
// }
