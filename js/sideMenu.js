(function(){
  var $burgerButton = document.getElementById('clockify_menu_btn');
  var $sideMenu = document.getElementById('clockify_sidemenu');
  var $sideMenuCloseBtn = document.getElementById('clockify_sidemenu_close_btn');
  var $sideMenuWithChildren = document.getElementsByClassName('button_item_has_children');
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

  function elementWithChildrenHandler(event){
    if (!elementsMethod.checkClassExist(this, 'button_item_has_children-open')) {
      elementsMethod.addClassToElement(this,
        'button_item_has_children-open');
      return;
    }
    elementsMethod.removeClassFromElement(this, 'button_item_has_children-open');
  }

  function addClickEvent($elements){
    for(let $element of $elements){
      $element.addEventListener('click', elementWithChildrenHandler)
    }
  }

  addClickEvent($sideMenuWithChildren);

  $burgerButton.addEventListener('click', burgerButtonClickHandler);
  $sideMenuCloseBtn.addEventListener('click', sideMenuCloseBtnClockHandler)


})();
