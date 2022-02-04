var d = document, myform, output;

// функция кроссбраузерной установки обработчиков событий
function addEvent(elem, type, handler) {
  if ('addEventListener' in elem) {
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on' + type, handler);
  }
  return false;
}

// Универсальная функция для создания нового объекта XMLHttpRequest
function getXhrObject() {
  if (typeof XMLHttpRequest === 'undefined') {
    XMLHttpRequest = function () {
      try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) { }
    };
  }
  return new XMLHttpRequest();
}

// Функция Ajax-запроса
function sendAjaxRequest(e) {

  var evt = e || window.event;
  // Отменяем стандартное действие формы по событию submit
  if (evt.preventDefault) {
    evt.preventDefault(); // для нормальных браузров
  } else {
    evt.returnValue = false; // для IE старых версий
  }
  // получаем новый XMLHttpRequest-объект
  var xhr = getXhrObject();
  if (xhr) {
    // формируем данные формы
    var elems  = myform.elements; // все элементы формы
    var url    = myform.action;   // путь к обработчику
    var params = [], elName, elType;
    // проходимся в цикле по всем элементам формы
    for (var i = 0; i < elems.length; i++) {
      elType = elems[i].type; // тип текущего элемента (атрибут type)
      elName = elems[i].name; // имя текущего элемента (атрибут name)
      if (elName) { // если атрибут name присутствует
        // если это переключатель или чекбокс, но он не отмечен, то пропускаем
        if ((elType == 'checkbox' || elType == 'radio') && !elems[i].checked) continue;
        // в остальных случаях - добавляем параметр "ключ(name)=значение(value)"
        params.push(elems[i].name + '=' + elems[i].value);
      }
    }
    // Для GET-запроса 
    //url += '?' + params.join('&');

    xhr.open('POST', url, true); // открываем соединение
    // заголовки - для POST-запроса
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) { // проверяем стадию обработки и статус ответа сервера
        output.innerHTML = /*JSON.parse(*/xhr.responseText/*)*/; // если все хорошо, то выводим полученный ответ
      }
    }
    // стартуем ajax-запрос
    xhr.send(params.join('&')); // для GET запроса - xhr.send(null);
  }
  return false;
}

// Инициализация после загрузки документа
function init() {
  output = d.getElementById('output'); // элемент, куда мы выведем полученный в ответе результат
  myform = d.getElementById('my_form'); // форма
  addEvent(myform, 'submit', sendAjaxRequest); // устанавливаем на форму обработчик события submit
  return false;
}

// Вешаем обработчик события загрузки документа - DOM-Ready
addEvent(window, 'load', init);