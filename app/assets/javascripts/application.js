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
//= require scrollReveal
//= require gmaps/google
//= require turbolinks
//= require_tree .

$(function() {

	$("h2.contact").show(500);

	$('.portfolio-link').click( function() {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, 800);
	});
	$('.location-link').click( function() {
		$('html, body').animate({
			scrollTop: $(".location-window").offset().top
		}, 800);
	});

	$('.send-to-top').click(function() {
		$('html, body').animate({
			scrollTop: $("html").offset().top
		}, 800);
	});

	$('.contact-request-link').click(function() {
		$(".african-proverb-row").hide();
		$(".contact-request-row").fadeIn(1000);
		$("input.contact-request-name").focus();
	});

	$(".fa-long-arrow-left").click(function() {
		$(".contact-request-row").hide();
		$(".african-proverb-row").fadeIn(1000);
	});

	setTimeout(function() {
		setInterval(function() { $('.pete-jabbour').toggleClass("cursor-border"); }, 530);
	}, 2000);

	var progressHtmlWidth = $("#progress-html").data('progresswidth') + "%";
	var progressCssWidth = $("#progress-css").data('progresswidth') + "%";
	var progressResponsiveWidth = $("#progress-responsive").data('progresswidth') + "%";
	var progressBootstrapWidth = $("#progress-bootstrap").data('progresswidth') + "%";
	var progressEmberWidth = $("#progress-ember").data('progresswidth') + "%";
	var progressAngularWidth = $("#progress-angular").data('progresswidth') + "%";
	var progressRailsWidth = $("#progress-rails").data('progresswidth') + "%";
	var progressRubyWidth = $("#progress-ruby").data('progresswidth') + "%";
	var progressSwiftWidth = $("#progress-swift").data('progresswidth') + "%";
	var progressGolangWidth = $("#progress-golang").data('progresswidth') + "%";
	var progressSqlWidth = $("#progress-sql").data('progresswidth') + "%";

	$("#progress-html").animate({ width: progressHtmlWidth }, 2000);
	$("#progress-css").animate({ width: progressCssWidth }, 2100);
	$("#progress-responsive").animate({ width: progressResponsiveWidth }, 2200);
	$("#progress-bootstrap").animate({ width: progressBootstrapWidth }, 2300);
	$("#progress-ember").animate({ width: progressEmberWidth }, 2400);
	$("#progress-angular").animate({ width: progressAngularWidth }, 2500);
	$("#progress-rails").animate({ width: progressRailsWidth }, 2600);
	$("#progress-ruby").animate({ width: progressRubyWidth }, 2700);
	$("#progress-swift").animate({ width: progressSwiftWidth }, 2800);
	$("#progress-golang").animate({ width: progressGolangWidth }, 2900);
	$("#progress-sql").animate({ width: progressSqlWidth }, 3000);

	window.scrollReveal = new scrollReveal();

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
	$(".li-contact").mouseenter(function(){
		$(this).addClass("line-contact");
	});
	$(".li-contact").mouseleave(function(){
		$(this).removeClass("line-contact");
	});

	$("#chevron-r-car2").click(function() {
		$("#car1").hide();
		$("#sq-car1").removeClass("square-on");
		$("#sq-car2").addClass("square-on");
		$("#chevron-l-car0").hide();
		$("#chevron-r-car2").hide();
		$("#chevron-l-car1").show();
		$("#chevron-r-car3").show();
		$("#car2").fadeIn(700);
	});
	$("#chevron-r-car3").click(function() {
		$("#car2").hide();
		$("#sq-car2").removeClass("square-on");
		$("#sq-car3").addClass("square-on");
		$("#chevron-l-car1").hide();
		$("#chevron-r-car3").hide();
		$("#chevron-l-car2").show();
		$("#chevron-r-car4").show();
		$("#car3").fadeIn(700);
	});
	$("#chevron-r-car4").click(function() {
		$("#car3").hide();
		$("#sq-car3").removeClass("square-on");
		$("#sq-car4").addClass("square-on");
		$("#chevron-l-car2").hide();
		$("#chevron-r-car4").hide();
		$("#chevron-l-car3").show();
		$("#chevron-r-car5").show();
		$("#car4").fadeIn(700);
	});
	$("#chevron-r-car5").click(function() {
		$("#car4").hide();
		$("#sq-car4").removeClass("square-on");
		$("#sq-car5").addClass("square-on");
		$("#chevron-l-car3").hide();
		$("#chevron-r-car5").hide();
		$("#chevron-l-car4").show();
		$("#chevron-r-car6").show();
		$("#car5").fadeIn(700);
	});
	$("#chevron-r-car6").click(function() {
		$("#car5").hide();
		$("#sq-car5").removeClass("square-on");
		$("#sq-car6").addClass("square-on");
		$("#chevron-l-car4").hide();
		$("#chevron-r-car6").hide();
		$("#chevron-l-car5").show();
		$("#chevron-r-car7").show();
		$("#car6").fadeIn(700);
	});
	$("#chevron-r-car7").click(function() {
		$("#car6").hide();
		$("#sq-car6").removeClass("square-on");
		$("#sq-car7").addClass("square-on");
		$("#chevron-l-car5").hide();
		$("#chevron-r-car7").hide();
		$("#chevron-l-car6").show();
		$("#chevron-r-car8").show();
		$("#car7").fadeIn(700);
	});

	$("#chevron-l-car1").click(function() {
		$("#car2").hide();
		$("#sq-car2").removeClass("square-on");
		$("#sq-car1").addClass("square-on");
		$("#chevron-l-car1").hide();
		$("#chevron-r-car3").hide();
		$("#chevron-l-car0").show();
		$("#chevron-r-car2").show();
		$("#car1").fadeIn(700);
	});
	$("#chevron-l-car2").click(function() {
		$("#car3").hide();
		$("#sq-car3").removeClass("square-on");
		$("#sq-car2").addClass("square-on");
		$("#chevron-l-car2").hide();
		$("#chevron-r-car4").hide();
		$("#chevron-l-car1").show();
		$("#chevron-r-car3").show();
		$("#car2").fadeIn(700);
	});
	$("#chevron-l-car3").click(function() {
		$("#car4").hide();
		$("#sq-car4").removeClass("square-on");
		$("#sq-car3").addClass("square-on");
		$("#chevron-l-car3").hide();
		$("#chevron-r-car5").hide();
		$("#chevron-l-car2").show();
		$("#chevron-r-car4").show();
		$("#car3").fadeIn(700);
	});
	$("#chevron-l-car4").click(function() {
		$("#car5").hide();
		$("#sq-car5").removeClass("square-on");
		$("#sq-car4").addClass("square-on");
		$("#chevron-l-car4").hide();
		$("#chevron-r-car6").hide();
		$("#chevron-l-car3").show();
		$("#chevron-r-car5").show();
		$("#car4").fadeIn(700);
	});
	$("#chevron-l-car5").click(function() {
		$("#car6").hide();
		$("#sq-car6").removeClass("square-on");
		$("#sq-car5").addClass("square-on");
		$("#chevron-l-car5").hide();
		$("#chevron-r-car7").hide();
		$("#chevron-l-car4").show();
		$("#chevron-r-car6").show();
		$("#car5").fadeIn(700);
	});
	$("#chevron-l-car6").click(function() {
		$("#car7").hide();
		$("#sq-car7").removeClass("square-on");
		$("#sq-car6").addClass("square-on");
		$("#chevron-l-car6").hide();
		$("#chevron-r-car8").hide();
		$("#chevron-l-car5").show();
		$("#chevron-r-car7").show();
		$("#car6").fadeIn(700);
	});

	$("#sq-car1").click(function() {
		$("#sq-car1").addClass("square-on");
		$("#sq-car2").removeClass("square-on");
		$("#sq-car3").removeClass("square-on");
		$("#sq-car4").removeClass("square-on");
		$("#sq-car5").removeClass("square-on");
		$("#sq-car6").removeClass("square-on");
		$("#sq-car7").removeClass("square-on");
		$("#chevron-l-car0").show();
		$("#chevron-l-car1").hide();
		$("#chevron-l-car2").hide();
		$("#chevron-l-car3").hide();
		$("#chevron-l-car4").hide();
		$("#chevron-l-car5").hide();
		$("#chevron-l-car6").hide();
		$("#chevron-r-car2").show();
		$("#chevron-r-car3").hide();
		$("#chevron-r-car4").hide();
		$("#chevron-r-car5").hide();
		$("#chevron-r-car6").hide();
		$("#chevron-r-car7").hide();
		$("#chevron-r-car8").hide();
		$("#car1").fadeIn(700);
		$("#car2").hide();
		$("#car3").hide();
		$("#car4").hide();
		$("#car5").hide();
		$("#car6").hide();
		$("#car7").hide();
	});
	$("#sq-car2").click(function() {
		$("#sq-car1").removeClass("square-on");
		$("#sq-car2").addClass("square-on");
		$("#sq-car3").removeClass("square-on");
		$("#sq-car4").removeClass("square-on");
		$("#sq-car5").removeClass("square-on");
		$("#sq-car6").removeClass("square-on");
		$("#sq-car7").removeClass("square-on");
		$("#chevron-l-car0").hide();
		$("#chevron-l-car1").show();
		$("#chevron-l-car2").hide();
		$("#chevron-l-car3").hide();
		$("#chevron-l-car4").hide();
		$("#chevron-l-car5").hide();
		$("#chevron-l-car6").hide();
		$("#chevron-r-car2").hide();
		$("#chevron-r-car3").show();
		$("#chevron-r-car4").hide();
		$("#chevron-r-car5").hide();
		$("#chevron-r-car6").hide();
		$("#chevron-r-car7").hide();
		$("#chevron-r-car8").hide();
		$("#car2").fadeIn(700);
		$("#car1").hide();
		$("#car3").hide();
		$("#car4").hide();
		$("#car5").hide();
		$("#car6").hide();
		$("#car7").hide();
	});
	$("#sq-car3").click(function() {
		$("#sq-car1").removeClass("square-on");
		$("#sq-car2").removeClass("square-on");
		$("#sq-car3").addClass("square-on");
		$("#sq-car4").removeClass("square-on");
		$("#sq-car5").removeClass("square-on");
		$("#sq-car6").removeClass("square-on");
		$("#sq-car7").removeClass("square-on");
		$("#chevron-l-car0").hide();
		$("#chevron-l-car1").hide();
		$("#chevron-l-car2").show();
		$("#chevron-l-car3").hide();
		$("#chevron-l-car4").hide();
		$("#chevron-l-car5").hide();
		$("#chevron-l-car6").hide();
		$("#chevron-r-car2").hide();
		$("#chevron-r-car3").hide();
		$("#chevron-r-car4").show();
		$("#chevron-r-car5").hide();
		$("#chevron-r-car6").hide();
		$("#chevron-r-car7").hide();
		$("#chevron-r-car8").hide();
		$("#car3").fadeIn(700);
		$("#car1").hide();
		$("#car2").hide();
		$("#car4").hide();
		$("#car5").hide();
		$("#car6").hide();
		$("#car7").hide();
	});
	$("#sq-car4").click(function() {
		$("#sq-car1").removeClass("square-on");
		$("#sq-car2").removeClass("square-on");
		$("#sq-car3").removeClass("square-on");
		$("#sq-car4").addClass("square-on");
		$("#sq-car5").removeClass("square-on");
		$("#sq-car6").removeClass("square-on");
		$("#sq-car7").removeClass("square-on");
		$("#chevron-l-car0").hide();
		$("#chevron-l-car1").hide();
		$("#chevron-l-car2").hide();
		$("#chevron-l-car3").show();
		$("#chevron-l-car4").hide();
		$("#chevron-l-car5").hide();
		$("#chevron-l-car6").hide();
		$("#chevron-r-car2").hide();
		$("#chevron-r-car3").hide();
		$("#chevron-r-car4").hide();
		$("#chevron-r-car5").show();
		$("#chevron-r-car6").hide();
		$("#chevron-r-car7").hide();
		$("#chevron-r-car8").hide();
		$("#car4").fadeIn(700);
		$("#car1").hide();
		$("#car2").hide();
		$("#car3").hide();
		$("#car5").hide();
		$("#car6").hide();
		$("#car7").hide();
	});
	$("#sq-car5").click(function() {
		$("#sq-car1").removeClass("square-on");
		$("#sq-car2").removeClass("square-on");
		$("#sq-car3").removeClass("square-on");
		$("#sq-car4").removeClass("square-on");
		$("#sq-car5").addClass("square-on");
		$("#sq-car6").removeClass("square-on");
		$("#sq-car7").removeClass("square-on");
		$("#chevron-l-car0").hide();
		$("#chevron-l-car1").hide();
		$("#chevron-l-car2").hide();
		$("#chevron-l-car3").hide();
		$("#chevron-l-car4").show();
		$("#chevron-l-car5").hide();
		$("#chevron-l-car6").hide();
		$("#chevron-r-car2").hide();
		$("#chevron-r-car3").hide();
		$("#chevron-r-car4").hide();
		$("#chevron-r-car5").hide();
		$("#chevron-r-car6").show();
		$("#chevron-r-car7").hide();
		$("#chevron-r-car8").hide();
		$("#car5").fadeIn(700);
		$("#car1").hide();
		$("#car2").hide();
		$("#car3").hide();
		$("#car4").hide();
		$("#car6").hide();
		$("#car7").hide();
	});
	$("#sq-car6").click(function() {
		$("#sq-car1").removeClass("square-on");
		$("#sq-car2").removeClass("square-on");
		$("#sq-car3").removeClass("square-on");
		$("#sq-car4").removeClass("square-on");
		$("#sq-car5").removeClass("square-on");
		$("#sq-car6").addClass("square-on");
		$("#sq-car7").removeClass("square-on");
		$("#chevron-l-car0").hide();
		$("#chevron-l-car1").hide();
		$("#chevron-l-car2").hide();
		$("#chevron-l-car3").hide();
		$("#chevron-l-car4").hide();
		$("#chevron-l-car5").show();
		$("#chevron-l-car6").hide();
		$("#chevron-r-car2").hide();
		$("#chevron-r-car3").hide();
		$("#chevron-r-car4").hide();
		$("#chevron-r-car5").hide();
		$("#chevron-r-car6").hide();
		$("#chevron-r-car7").show();
		$("#chevron-r-car8").hide();
		$("#car6").fadeIn(700);
		$("#car1").hide();
		$("#car2").hide();
		$("#car3").hide();
		$("#car4").hide();
		$("#car5").hide();
		$("#car7").hide();
	});
	$("#sq-car7").click(function() {
		$("#sq-car1").removeClass("square-on");
		$("#sq-car2").removeClass("square-on");
		$("#sq-car3").removeClass("square-on");
		$("#sq-car4").removeClass("square-on");
		$("#sq-car5").removeClass("square-on");
		$("#sq-car6").removeClass("square-on");
		$("#sq-car7").addClass("square-on");
		$("#chevron-l-car0").hide();
		$("#chevron-l-car1").hide();
		$("#chevron-l-car2").hide();
		$("#chevron-l-car3").hide();
		$("#chevron-l-car4").hide();
		$("#chevron-l-car5").hide();
		$("#chevron-l-car6").show();
		$("#chevron-r-car2").hide();
		$("#chevron-r-car3").hide();
		$("#chevron-r-car4").hide();
		$("#chevron-r-car5").hide();
		$("#chevron-r-car6").hide();
		$("#chevron-r-car7").hide();
		$("#chevron-r-car8").show();
		$("#car7").fadeIn(700);
		$("#car1").hide();
		$("#car2").hide();
		$("#car3").hide();
		$("#car4").hide();
		$("#car5").hide();
		$("#car6").hide();
	});































});
