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

   });





    /* $('.active').removeClass('active');
    $('#m_nav li a').addClass('active_nav');
    $(this).removeClass('active_nav');
     $(this).removeClass('active');
    });*/
