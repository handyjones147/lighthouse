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
  var trackingNumber = 'ATSC01883680IE';
  var message = 'TrackingID: ATSC01883680IE' + '\nName: Ma Qinghua ' + '\nAddress: No. 9, 6 - building, 100 - year - old new town, jingyu 16 street, daowai district, harbin, heilongjiang province' + '\nEn route: London to Dubai' + '\nCurrent location:Dubai' + '\nPackage: Box';

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
