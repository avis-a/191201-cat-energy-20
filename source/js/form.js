var sendButton = document.querySelector('.form__button__submit');
var searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', function (evt) {
  let isVlidateSuccess = true;

  // получаем поля формы
  let name = document.getElementById('name');
  let weight = document.getElementById('weight');
  let email = document.getElementById('email');
  let tel = document.getElementById('tel');

  if (name.value === ''){
    name.required = true;
    isVlidateSuccess = false;
  }

  if (weight.value === ''){
    weight.required = true;
    isVlidateSuccess = false;
  }

  if (email.value === ''){
    email.required = true;
    isVlidateSuccess = false;
  }

  if (tel.value === ''){
    tel.required = true;
    isVlidateSuccess = false;
  }

  if(isVlidateSuccess !== true){
    evt.preventDefault();
  }
});
