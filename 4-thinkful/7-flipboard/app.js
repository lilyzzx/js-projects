var main = function() {
  /* Push the body and the nav over by 100px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-200px"
    }, 200);
  });

  $('.btn').click(function() {
    var post = $('.status-box').val();
    if (post != '') {
      $('.posts').css('padding-top', '4px');
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('');
      $('.counter').text('140');
      $('.btn').addClass('disabled');
    }
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');
};


$(document).ready(main);