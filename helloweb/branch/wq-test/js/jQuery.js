/**
 * Created by Administrator on 2016/12/29.
 */
$(function () {
    $(".nav-mobile").toggle(function () {
        $(".nav-mobile>span").css("background-color","transparent");
        $(".nav-mobile>span").addClass("off");
        $(".nvaTL").css("border-bottom-color","rgba(255, 255, 255, 0.75)");
        $(".nav-mobile-menu").slideDown(100).css("display","flex");
    },function () {
        $(".nav-mobile>span").css("background-color","#b38b4d");
        $(".nav-mobile>span").removeClass("off");
        $(".nvaTL").css("border-bottom-color","#d4d5d4");
        $(".nav-mobile-menu").slideUp(100);
    });
});
/**
 * Menu end
 */

var p = ['img/luobo01.jpg','img/luobo02.jpg','img/luobo03.jpg','img/luobo04.jpg','img/luobo05.jpg'];
var index = 0;
$(function () {
	$('.slideshow>figure').css("background-image","url("+p[index]+")");
	
	$("#turnright").click(function(){
		index++;
		if (index == p.length-1) {
			index = 0;
		}
		$('.slideshow>figure').css("background-image","url("+p[index]+")");
	})
	$("#turnleft").click(function(){
		index--;
		if (index <= 0) {
			index = p.length-1;
		}
		$('.slideshow>figure').css("background-image","url("+p[index]+")");
		
	})
	function up(){
		index++;
		if (index == p.length-1) {
			index = 0;
		}
		$('.slideshow>figure').css("background-image","url("+p[index]+")");
	}
	
	var time = setInterval(up,3000);
	
//	$(".slideshow").hover(function(){
//		clearInterval ;
//	},function(){
//		var time = setInterval(up,2000);
//	});
	

	$(".prompt>div").mouseover(function(){
		$(".prompt>div.promptOn").find("h4").hide();
		$(".prompt>div.promptOn").find("p").hide();
		$(".prompt>div.promptOn").find("img").show();
		$(".prompt>div.promptOn").removeClass("promptOn");
		$(this).addClass("promptOn");
		$(".prompt>div.promptOn").find("figure").show();
		$(".prompt>div.promptOn").find("h4").show();
		$(".prompt>div.promptOn").find("p").show();
		$(".prompt>div.promptOn").find("img").hide();
	})
	
	$('.back').click(function(){
		var $index = $(this).index();
		$('.back').hide();
		$('.word').eq($index).show();
		
	});
	
	$('.word>a').click(function(){
		$('.word').hide();
		$('.back').show();
	})
	
	
});