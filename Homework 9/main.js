// Задание 1:

function arrayTransform (namesArr) {
 
  return namesArr.map(function(name){
    var namesObj = {};
    namesObj['name'] = name;
    return namesObj;
  });
}

arrayTransform (['Vasya', 'Petya', 'Tolya', 'Roma']);

//   Задание 2:

function currentTime (timeArr) {

  return timeArr.reduce(function(prev, time) {
    return prev + ' : ' + time;

  }, 'Текущее время');
}

currentTime (['00', '13', '24']);

//   Задание 3:

function numberOfVowels (text) {
  var textForAnalysis = text.toLowerCase().split('');

  var arrayOfVowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

  var result = 0;

  for (var i = 0; i < textForAnalysis.length; i++) {
    for (var m = 0; m < arrayOfVowels.length; m++) {
      
      if (textForAnalysis[i] === arrayOfVowels[m]) {
        result++;
      }
    }
  } return result;
}

var someText = 'Написать функцию, которая будет возвращать количество гласных в переданном тексте';

numberOfVowels (someText);

//   Задание 4:

function countSentencesLetters (text) {
  var textForAnalysis = text.split(/[.!?]/);

  var clearTextArr = textForAnalysis.filter (function(element) {
    return element != '';
  })

  clearTextArr.forEach(function(sentence){
    console.log(sentence + ' : Letters quantity is: ' + sentence.split(/[^a-zа-яё0-9]/gi).join('').length);
  })
}

var testText = 'Привет, студент! Студент... Как дела, студент?';

countSentencesLetters (testText);

//   Задание 5 *:

function findMaxRepeat (text) {
  var clearText = text.toLowerCase().split(/[^a-zа-яё0-9]/gi),

      clearTextArr = clearText.filter (function(element) {
        return element != '';
      }),

      counter = {},
      maxValue = 0,
      maxWord;

  for (var i = 0; i < clearTextArr.length ; i++) {
    var word = clearTextArr[i];

    if (counter[word] != undefined) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }

  for (var key in counter) {
    if (counter[key] > maxValue) {
        maxValue = counter[key];
        maxWord = key;
    }   
  }

  return console.log('Максимальное число повторений у слова "' + maxWord + '" - ' + maxValue);
}

var testText = 'Привет, студент! Студент... Как дела, студент?';

findMaxRepeat (testText);

