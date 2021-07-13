// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");


var Boxlayout = (function () {
  var wrapper = document.body,
    sections = Array.from(document.querySelectorAll(".section")),
    closeButtons = Array.from(document.querySelectorAll(".close-section")),
    expandedClass = "is-expanded",
    hasExpandedClass = "has-expanded-item";

  return { init: init };

  function init() {
    _initEvents();
  }

  function _initEvents() {
    sections.forEach(function (element) {
      element.onclick = function () {
        _openSection(this);
      };
    });
    closeButtons.forEach(function (element) {
      element.onclick = function (element) {
        element.stopPropagation();
        modal.style.display = "none";
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        _closeSection(this.parentElement);
      };
    });
  }

  function _openSection(element) {
    if (!element.classList.contains(expandedClass)) {
      element.classList.add(expandedClass);
      modal.style.display = "block";
      modal1.style.display = "block";
      modal2.style.display = "block";
      modal3.style.display = "block";
      wrapper.classList.add(hasExpandedClass);
    }
  }

  function _closeSection(element) {
    if (element.classList.contains(expandedClass)) {
      element.classList.remove(expandedClass);
      modal.style.display = "none";
      modal1.style.display = "none";
      modal2.style.display = "none";
      modal3.style.display = "none";
      wrapper.classList.remove(hasExpandedClass);
    }
  }
})();

Boxlayout.init();



// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }else if (event.target == modal1){
    modal1.style.display = "none";
  }
    else if (event.target == modal2){
      modal2.style.display = "none";
    }
    else if (event.target == modal3){
      modal3.style.display = "none";
    }
   
  }