function Animal (name) {
  var foodAmount = 50;
  
  var self = this;

  function formatFoodAmount() {
    return foodAmount + ' гр.';
  }

  self.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 30 || amount > 100) {
      return 'Недопустимое количество корма.';
    }

    foodAmount = amount;
  };

  self.name = name;

  self.feed = function() {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.'); return self;
  };
}

function Cat(name) {
  Animal.apply(this, arguments);

  var self = this;

  var animalFeed = self.feed;

  self.feed = function () {
    animalFeed();

    console.log('Кот доволен ^_^'); return self;
  }

  this.stroke = function () {
    console.log('Гладим кота.'); return self;
  }
}