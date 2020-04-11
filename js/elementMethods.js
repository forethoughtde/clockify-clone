var elementsMethod = (function(){

  return {
    checkClassExist : function($element, className){
      return $element.classList.contains(className);
    },
    addClassToElement : function($element, className){
      $element.classList.add(className);
    },
    removeClassFromElement : function($element, className){
      $element.classList.remove(className);
    },
    getNextSibiling : function($element){
      return $element.nextElementSibling;
    }
  };

})();
