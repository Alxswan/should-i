var excuses = [
  "But maybe he misses me?",
  "But what if he's waiting for me to make a move?",
  "Maybe I should just check in and see how he's doing...",
  "But I should tell him how I really feel!",
  "I think I will anyway.",
];

var nos = [
"Nope.",
"No.",
"Nuh-uh",
"Don't.",
"NO!",
"STOP.",
"Have some self respect." 
];

var buttons = [
"orange-flat-button",
"pumpkin-flat-button",
"alizarin-flat-button",
"turquoise-flat-button",
"green-sea-flat-button",
"emerald-flat-button",
"nephritis-flat-button",
"belize-hole-flat-button",
"amethyst-flat-button",
"wisteria-flat-button"
];

var excuse = Math.floor(Math.random() * (excuses.length));
var button = Math.floor(Math.random() * (buttons.length));
var no = Math.floor(Math.random() * (nos.length));

$.ajax({
// The URL for the request
  url: "http://yesno.wtf/api",
// The data to send (will be converted to a query string>

  data: {
    'force': 'no'
  },
// What type of request it is
  type: "GET",
// The type of data we expect back
  dataType : "json",
// Code to run if the request succeeds;
// the response is passed to the function
  success: function( data ) {
    $( "<img>" ).attr('src', data.image ).appendTo( ".image" )
    
// $( "<div class=\"content\">").html( data.html ).appendTo( "body" );
    },
// Code to run if the request fails; the raw request and
// status codes are passed to the function

  error: function( xhr, status, errorThrown ) {
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  },
  // Code to run regardless of success or failure
  complete: function( xhr, status ) {
    console.log('IF YOU HAVE TO ASK YOU ALREADY KNOW THE ANSWER')
    $('.no').html(nos[no]);
    $('<button>').html(excuses[excuse] || "I think I will anyway").appendTo('.button');
    $('button').addClass(buttons[button]);
  }
  });

$(function(){

  $('.button').on('click', function(){
    window.location.reload();
    console.log('ok')
  })
});