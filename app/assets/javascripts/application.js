// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

	// $('#bubble').on('ready', function(){
			// });
$(function(){
    $('#bubble').animate({
        'margin-left': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
    $('#bubble1').animate({
        'margin-right': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
    $('#bubble2').animate({
        'margin-left': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
    $('#bubble3').animate({
        'margin-right': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
    $('#bubble4').animate({
        'margin-left': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
    $('#bubble5').animate({
        'margin-right': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
    $('#bubble6').animate({
        'margin-left': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
    $('#bubble7').animate({
        'margin-right': '50%',
        'margin-top': '50%',
        'opacity':'0'
    }, 5000 , function() {
    	$(this).remove();
    });
});