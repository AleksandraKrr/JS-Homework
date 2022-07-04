//1 задание

function Animal (name) {
  this._foodAmount = 50;
  
  this._name = name;
}

Animal.prototype._formatFoodAmount = function () {
  return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function(amount) {
  if (!arguments.length) return this._formatFoodAmount();

  if (amount < 30 || amount > 100) {
    return 'Недопустимое количество корма.';
  }

  this._foodAmount = amount;
}

Animal.prototype.feed = function() {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.'); return this;
}


function Cat(name) {
  Animal.apply(this, arguments);

  this._animalFeed = this.feed;
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
  Animal.prototype.feed.apply(this);

  console.log('Кот доволен ^_^'); return this;
}

Cat.prototype.stroke = function () {
  console.log('Гладим кота.'); return this;
}


//для проверки:
var barsik = new Cat('Барсик');

barsik.stroke().feed().stroke().stroke().stroke().stroke().stroke().feed();

console.log(barsik.dailyNorm());
barsik.feed();

console.log(barsik.dailyNorm(200));
barsik.feed();

console.log(barsik.dailyNorm(75));
barsik.feed();


//2 задание

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function deepClone(obj) {
  if (Array.isArray(obj)) {
    var clonedObj = [];
  } else {
    var clonedObj = {};
  }

  for (var key in obj) {
    if (typeof (obj[key]) === 'object' && obj[key] !== null) {
      clonedObj[key] = deepClone(obj[key]);

    } else 
    clonedObj[key] = obj[key];
  } return clonedObj;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//3 задание

function deepCompare (a, b) {

  if (Object.keys(a).length === Object.keys(b).length) { 
    for (var key in a) {

      if (typeof (a[key]) === 'object' && a[key] !== null && (typeof (a[key]) === typeof (b[key]))) {
  
        if ((Array.isArray(a[key]) && (Array.isArray(b[key]))) || ((!Array.isArray(a[key])) && (!Array.isArray(b[key])))) {
  
          if(!deepCompare(a[key], b[key])){
            return false;
          }
        }
      } else if ((typeof (a[key]) === 'function') && (typeof (b[key]) === 'function')) {
        if (a[key].toString() !== b[key].toString()) {
          return false;
        }
      } else if (a[key] !== b[key]) {
        return false;
      } 
    } return true;
  } else {
      return false;
  }
}