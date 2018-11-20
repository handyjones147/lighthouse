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

  //tracking algorithm
  $('#track').click(function(evt) {
    evt.preventDefault();
    statusMessage.val('Loading your tracking info, please wait...');
    statusMessage.hide();
    
    // check the value of textbox
       var trackingNum = $('#tracking_num');
    var tracking = trackingNum.val().toUpperCase();

    if(tracking === '' || tracking === undefined || !tracks[tracking]) {

      statusMessage.show();
      statusMessage.val('Please, provide a valid tracking number.');
      
      
    }
    else {
      statusMessage.show(4000, function() {
        statusMessage.val(tracks[tracking]);  
      });
      
      
    }
  });
});



// add all tracking info to the tracks object
var tracks = {
  'ATSC01883499KF': 'TrackingID: ATSC01883499KF' + '\nName: Liu Lifang ' + '\nAddress: street fillial piety Taiwan,Keelung city xinyi district 15 on the 2nd floor of 77' + '\nEn route: United Kingdom to Dubai',
  'ATSC01882767DC': 'TrackingID: ATSC01882767DE' + '\nName: Lin Lin Ping ' + '\nGoods: Personal belongings' + '\nFrom: United kingdom' + '\nTo: China' + '\nCurrent location: Enroute Dubai airport',
  'ATSC01882767DE': 'TrackingID: ATSC01882767DE' + '\nName: Stephanie Moore ' + '\nAddress: 32082 Warren Road Millville De 19967' + '\nFrom: United kingdom' + '\nTo: United States' + '\nCurrent location: Arrived Dubai airport',
  'ATSC01882767MA': 'TrackingID: ATSC01882767MA' + '\nName: Liu Meiling ' + '\nAddress: 中国 山东省 烟台市 蓬莱市锦绣家园16-2-102' + '\nFrom: United kingdom' + '\nTo: China' + '\nCurrent location: Enroute Dubai airport',
  'ATSC01882765DB': 'TrackingID: ATSC01882765DB' + '\nName: Chiyomi ueshima ' + '\nAddress: 602 2-19-8 Shinnakanocho, Tomakomai, Hokkaido 053-0006 Japan' + '\nPhone: +81 90 9752 0908‬' + '\nFrom: South Korea' + '\nTo: Japan' + '\nCurrent location: Narita international airport, Japan',
  'ATSC01883499KF': 'TrackingID: ATSC01883499KF' + '\nName: Liu Lifang ' + '\nAddress: street fillial piety Taiwan,Keelung city xinyi district 15 on the 2nd floor of 77' + '\nEn route: United Kingdom to Dubai',
  'ATSC01883680IE': 'TrackingID: ATSC01883680IE' + '\nName: Ma Qinghua ' + '\nAddress: No. 9, 6 - building, 100 - year - old new town, jingyu 16 street, daowai district, harbin, heilongjiang province' + '\nEn route: London to Dubai' + '\nCurrent location:Dubai' + '\nPackage: Box',
  'ATSC01882146EB': 'TrackingID: ATSC01882146EB' + '\nName: Zhou Min ' + '\nAddress: No. 003 Li Peng Xiang, Central Street, Ding Guan Tun Village, Zhanglou Township, Weichuan County, Shandong Province' + '\nEn route: London to Dubai ' + '\nCurrent location:Dubai' + '\nPackage: Box',
}
