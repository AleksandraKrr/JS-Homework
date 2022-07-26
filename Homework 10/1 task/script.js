var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.querySelector('button');

function searchLinks () {
  var linksArr = firstPar.getElementsByTagName('a');

  for (var i = 0; i < linksArr.length; i++) {
    linksArr[i].classList.add('links');
  }
}

button.addEventListener ('click', searchLinks);

secondPar.onclick = function (evt) {
    var target = evt.target;

    if (target.tagName === 'A') {
      evt.preventDefault();
      alert(evt.target);
    }
}



