(function(){
  var $burgerButton = document.getElementById('clockify_menu_btn');
  var $sideMenu = document.getElementById('clockify_sidemenu');
  var $sideMenuCloseBtn = document.getElementById('clockify_sidemenu_close_btn');
  var SIDEMENU_OPEN_CLASS = 'clockify_sidebar-open';

  function burgerButtonClickHandler(event){
    if (!elementsMethod.checkClassExist($sideMenu, SIDEMENU_OPEN_CLASS)) {
      elementsMethod.addClassToElement($sideMenu, SIDEMENU_OPEN_CLASS);
      return;
    }
    elementsMethod.removeClassFromElement($sideMenu, SIDEMENU_OPEN_CLASS);
  }

  function sideMenuCloseBtnClockHandler(event){
    $burgerButton.click();
  }

  $burgerButton.addEventListener('click', burgerButtonClickHandler);
  $sideMenuCloseBtn.addEventListener('click', sideMenuCloseBtnClockHandler)

})();
