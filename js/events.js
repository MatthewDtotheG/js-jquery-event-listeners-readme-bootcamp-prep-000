//define functions here
function getIt() {
  $('p').on('click');
  alert('Hey!');
}

function frameIt() {
  $('img')
    .on('load')
    .append('.tasty');
}

$(document).ready(function() {
  // call functions here
  frameIt();
  getIt();
});
