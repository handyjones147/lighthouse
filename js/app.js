$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(document).ready(function() {
  // $(this).scrollTop(0);
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
        }, 1000);
        return false;
      }
    }
  });

  var statusMessage = $("#status_message");
  var trackingNumber = 'ATSC01882767DE';
  var message = 'TrackingID: ATSC01882767DE' + '\nName: Lin Lin Ping ' + '\nGoods: Package/Personal belongings' + '\nCurrent Location: United kingdom enroute Dubai' + '\nNext Destination: Dubai';

  //tracking algorithm
  $('#track').click(function(evt) {
    evt.preventDefault();
    console.log('track');
    statusMessage.val('Loading your tracking info, please wait...');
    statusMessage.hide();
    
    // check the value of textbox
    var trackingNum = $('#tracking_num');
    console.log(trackingNum.val(), 'track_num');
    if(trackingNum.val() === '' || trackingNum.val() === undefined || trackingNum.val() !== trackingNumber) {
      // console.log('got here');
      statusMessage.show();
      statusMessage.val('Please, provide a valid tracking number.');
      
      
    }
    else {
      statusMessage.show(4000, function() {
        statusMessage.val(message);  
      });
      
      
    }
  });
});