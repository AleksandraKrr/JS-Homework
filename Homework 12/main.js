var wrapper = document.getElementsByClassName('wrapper')[0];

var requestButton = document.getElementsByClassName('button')[0];

requestButton.addEventListener('click', showInfo);

function showInfo () { 
  var container = document.createElement('div');
  container.classList.add('container');

  var containerNavigation = document.createElement('div');
  containerNavigation.classList.add('container_nav');
  container.appendChild(containerNavigation);

  var contentContainer = document.createElement('div');
  contentContainer.classList.add('container_content');
  container.appendChild(contentContainer);

  var userInfoContainer = document.createElement('div');
  userInfoContainer.classList.add('user_info');

  var userAvatar = document.createElement('img');
  userAvatar.classList.add('avatar');
  userInfoContainer.appendChild(userAvatar);

  var textBox = document.createElement('div');
  textBox.classList.add('textBox');
  userInfoContainer.appendChild(textBox);
  
  var userFirstName = document.createElement('p');
  textBox.appendChild(userFirstName);

  var userLastName = document.createElement('p');
  textBox.appendChild(userLastName); 
  
  containerNavigation.onclick = function (evt) {
    var target = evt.target;

    var buttonsBlock = document.getElementsByClassName('user_button'),
        numberOfButtons = buttonsBlock.length;

    for(var i = 0; i < numberOfButtons; i++) {
      if (buttonsBlock[i].classList.contains('user_button_active')){
        buttonsBlock[i].classList.remove('user_button_active')
      }
    }        
  
    if (target.classList.contains('user_button')){
      target.classList.add('user_button_active');
    }
  }
  
  if (localStorage.length != 0) {
    for (var k = 0; k < localStorage['Number of users']; k++) {
      var usersButton = document.createElement('button');
      usersButton.classList.add('user_button');
      usersButton.innerText = 'User';
      usersButton.innerText += ' ' + (k+1);
      usersButton.dataset.id = k;
      containerNavigation.appendChild(usersButton);

      usersButton.onclick = function (evt) { 
        var target = evt.target,
            dataId = target.getAttribute('data-id');
    
        var keyFirstName = 'User '+ (+dataId+1) + ' first name',
            keyLastName = 'User '+ (+dataId+1) + ' last name',
            keyAvatar = 'User '+ (+dataId+1) + ' avatar';
    
        userFirstName.innerText = 'First name:';
        userLastName.innerText = 'Last name:'; 
    
        userAvatar.src = localStorage.getItem(keyAvatar);
        userFirstName.innerText += ' ' + localStorage.getItem(keyFirstName);
        userLastName.innerText += ' ' + localStorage.getItem(keyLastName);
        contentContainer.appendChild(userInfoContainer); 
      }

      wrapper.insertBefore(container, requestButton);

      var firstButton = document.getElementsByClassName('user_button')[0];
      firstButton.click();
    }

  } else {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
  
    xhr.onload = function() {
      wrapper.insertBefore(container, requestButton);
      var statusType = Math.round(this.status / 100);
  
      var usersArr = ((statusType === 2) ? JSON.parse(this.response).data : this.status);
      
      for (var i = 0; i < usersArr.length; i++) {
        var usersButton = document.createElement('button');
        usersButton.classList.add('user_button');
        usersButton.innerText = 'User';
        usersButton.innerText += ' ' + (i+1);
        usersButton.dataset.id = i;
        containerNavigation.appendChild(usersButton);

        usersButton.onclick = function (evt) { 
          var target = evt.target,
              dataId = target.getAttribute('data-id');
      
          userFirstName.innerText = 'First name:';
          userLastName.innerText = 'Last name:'; 
      
          userAvatar.src = usersArr[dataId].avatar;
          userFirstName.innerText += ' ' + usersArr[dataId].first_name;
          userLastName.innerText += ' ' + usersArr[dataId].last_name;
          contentContainer.appendChild(userInfoContainer);
        }
      }

      for (var j = 0; j < usersArr.length; j++) {
        var usersButton = document.getElementsByClassName('user_button'),
            dataId = usersButton[j].getAttribute('data-id');

        var keyFirstName = 'User '+ (+dataId+1) + ' first name',
            keyLastName = 'User '+ (+dataId+1) + ' last name',
            keyAvatar = 'User '+ (+dataId+1) + ' avatar';
        
        localStorage.setItem(keyFirstName, usersArr[dataId].first_name);
        localStorage.setItem(keyLastName, usersArr[dataId].last_name);
        localStorage.setItem(keyAvatar, usersArr[dataId].avatar);
        localStorage.setItem('Number of users', +dataId+1);
      } 
      
      var firstButton = document.getElementsByClassName('user_button')[0];
      firstButton.click();
    };
  
    xhr.onerror = function() {
      var errorBox = document.createElement('div');
      errorBox.classList.add('boxIfError');
  
      var errorText = document.createElement('p');
      errorText.innerText = 'Ошибка! Данные не получены';
  
      errorBox.appendChild(errorText);
      wrapper.insertBefore(errorBox, requestButton);
    };
    
    xhr.onloadend = function() { //не уверена, что это вообще нужно
      console.log('Запрос завершен');
    };
  }
  requestButton.disabled = true;
}