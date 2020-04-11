(function(){
  var $burgerButton = document.getElementById('clockify_menu_btn');
  var $sideMenu = document.getElementById('clockify_sidebar');
  var SIDEMENU_OPEN_CLASS = 'clockify_sidebar-open';

  function checkClassExist($element, className){
    return $element.classList.contains(className);
  }

  function addClassToElement($element, className){
    $element.classList.add(className);
  }

  function removeClassFromElement($element, className){
    $element.classList.remove(className);
  }

  function burgerButtonClickHandler(event){
    if (!checkClassExist($sideMenu, SIDEMENU_OPEN_CLASS)) {
      addClassToElement($sideMenu, SIDEMENU_OPEN_CLASS);
      return;
    }
    removeClassFromElement($sideMenu, SIDEMENU_OPEN_CLASS);
  }

  $burgerButton.addEventListener('click', burgerButtonClickHandler);

})();
