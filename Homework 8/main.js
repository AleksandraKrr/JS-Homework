// Задание 1:

function filterNumbersArr (arr) {
  return arr.filter(function(number) {
    return number > 0;
  });
}

filterNumbersArr([-1, 0, 2, 34, -2]);

//   Задание 2:

function findFirstPositiveNumber (arr) {
  return arr.find(function(number) {
    return number > 0;
  });
}

findFirstPositiveNumber ([-1, 0, 2, 34, -2]);

//ИЛИ

function filterFirstPositiveNumber (arr) {
  return arr.filter(function(number) {
    return number > 0;
  })[0];
}

filterFirstPositiveNumber ([-1, 0, 2, 34, -2]);

//   Задание 3:

function isPalindrome (word) {
  return (word.toLowerCase() === word.toLowerCase().split('').reverse().join(''));
}

isPalindrome ('шАлаШ');
isPalindrome ('привет');

//   Задание 4:

function areAnagrams (word1, word2) {
  return (word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join(''));
}

areAnagrams ('оно', 'ООН');
areAnagrams ('Привет', 'Пока');

//   Задание 5:

function divideArr (arr, size) {
  var result = [];

  if (size === 0) {
    return result = arr;
  }

  while (arr.length !== 0) {
    result[result.length] = arr.splice(0, size);
  }
  return result;
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);
divideArr([1, 2, 3, 4, 5], 0);

//   Задание 6 *:

function isPowOfTwo (number) {
  var value = 0;

  if (number === 1) {
    return true;

  } else if (number % 2 === 0) {
    for (var degree = 0; value <= number; degree++) {
      value = Math.pow (2, degree);

      if (value === number) {
        return true;

      } else if (value > number) {
        return false;

      } else {
        continue;
      }
    }
  } else {
    return false;
  }  
}

isPowOfTwo (0);
isPowOfTwo (1024);