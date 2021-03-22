$(function(){
// Delay Slide carousel
    $('.carousel').carousel({
        interval: 6000
    });
// show or hide option color Box
    $('.gear-check').on('click', function(){
        $('.option-color').fadeToggle();
    });
// Change li colors
    var colorLi = $('.option-color ul li');

    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#1B8DB1").end()
    .eq(2).css("backgroundColor","#92BF24").end()
    .eq(3).css("backgroundColor","#45479A").end()
    .eq(4).css("backgroundColor","#DEAC2F");
// click to change href link to change color theme
    colorLi.on('click', function(){
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
// Caching Scroll button Element
var scrollButton = $('#scroll-top');

// show or hide scroll button
    $(window).scroll(function(){
        $(this).scrollTop() >= 700 ? scrollButton.fadeIn(1000): scrollButton.fadeOut(1000);
    });
// Click on Button to scroll top
    scrollButton.click(function(){
        $('html,body').animate({scrollTop:0},600);
    });
});

// Loading Screen
$(window).ready(function(){
// Show The Scroll
    $("body").css("overflow", "auto");
// Loading Elements
    $(".loading-overlay .spinner").fadeOut(2000, function(){
        $(this).parent().fadeOut(2000, function(){
            $(this).remove();
        });
    });
});

$(function(){
    $("html").niceScroll({
        cursorcolor:"#0075FF",
    });
});