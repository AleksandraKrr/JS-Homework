var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.querySelector('button');

function searchLinks () {
  var firstLink = firstPar.firstElementChild,
      secondLink = firstPar.lastElementChild;

  firstLink.setAttribute('class', 'links');
  secondLink.setAttribute('class', 'links');
}

button.addEventListener ('click', searchLinks);

secondPar.onclick = function (evt) {
  var target = evt.target;

  evt.preventDefault();

  if (evt.target.tagName === 'A') {
    var key = evt.target.innerText;
    var keyValue = evt.target;

    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify({path : keyValue.href}));

      keyValue.href = '#';

      alert('Ссылка сохранена');

    } else {
      alert(JSON.parse(localStorage[key]).path);
    }
  }   
}

localStorage.clear();



