$(document).ready(function() {

	$(".animsition-overlay").animsition({
		inClass: 'overlay-slide-in-top',
		outClass: 'overlay-slide-out-top',
		inDuration: 1000,
		outDuration: 800,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: false,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay : true,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'body',
		transition: function(url){ window.location.href = url; }
	  });

	var	$home = $('#home'),
		$about = $('#about'),
		$project = $('#project'),
		$contact = $('#contact'),
		$this = $(this),
		$body = $('body');


	$home.each(function(){
		$body.addClass('cover_dp');
	});
		
	$about.each(function(){
		$body.addClass('cover_w');
	});

	$contact.each(function(){
		$body.addClass('cover_lg');
	});

	$project.each(function(){
		$body.addClass('cover_dp');
		$('.projects-nav li').on('click', function() {
			$(this).toggleClass('active').siblings().removeClass('active');
		});
	});

	/* header =========*/
	$(".menu-toggle").click(function() {
		$(this).toggleClass('active');
		$(this).next(".menu").toggleClass('active');
	});

	$(".goTop").click(function () {
		$("html,body").animate({
				scrollTop: 0
		}, 1300, 'easeInOutCubic');
		return false;
	});

  /*document END*/
});
