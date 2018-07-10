$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(document).ready(function() {
  $('nav a[href*=#]:not([href=#])').click(function() {    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
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
  var trackingNumber = 'ATSC01883499KF';
  var message = 'TrackingID: ATSC01883499KF' + '\nName: Liu Lifang ' + '\nAddress: street fillial piety Taiwan,Keelung city xinyi district 15 on the 2nd floor of 77' + '\nEn route: United Kingdom to Dubai';

  //tracking algorithm
  $('#track').click(function(evt) {
    evt.preventDefault();
    statusMessage.val('Loading your tracking info, please wait...');
    statusMessage.hide();
    
    // check the value of textbox
    var trackingNum = $('#tracking_num');
    if(trackingNum.val() === '' || trackingNum.val() === undefined || trackingNum.val() !== trackingNumber) {

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