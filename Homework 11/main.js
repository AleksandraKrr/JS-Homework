var inputX = document.getElementsByTagName('input')[0],
    inputY = document.getElementsByTagName('input')[1],
    button = document.getElementsByTagName('button')[0],
    form = document.getElementsByTagName('form')[0];

var buttonEnabled = function () {
  if ((inputX.value.length != 0) && (inputY.value.length != 0)) {
    button.disabled = false;

  } else {
    button.disabled = true;
  }
}

inputX.addEventListener('keyup', buttonEnabled);
inputY.addEventListener('keyup', buttonEnabled);

var createChessTable = function (evt) {
  evt.preventDefault();

  var inputXNumber = parseFloat(inputX.value),
      inputYNumber = parseFloat(inputY.value);

  if (isNaN(inputXNumber) || inputXNumber%1 != 0 || inputXNumber > 10 || inputXNumber < 1) {
    alert('Введите корректное значение в поле Х - целое число от 1 до 10');

  } else if (isNaN(inputYNumber) || inputYNumber%1 != 0 || inputYNumber > 10 || inputYNumber < 1) {
    alert('Введите корректное значение в поле Y - целое число от 1 до 10');

  } else {
    var existingTable = document.getElementsByTagName('table')[0],
        form = document.getElementsByTagName('form')[0],
        table = document.createElement('table');


    form.appendChild(table);
  
    for (var i = 1; i <= inputY.value; i++) {
      var row = document.createElement('tr');

      table.appendChild(row);

      for (var j = 1; j <= inputX.value; j++) {
        var cell = document.createElement('td');

        row.appendChild(cell);

        if (cell.classList.contains('white')) {
          cell.className = 'white';

        } else if (cell.classList.contains('black')) {
          cell.className = 'black';

        } else {
          if ((i%2 === 0 && j%2 === 0) || (i%2 !== 0 && j%2 !== 0)) {
            cell.className = 'white';

          } else{
            cell.className = 'black';
          }
        }

        table.onclick = function (event) {
          var target = event.target;
          if (target.className === 'white' || target.className === 'black') {
            var cells = document.getElementsByTagName('td');

            for (var i = 0; i < cells.length; i++) {
              if (cells[i].classList.contains('white')) {
                cells[i].classList.remove('white');
                cells[i].classList.add('black');

              } else {
                cells[i].classList.remove('black');
                cells[i].classList.add('white');
              } 
            }   
          }
        }
      }
    }

    if (existingTable != undefined) {
      form.removeChild(existingTable);
      form.appendChild(table);
      
    } else {
      form.appendChild(table);
    }
  }
  
  inputX.value = '';
  inputY.value = '';
  button.disabled = true;
}

button.addEventListener('click', createChessTable);