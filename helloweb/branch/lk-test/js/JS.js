window.onload=function(){
	//立方体
	var oBox=document.querySelector('#box');
	var y=-60;
	var x=45;
	oBox.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-y;
		var disY=oEvent.clientY-x;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			x=oEvent.clientY-disY;
			y=oEvent.clientX-disX;
			oBox.style.transform='perspective(800px) rotateX('+x+'deg) rotateY('+y+'deg)';
		};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		};
		return false;
	};
	
	var state={
		"move1":true,
		"changeColor":true
	};
	//h1随机变色
	function changeColor(){
		var color1="#";
		var color2=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		for(var i=0;i<6;i++){
			color1+=color2[Math.floor(Math.random()*16)];
		}
		$(".fixed_bg h1").css("color",color1);
		if(state.changeColor){
			$(".fixed_bg h1").css("transform","scale(1.05)");
			state.changeColor=false;
		}else{
			$(".fixed_bg h1").css("transform","scale(1)");
			state.changeColor=true;
		}
	}
	setInterval(changeColor,1000);
	
	//div移动放大
	function move1(){
		if(state.move1){
			$(".lunbo_bg div").css("transform","scale(1.1)");
			state.move1=false;
		}else{
			$(".lunbo_bg div").css("transform","scale(0.9)");
			state.move1=true;
		}
	}
	var move_1=setInterval(move1,1000);
	
	$(".lunbo_bg div").hover(function(){
		clearTimeout(move_1);
	},function(){
		move_1=setInterval(move1,1000);
	});
};

$(function(){
	//立方体，返回顶部出现
	$("#box").hide();
	$("#top").hide();
	$(window).scroll(function(){
		if($(window).scrollTop()>500){
//			$("#box").fadeIn(500);
			$("#box").show();
			$("#top").fadeIn(1000);
		}else{
			$("#box").hide();
			$("#top").hide();
		}
	});
	
	//返回顶部
	$("#top").click(function(){
		$("body").animate({"scroll-top":0},500);
	});
	
	//点击平滑移至页面对应位置
	function scrollTo() {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
		return false;
	}
	$('#box a').click(scrollTo);
	$('.lunbo_bg li a').click(scrollTo);
	
	//轮播
	$(".lunbo_bg li").fadeOut(0).eq(0).fadeIn(0);
	var i=0;
	function lunbo(){
		if((i+1)<$(".lunbo_bg li").length){
			$(".lunbo_bg li").eq(i).fadeOut(0).next("li").fadeIn(800);
			i++;
			$(".lunbo_btn li").eq(i).addClass("crtBtn");
			$(".lunbo_btn li").eq(i-1).removeClass("crtBtn");
		}else{
			$(".lunbo_bg li").eq(i).fadeOut(0).siblings("li").eq(0).fadeIn(800);
			i=0;
			$(".lunbo_btn li").eq(i).addClass("crtBtn");
			$(".lunbo_btn li").eq(i-1).removeClass("crtBtn");
		}
	}
	var lunboSix=setInterval(lunbo,4000);
	//鼠标浮动上去停止计时器
    $("aside").hover(function(){
    	clearInterval(lunboSix);
    },function(){
    	lunboSix=setInterval(lunbo,4000);
    });
    //鼠标浮动至对应btn，轮播从对应位置开始
    $(".lunbo_btn li").mouseover(function(){
    	i=$(this).index();
    	$(this).addClass("crtBtn");
		$(this).siblings().removeClass("crtBtn");
		var showIndex=$(this).index();
		$(".lunbo_bg li").fadeOut();
		$(".lunbo_bg li:eq("+showIndex+")").fadeIn(800);
    });
    
});
