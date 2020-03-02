$(document).ready(function() {

	new WOW().init();

	var	$home = $('#home'),
		$about = $('#about'),
		$project = $('#projects'),
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
		$('.input-group').click(function(){
			$(this).toggleClass('active');
		});
		$('.input-item').click(function(){
			$(this).toggleClass('active').siblings().removeClass('active');
		});
	});

	$project.each(function(){
		$body.addClass('cover_dp');
		$('#project-filter').ckFilter({
			reset: true,
			multiple: false,
			animation: false
		})
		$('.projects-inner .item').hover(function () { 
			$(this).siblings().find('figure').addClass('is-off');
			},function(){
			$(this).siblings().find('figure').removeClass('is-off');
		});
		$('.jqimgFill').imgLiquid();
	});

	/* header =========*/
	$(".menu-toggle").click(function() {
		$(this).toggleClass('active');
		$(this).next(".menu").toggleClass('active');
	});

	$(window).scroll(function () {
        if (jQuery(window).width() > 992 && $(this).scrollTop() > 100) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
		}
	});
	
	var time = 1000;
	!function TVclose(){
		if(time<=0) {
			$('.tv').addClass('close');
		}else {
			console.log(time/1000);
			setTimeout(TVclose, 500);
		}
		time-=1000; 
	}();

  /*document END*/
});
