$(document).ready(function() {
    $('.accordion-toggle').on('click', function() {
      $(this).toggleClass('active');
      var panel = $(this).parents('.card').find('.collapse');
      panel.collapse('toggle');
    });
  });
  