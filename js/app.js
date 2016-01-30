$(document).ready(function() {
  $('nav a[href*=#]:not([href=#])').click(function() {
    console.log("clicked");
    // var current = $("nav").find(".nav-active");
    // console.log(current);
    // console.log(this);
    // if($(this) !== current)
    // {
    //    current.removeClass("nav-active");
    //    $(this).addClass("nav-active");
    // }
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 115
        }, 2000);
        return false;
      }
    }
  });

  var message = 'Name: ' + '\nPackage: ' + '\nCurrent Location:' + '\nNext Destination: ';

  //tracking algorithm
  $('#track').unbind().click(function(evt) {
    evt.preventDefault();
    console.log('track');
    var statusMessage = $("#status_message");
    // check the value of textbox
    var trackingNum = $('#tracking_num');
    console.log(trackingNum.val(), 'track_num');
    if(trackingNum.val() === '' || trackingNum.val() === undefined || trackingNum.val().length < 6) {
      // console.log('got here');
      statusMessage.val('Please, provide a valid tracking number.');
    }
    else {
      statusMessage.val(message);
    }
  });
});