(function(){

  var $notificationBtn = document.getElementById('clockify_notification_btn');
  var VISIBILITY_VISIBLE_CLASS = 'visibility_visible';
  var BACKGROUND_COLOR_MAIN = 'bg_main_color';

  function getNextSibiling($element){
    return $element.nextElementSibling;
  }

  function checkClassExist($element, className){
    return $element.classList.contains(className);
  }

  function addClassToElement($element, className){
    $element.classList.add(className);
  }

  function removeClassFromElement($element, className){
    $element.classList.remove(className);
  }

  function notificationBtnClickHandler(){
    if (!checkClassExist(getNextSibiling(this), VISIBILITY_VISIBLE_CLASS)) {
      addClassToElement(this, BACKGROUND_COLOR_MAIN);
      addClassToElement(getNextSibiling(this), VISIBILITY_VISIBLE_CLASS);
      return;
    }
    removeClassFromElement(this, 'bg_main_color');
    removeClassFromElement(getNextSibiling(this), 'visibility_visible');
  }

  $notificationBtn.addEventListener('click', notificationBtnClickHandler);

})();
