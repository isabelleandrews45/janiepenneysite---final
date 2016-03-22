var lightsOn = false;
var onWeekly = false;
var hamburgerShow = false;

// //************SPECIAL EFFECTS ON PAGE***************

$(document).ready(function() {
  $( 'body' ).fadeIn( 2000, function(){
 });

//**********WEEKLY PICKS**********//

$('.weekly_picks').on('click', toggleWeekly);

function toggleWeekly(){
  if (!onWeekly){
  showWeekly();
  onWeekly = true;
  } else{
  hideWeekly();
  onWeekly = false;
  }
}

function showWeekly(){
  $('.subheader').css({
    display: 'block',
});
  $('.weekly_picks').html("weekly picks &#8659");
}


function hideWeekly(){
  $('.subheader').css({
    display: 'none',
});
  $('.weekly_picks').html("weekly picks &#8657");
} 

//**********HAMBURGER MENU**********//
//show / hide menu
var hamburgerShow = false;

$('.hamburger').on('click', hamburgerToggle);

function hamburgerToggle(){
  if (!hamburgerShow){
    showMenu();
    hamburgerShow = true;
  } else{
    hideMenu();
    hamburgerShow = false;
  }
}

function showMenu(){
  $('.hamburger_dropdown').css({
    display:'block',
  });
}

function hideMenu(){
  $('.hamburger_dropdown').css({
  display:'none',
  });
}

//scroll to section

$('.hamburger_about').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.about-section').offset().top // minus header height
   }, 1500);
});
$('.hamburger_work').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.work').offset().top
   }, 1200);
});

$('.hamburger_contact').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.contact').offset().top
   }, 1000);
});

//hide menu

$('.hamburger_about').on('click', function(){
    $('.hamburger_dropdown').css({
  display:'none',
  });
});

$('.hamburger_work').on('click', function(){
    $('.hamburger_dropdown').css({
  display:'none',
  });
});

$('.hamburger_contact').on('click', function(){
    $('.hamburger_dropdown').css({
  display:'none',
  });
});

// //******** NAV SWITCH ON SCROLL*******************


$(window).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.nav').addClass('fade');
  } else {
    $('.nav').removeClass('fade');
  }
  // if y is greater than the top of each section
  // using .offset().top
});

});

//******NAV HIGHLIGHTS*****//
  //add underline
$('#about-btn').on('click', function(){
  $('.underline-abt').css('border-bottom', '3px solid #B4CDCD')
});
  //remove other underlines
  $('#about-btn').on('click', function(){
  $('.underline-work').css('border-bottom', 'none')
});
  $('#about-btn').on('click', function(){
  $('.underline-contact').css('border-bottom', 'none')
});

//add underline
$('#work-btn').on('click', function(){
  $('.underline-work').css('border-bottom', '3px solid #B4CDCD')
});
//remove other underlines
  $('#work-btn').on('click', function(){
  $('.underline-abt').css('border-bottom', 'none')
});
  $('#work-btn').on('click', function(){
  $('.underline-contact').css('border-bottom', 'none')
});


$('#contact-btn').on('click', function(){
  $('.underline-contact').css('border-bottom', '3px solid #B4CDCD')
});
//remove other underlines
  $('#contact-btn').on('click', function(){
  $('.underline-abt').css('border-bottom', 'none')
});
  $('#contact-btn').on('click', function(){
  $('.underline-work').css('border-bottom', 'none')
});
// $('#work-btn').on('click', function(){
//   $('#work-btn').css('text-decoration', 'underline')
// });

// $('#contact-btn').on('click', function(){
//   $('#contact-btn').css('text-decoration', 'underline')
// });
// select element in jquery and then on click add a text-decoration of underline 

// //********LIGHTS ON / LIGHTS OFF BUTTON*************

$('.lightson').on('click', toggleLight);
// $('.on').on('click', switchDark );

function toggleLight(){
  if (!lightsOn) {
    switchLight();
    lightsOn = true;
  } else {
    switchDark();
    lightsOn = false;
  }
}

function switchLight(){

  $('body').css({
    color:'black',
    background: '#f0f9ff',
    background: '-moz-linear-gradient(top,  #f0f9ff 0%, #cbebff 47%, #2ba0c4 100%)',
    background: '-webkit-linear-gradient(top,  #f0f9ff 0%,#cbebff 47%,#2ba0c4 100%)', 
    background: 'linear-gradient(to bottom,  #f0f9ff 0%,#cbebff 47%,#2ba0c4 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#f0f9ff", endColorstr="#2ba0c4",GradientType=0 )', 
  });
  // $('body').fadeIn( 2000, function(){
  //     $(this).css({
  //       'backgroud': 'background-color 0.5s ease',
  //     });
  // });
  $('.janiepenney').css({
    color: 'black',
  });
  $('.navtext').css({
    color:'white',
  })
  $('.toggle').css({
    color: 'black',
  });

  $('.toggle a:link').css({
      color: 'black',
  });  
   $('.lightson').html("lights off!");
}

