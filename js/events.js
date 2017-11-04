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
   $('input#typing').keydown(function(key) {
     if (key.which === 71) {
       alert("You have pressed the G key.")
     }
   });
 }

$(document).ready(function() {
  // call functions here
  pressIt();
  frameIt();
  getIt();
});
