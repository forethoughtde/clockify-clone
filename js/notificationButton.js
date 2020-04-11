(function(){

  var $notificationBtn = document.getElementById('clockify_notification_btn');
  var VISIBILITY_VISIBLE_CLASS = 'visibility_visible';
  var BACKGROUND_COLOR_MAIN = 'bg_main_color';

  function notificationBtnClickHandler(){
    if (!elementsMethod.checkClassExist(elementsMethod.getNextSibiling(this), VISIBILITY_VISIBLE_CLASS)) {
      elementsMethod.addClassToElement(this, BACKGROUND_COLOR_MAIN);
      elementsMethod.addClassToElement(elementsMethod.getNextSibiling(this), VISIBILITY_VISIBLE_CLASS);
      return;
    }
    elementsMethod.removeClassFromElement(this, BACKGROUND_COLOR_MAIN);
    elementsMethod.removeClassFromElement(elementsMethod.getNextSibiling(this), VISIBILITY_VISIBLE_CLASS);
  }

  $notificationBtn.addEventListener('click', notificationBtnClickHandler);

})();
