// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap.min
//= require gmaps/google
//= require turbolinks
//= require_tree .

$(function() {
	
	$(".li-about").mouseenter(function(){
		$(this).addClass("line-about");
	});
	$(".li-about").mouseleave(function(){
		$(this).removeClass("line-about");
	});
	$(".li-portfolio").mouseenter(function(){
		$(this).addClass("line-portfolio");
	});
	$(".li-portfolio").mouseleave(function(){
		$(this).removeClass("line-portfolio");
	});
	$(".li-services").mouseenter(function(){
		$(this).addClass("line-services");
	});
	$(".li-services").mouseleave(function(){
		$(this).removeClass("line-services");
	});
	
});
