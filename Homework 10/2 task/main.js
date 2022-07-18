//Задание 1:

var button = document.querySelector('th'),
    table = document.querySelector('tbody'),
    line = table.firstElementChild;

button.addEventListener ('click', addNewLine);

function addNewLine () {
  var newLine = document.createElement('tr'),
      cell1 = document.createElement('td'),
      cell2 = document.createElement('td'),
      cell3 = document.createElement('td');

  newLine.appendChild(cell1);
  newLine.appendChild(cell2);
  newLine.appendChild(cell3); 

  table.insertBefore(newLine, line);
}

var newInput = document.createElement('input');

table.onclick = function (event) {
  var target = event.target;

  if (target.tagName === 'TD') {
    newInput.value = target.textContent;
    target.textContent = '';
    target.appendChild(newInput);
    newInput.focus();
  }
}

newInput.addEventListener('blur', function () {
  var cell = newInput.parentElement;
  cell.textContent = newInput.value;
});

//*
newInput.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    var cell = newInput.parentElement;
    cell.textContent = newInput.value;
  }
});






