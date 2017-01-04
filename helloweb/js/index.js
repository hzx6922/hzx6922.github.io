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



$(function () {
	var manuWrod = ["HTML（Hyper Text Mark-up Language ）即超文本标记语言，是 WWW 的描述语言，由 Tim Berners-lee提出。设计 HTML 语言的目的是为了能把存放在一台电脑中的文本或图形与另一台电脑中的文本或图形方便地联系在一起，形成有机的整体，人们不用考虑具体信息是在当前电脑上还是在网络的其它电脑上。这样，你只要使用鼠标在某一文档中点取一个图标，Internet就会马上转到与此图标相关的内容上去，而这些信息可能存放在网络的另一台电脑中。 ",
,"层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。",
"JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。",
"JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。"
];
	
    $(".slideshow>figure").css("background-image","url(img/2017img.jpg)");

	$(".prompt>div").mouseover(function(){
		$(".prompt>div.promptOn").find("h4").hide();
		$(".prompt>div.promptOn").find("p").hide();
		$(".prompt>div.promptOn").find("img").show()
		
		$(".prompt>div.promptOn").removeClass("promptOn");
		$(this).addClass("promptOn")
		$(".prompt>div.promptOn").find("h4").show();
		$(".prompt>div.promptOn").find("p").show();
		$(".prompt>div.promptOn").find("img").hide()
	})
});