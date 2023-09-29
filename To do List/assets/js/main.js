$(document).ready(function () {
  $('form button').click(function () {
    $('li').slideDown();
  });
})

$('form').on('submit', function (e) {
  e.preventDefault();
  const newTask = $('#input-new-task').val();
  const newLiElement = $(`<li></li>`);
  $(`<p>${newTask}</p>`).appendTo(newLiElement);
  $(newLiElement).appendTo('ul');
  $('#input-new-task').val('');

  $('li').click(function () {
    $(this).addClass('finished');
  });
});

