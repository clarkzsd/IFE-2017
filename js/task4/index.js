var $ = (selector) => {
  return document.querySelector(selector);
};

var inputBox = $(".inputBox"),
  line = $(".line"),
  addLeft = $(".addLeft"),
  addRight = $(".addRight"),
  delLeft = $(".delLeft"),
  delRight = $(".delRight");

// 兼容各浏览器的事件监听工具函数
var addEvent = (element, type, handler) => {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + type, handler);
  } else {
    element["on" + type] = handler;
  }
}

var addMagic = (element,text) => {
  if (text) {
    var newNode = createNode(text);
  }
  let childrenObj = line.children;
  let childrenArr = [...childrenObj];
  switch (element) {
    case addLeft:
      line.insertBefore(newNode, childrenArr[0]);
      break;
    case addRight:
      line.appendChild(newNode);
      break;
    case delLeft:
      if (childrenObj.length === 0) {
        alert("队列为空");
      } else {
        line.removeChild(childrenArr[0]);
        alert("从左侧删除了数字" + childrenArr[0].innerHTML);
      }
      break;
    case delRight:
      if (childrenObj.length === 0) {
        alert("队列为空");
      } else {
        line.removeChild(childrenArr[childrenArr.length - 1]);
        alert("从右侧删除了数字" + childrenArr[childrenArr.length - 1].innerHTML);
      }
      break;
  }
}

// 创建节点li的函数
var createNode = (num) => {
  let newNode = document.createElement("li");
  newNode.innerHTML = num;
  return newNode;
}

// 监听按钮点击事件
addEvent(addLeft, "click", () => {
  let boxValue = inputBox.value;
  if ((/^[0-9]+$/).test(boxValue)) {
    addMagic(addLeft,boxValue);
  } else {
    alert("您输入的不是数字");
  }
});

addEvent(addRight, "click", () => {
  let boxValue = inputBox.value;
  if ((/^[0-9]+$/).test(boxValue)) {
    addMagic(addRight,boxValue);
  } else {
    alert("您输入的不是数字");
  }
});

addEvent(delRight, "click", () => {
  addMagic(delRight);
});

addEvent(delLeft, "click", () => {
  addMagic(delLeft);
});
