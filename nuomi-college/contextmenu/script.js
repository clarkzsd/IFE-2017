!function (document) {
  var $ = function (selector) {
    return document.querySelector(selector);
  };
  var targetArea = $('.targetArea');
  var customMenu = $('.customMenu');

  function getCoordinates(e, targetArea, customMenu) {
    if (e.pageY + customMenu.offsetHeight > targetArea.offsetHeight && e.pageX + customMenu.offsetWidth > targetArea.offsetWidth) {
      return {
        x: e.pageX - customMenu.offsetWidth,
        y: e.pageY - customMenu.offsetHeight
      }
    } else if (e.pageX + customMenu.offsetWidth > targetArea.offsetWidth) {
      return {
        x: e.pageX - customMenu.offsetWidth,
        y: e.pageY
      }
    } else if (e.pageY + customMenu.offsetHeight > targetArea.offsetHeight) {
      return {
        x: e.pageX,
        y: e.pageY - customMenu.offsetHeight
      }
    } else {
      return {
        x:e.pageX,
        y:e.pageY
      }
    }
  }

  function setCoordinates(ele, x, y) {
    ele.style.left = x + "px";
    ele.style.top = y + "px"
  }

  targetArea.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    var coordinates = getCoordinates(e, targetArea, customMenu);
    setCoordinates(customMenu, coordinates.x, coordinates.y);
    customMenu.style.visibility = "visible";
  });
  document.addEventListener("click", function (e) {
    customMenu.style.visibility = "hidden";
  });
}(document);
