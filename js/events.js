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

}

$(document).ready(function() {
  // call functions here
  frameIt();
  getIt();
});
