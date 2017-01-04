/**
 * Created by THE EGG on 2017/1/1.
 */
$(function() {
	$(".nav-mobile").toggle(function() {
		$(".nav-mobile>span").css("background-color", "transparent");
		$(".nav-mobile>span").addClass("off");
		$(".nvaTL").css("border-bottom-color", "rgba(255, 255, 255, 0.75)");
		$(".nav-mobile-menu").slideDown(100).css("display", "flex");
	}, function() {
		$(".nav-mobile>span").css("background-color", "#b38b4d");
		$(".nav-mobile>span").removeClass("off");
		$(".nvaTL").css("border-bottom-color", "#d4d5d4");
		$(".nav-mobile-menu").slideUp(100);
	});
});
/**
 * Menu end
 */

$(function() {
	$("#content").fullpage({
		resize: true,
		css3: true,
		sectionsColor: ['#a994ff', '#F6E5E4', '#41B3FF', '#a994ff'],
		scrollingSpeed: 350,
		slidesNavigation: true,
		anchors: true,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigation: true,
		navigationTooltips: ['Ajax介绍', 'XMLHttpRequest 对象', 'GET 请求', 'HTTP常见状态码'],
		afterLoad: function(link, index) {
			switch(index) {
				case 1:
					$('.section0 *').css('transition', '0.4s')
					$('.section0 h1').css('transform', 'translateY(-8px)');
					$('.section0 p').css('transform', 'translateY(8px)')
					break
				case 2:
					$('.section1 *').css('transition', '0.4s')
					$('.section1 h1').css('transform', 'translateX(0)');
					$('.section1 P').css('transform', 'translateX(0)');
					break
				case 3:
					$('.section2 *').css('transition', 'all 0.6s');
					$('.section2 div > article > h1').css('transform', 'translate(0,0)');
					$('.section2 div>article>*:not(h1)').css('opacity', '1').css('transform', 'rotateX(0deg)')
					break
				case 4:
					$('.section0 *').css('transition', '0.4s')
					$('.section0 h1').css('transform', 'translateY(-8px)');
					$('.section0 p').css('transform', 'translateY(8px)')
					break
			}
		},
		onLeave: function(index, nextIndex, direction) {
			switch(index) {
				case 1:
					$('.section0 h1').css('transform', 'translateY(0)');
					$('.section0 p').css('transform', 'translateY(0)')
					break
				case 2:
					$('.section1 h1').css('transform', 'translateX(100%)');
					$('.section1 P').css('transform', 'translateX(-100%)');
					break
				case 3:
					$('.section2 div > article > h1').css('transform', 'translate(150%,100%)');
					$('.section2 div>article>*:not(h1)').css('opacity', '0').css('transform', 'rotateX(180deg)')
					break
				case 4:
					break
			}
		}
	});
});