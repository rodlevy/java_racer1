$(document).ready(function() {
  $(document).keyup(function(e){
    if (e.keyCode == 37){
      var currentlyActive = $('.active');
      currentlyActive.removeClass('active');
      currentlyActive.next().addClass('active');
      if ($('#player1_strip td').last().hasClass('active')) { 
        alert("Player 1 wins!")
        location.reload();
      };
    }
    if (e.keyCode == 39) {
      var currentlyActive1 = $('.active1');
      currentlyActive1.removeClass('active1');
      currentlyActive1.next().addClass('active1');
      if ($('#player2_strip td').last().hasClass('active1')) { 
        alert("Player 2 wins!")
        location.reload();
      };
    }
  });
});
