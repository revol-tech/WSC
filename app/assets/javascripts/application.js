// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree
$(document).ready(function(){


    //Look through all the links in the sidebar
   $("#m_nav li a").filter(function() {

      //Take the current URL and split it into chunks at each slash
      var currentURL = window.location.toString().split("/");

      //return true if the bit after the last slash is the current page name
      return $(this).attr("href") == "/"+currentURL[currentURL.length-2]+"/"+currentURL[currentURL.length-1];

    //when the filter function is done, you're left with the links that match.
    }).addClass("active");

   //Afterwards, look back through the links. If none of them were marked,
   //mark your default one.
   if($('#m_nav li a').hasClass("active") == false) {
      $("#m_nav li:nth-child(0) a").addClass("active");
    }

//......  //slider_text for the service page.............
    var $panels = $('#slider_text .scrollContainer > div');
var $container = $('#slider_text .scrollContainer');

// if false, we'll float all the panels left and fix the width
// of the container
var horizontal = true;

// float the panels left if we're going horizontal
if (horizontal) {
  $panels.css({
    'float' : 'left',
    'position' : 'relative'
    // IE fix to ensure overflow is hidden
  });

  // calculate a new width for the container (so it holds all panels)
  $container.css('width', $panels[0].offsetWidth * $panels.length);
}

// collect the scroll object, at the same time apply the hidden overflow
// to remove the default scrollbars that will appear
var $scroll = $('#slider_text .scroll').css('overflow', 'hidden');



// handle nav selection
function selectNav() {
  $(this)
    .parents('ul:first')
      .find('a')
        .removeClass('selected')
      .end()
    .end()
    .addClass('selected');
}

$('#slider_text .navigation').find('a').click(selectNav);

// go find the navigation link that has this target and select the nav
function trigger(data) {
  var el = $('#slider_text .navigation').find('a[href$="' + data.id + '"]').get(0);
  selectNav.call(el);
}

if (window.location.hash) {
  trigger({ id : window.location.hash.substr(1) });
} else {
  $('ul.navigation a:first').click();
}

// offset is used to move to *exactly* the right place, since I'm using
// padding on my example, I need to subtract the amount of padding to
// the offset.  Try removing this to get a good idea of the effect
var offset = parseInt((horizontal ?
  $container.css('paddingTop') :
  $container.css('paddingLeft'))
  || 0) * -1;


var scrollOptions = {
  target: $scroll, // the element that has the overflow

  // can be a selector which will be relative to the target
  items: $panels,

  navigation: '.navigation a',

  // selectors are NOT relative to document, i.e. make sure they're unique
  prev: 'img.left',
  next: 'img.right',

  // allow the scroll effect to run both directions
  axis: 'xy',

  onAfter: trigger, // our final callback

  offset: offset,

  // duration of the sliding effect
  duration: 500,

  // easing - can be used with the easing plugin:
  // http://gsgd.co.uk/sandbox/jquery/easing/
  easing: 'swing'
};

// apply serialScroll to the slider_text - we chose this plugin because it
// supports// the indexed next and previous scroll along with hooking
// in to our navigation.
$('#slider_text').serialScroll(scrollOptions);

// now apply localScroll to hook any other arbitrary links to trigger
// the effect
$.localScroll(scrollOptions);

// finally, if the URL has a hash, move the slider_text in to position,
// setting the duration to 1 because I don't want it to scroll in the
// very first page load.  We don't always need this, but it ensures
// the positioning is absolutely spot on when the pages loads.
scrollOptions.duration = 1;
$.localScroll.hash(scrollOptions)

   });