function switchDark(){
  $('body').css({
    color: 'white',
    // background: '#000000', /* Old browsers */
    // background: '-moz-linear-gradient(top, #000000, #354d7c, #000000)', /* FF3.6-15 */
    // background: '-webkit-linear-gradient(top, #000000, #354d7c, #000000)', /* Chrome10-25,Safari5.1-6 */
    // background: 'linear-gradient(to bottom, #000000, #354d7c, #000000)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    // filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#354d7c",GradientType=0 )', /* IE6-9 */
    // 'background-size': 'cover',
    // fontFamily: '\'Sorts Mill Goudy\', serif'

    // display: none;
    background: '#000000', /* Old browsers */
    background: '-moz-linear-gradient(top,  #000000 0%, #354d7c 100%)', /* FF3.6-15 */
    background: '-webkit-linear-gradient(top,  #000000 0%,#354d7c 100%)', /* Chrome10-25,Safari5.1-6 */
    background: 'linear-gradient(to bottom,  #000000 0%,#354d7c 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#354d7c",GradientType=0 )', /* IE6-9 */
    fontFamily: '\'Sorts Mill Goudy\', serif'
  });
  // $('body').fadeIn( 2000, function(){
  // });
  $('.janiepenney').css({
    color: 'white',
  });
  //still white
  $('.toggle').css({
    color: 'white',
  });
    $('a:link').css({
      color: 'white',
  });
  $('.lightson').html("lights on!");
}



//*********** NAV BUTTON AUTO SCROLL****************

$('#about-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.about-section').offset().top // minus header height
   }, 1500);
});

$('#work-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.work').offset().top
   }, 1200);
});

$('#contact-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.contact').offset().top
   }, 1000);
});

// //*******NAV HIGHLIGHTS************//
// var url = window.location.href; 

// $('.navtext a').each(function() {
//     if(url == (this.href)) { 
//       $(this).closest("li").addClass("active");
//       }
//    });

//*******IMAGE GRID********//
//photo 1 
$('.cnt1').on('click', function(){
  $('.overlay1').css('display', 'block');
});
$('.cnt1').on('click', function(){
  $('.expandimg1').css('display', 'block');
});
$('.exit1').on('click', function(){
  $('.overlay1').css('display', 'none');
});
$('.exit1').on('click', function(){
  $('.expandimg1').css('display', 'none');
});
//photo 2
$('.cnt2').on('click', function(){
  $('.overlay2').css('display', 'block');
});
$('.cnt2').on('click', function(){
  $('.expandimg2').css('display', 'block');
});
$('.exit2').on('click', function(){
  $('.overlay2').css('display', 'none');
});
$('.exit2').on('click', function(){
  $('.expandimg2').css('display', 'none');
});
//photo 3
$('.cnt3').on('click', function(){
  $('.overlay3').css('display', 'block');
});
$('.cnt3').on('click', function(){
  $('.expandimg3').css('display', 'block');
});
$('.exit3').on('click', function(){
  $('.overlay3').css('display', 'none');
});
$('.exit3').on('click', function(){
  $('.expandimg3').css('display', 'none');
});
//photo 4
$('.cnt4').on('click', function(){
  $('.overlay4').css('display', 'block');
});
$('.cnt4').on('click', function(){
  $('.expandimg4').css('display', 'block');
});
$('.exit4').on('click', function(){
  $('.overlay4').css('display', 'none');
});
$('.exit4').on('click', function(){
  $('.expandimg4').css('display', 'none');
});
//photo 5
$('.cnt5').on('click', function(){
  $('.overlay5').css('display', 'block');
});
$('.cnt5').on('click', function(){
  $('.expandimg5').css('display', 'block');
});
$('.exit5').on('click', function(){
  $('.overlay5').css('display', 'none');
});
$('.exit5').on('click', function(){
  $('.expandimg5').css('display', 'none');
});
//photo 6
$('.cnt6').on('click', function(){
  $('.overlay6').css('display', 'block');
});
$('.cnt6').on('click', function(){
  $('.expandimg6').css('display', 'block');
});
$('.exit6').on('click', function(){
  $('.overlay6').css('display', 'none');
});
$('.exit6').on('click', function(){
  $('.expandimg6').css('display', 'none');
});
//********SCROLL BACK TO TOP*******//

$('.back').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('html').offset().top // minus header height
   }, 1500)
});

$('.back').on('click',function(){
   $('.underline-abt').css('border-bottom', 'none')
});
$('.back').on('click',function(){
   $('.underline-work').css('border-bottom', 'none')
});
$('.back').on('click',function(){
   $('.underline-contact').css('border-bottom', 'none')
});

//HOME BUTTON//

$('.home').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('html').offset().top // minus header height
   }, 1500)
});

$('.home').on('click',function(){
   $('.underline-abt').css('border-bottom', 'none')
});
$('.home').on('click',function(){
   $('.underline-work').css('border-bottom', 'none')
});
$('.home').on('click',function(){
   $('.underline-contact').css('border-bottom', 'none')
});
//******SLICK CAROUSEL IMAGES**********
// //  
//  $(document).ready(function(){
// $('.photos').slick({
//   centerMode: true,
//   slidesToShow: 2,
//   centerPadding: '60px',
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,

//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// });

 //*******BACK TO TOP*******//
//  $('.back').on('click', function(event) {
//    event.preventDefault();
//    $('html, body').animate({
//        scrollTop: $('.about-section').offset().top // minus header height
//    }, 1500);
// });

// on scroll, show paralLax affect - each component loading a bit different times

// add a video with iframe

// on submit of contact form, send email to janie's gmail account

// make sure all works responsively

// underline on nav not working properly

// background gradient retsarting at contact section

// lights on/off - want it to fade on page load 
