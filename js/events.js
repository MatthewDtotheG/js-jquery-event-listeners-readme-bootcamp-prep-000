//define functions here
function getIt() {
  $('p').on('click');
  alert('Hey!');
}

function frameIt() {
  $('img')
    .on('load')
    .addClass('tasty');
}

function pressIt() {
  $('form').on('keydown');
  if (key.which == 71) {
    alert('G was pressed');
  }
}

$(document).ready(function() {
  // call functions here
  pressIt();
  frameIt();
  getIt();
});
