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

  var trackingNumber = 'ATSC01882767DE';
  var message = 'Name: Somebody Nobody ' + '\nGoods: Package/Personal belongings' + '\nCurrent Location: United kingdom enroute Dubai' + '\nNext Destination: Dubai';

  //tracking algorithm
  $('#track').click(function(evt) {
    evt.preventDefault();
    console.log('track');
    var statusMessage = $("#status_message");
    // check the value of textbox
    var trackingNum = $('#tracking_num');
    console.log(trackingNum.val(), 'track_num');
    if(trackingNum.val() === '' || trackingNum.val() === undefined || trackingNum.val() !== trackingNumber) {
      // console.log('got here');
      statusMessage.val('Please, provide a valid tracking number.');
    }
    else {
      statusMessage.val(message);
    }
  });
});