var menu = document.getElementById("menu");
var menu_button = document.getElementByClassName("menu-buttons");
var para = document.getElementByClassName("para");
var pageNum = 0;
function menuOpen() {
  var i = 0;
  function fadeAnimation() {
    if (i === 101) {
      stopAnimation();
    } else {
      menu.style.width = i + "%";
      i++;
    }
  }
  function startAnimation() {
    setInterval(fadeAnimation, 3);
  }
  function stopAnimation() {
    clearInterval(fadeAnimation);
  }
  startAnimation();
}
function menuClose() {
  var i = 100;
  function fadeAnimation() {
    if (i === -1) {
      stopAnimation();
    } else {
      menu.style.width = i + "%";
      i--;
    }
  }
  function startAnimation() {
    setInterval(fadeAnimation, 3);
  }
  function stopAnimation() {
    clearInterval(fadeAnimation);
  }
  startAnimation();
}

function pageChange(page) {
  document.getElementById("p" + page).style.display = "block";
}
