(function(){
  var $burgerButton = document.getElementById('clockify_menu_btn');
  var $sideMenu = document.getElementById('clockify_sidebar');
  var SIDEMENU_OPEN_CLASS = 'clockify_sidebar-open';

  function burgerButtonClickHandler(event){
    if (!elementsMethod.checkClassExist($sideMenu, SIDEMENU_OPEN_CLASS)) {
      elementsMethod.addClassToElement($sideMenu, SIDEMENU_OPEN_CLASS);
      return;
    }
    elementsMethod.removeClassFromElement($sideMenu, SIDEMENU_OPEN_CLASS);
  }

  $burgerButton.addEventListener('click', burgerButtonClickHandler);

})();
