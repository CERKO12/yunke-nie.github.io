window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var topButton = document.getElementById("topButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// eslint-disable-next-line no-unused-vars
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
