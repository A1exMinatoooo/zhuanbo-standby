$(function() {
	var flag=false;
	if(getQueryString("slide")==1){
		flag=true;
	}
	// Slideshow 4
	$("#slider4").responsiveSlides({
	  auto: flag,
	  pager: false,
	  nav: false,
	  speed: 500,
	  namespace: "callbacks",
	  before: function() {
		$(".events").append("<li>before event fired.</li>");
	  },
	  after: function() {
		$(".events").append("<li>after event fired.</li>");
	  }
	});
  });
$(document).ready(function(){

	var times=getQueryString("times");
	times=times.replace("!"," ");

	var name=getQueryString("staff");
	name=decodeURIComponent(name);
	$('#staff').html(name);
	/* ---- Countdown timer ---- */

	$('#counter').countdown({
		timestamp : (new Date(times)).getTime()
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 3 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);




});
var getQueryString = function (field, url) {
	var href = url ? url : window.location.href;
	var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
	var string = reg.exec(href);
	return string ? string[1] : null;
};