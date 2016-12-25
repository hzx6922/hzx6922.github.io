var data = {
	name: ["荣耀平板2", "华为 M2 8英寸平板电脑", "荣耀畅玩平板LTE版", "华为 M2 10.0 平板电脑", "荣耀畅玩平板note", "华为 M2 青春版 7.0英寸", "华为 M2 青春版 10.1英寸", "华为平板 M3"],
	src: ["img/pic/1479092302387.jpg", "img/pic/1479113137477.jpg", "img/pic/1479279235465.jpg", "img/pic/1479432155158.jpg", "img/pic/1478483754802.jpg", "img/pic/1477966307203.png", "img/pic/1479434808275.jpg", "img/pic/1480328497453.jpg"],
	cost: [1299, 1288, 799, 3288, 999, 1599, 1899, 2688]
}

var dataNumber = [0, 0, 0, 0, 0, 0, 0, 0];

var gold = 0;
var goodsAll = 0;
//console.debug(data.src[0])

function delI(I) {
	var ulElem = $(".header-toolbar-content-2 ul>li");
	var x = $(I).parent();
	var y = $(I).attr("index")

	gold -= dataNumber[y] * data.cost[y];
	goodsAll -= dataNumber[y];
	dataNumber[y] = 0;
	$("#goodsNumber").text(goodsAll);
	$("#goodsNumberjiage").text(gold);
	$("#GowAll").text(goodsAll);
	x.parent().slideUp(100, function() {
		x.parent().remove()

		if(ulElem.length == 1) {

			$(".header-toolbar-content-goods").show(700)
			$(".header-toolbar-content-2").hide(200)
			$("#goodsNumber").text("-");
			$("#goodsNumberjiage").text("-");
		}
	})

}

$(function() {
	function addgwc(num1) {
		gold = 0;
		goodsAll = 0;

		$.each(dataNumber, function(index) {
			gold += dataNumber[index] * data.cost[index];
			goodsAll += dataNumber[index];
		});

		$("#goodsNumber").text(goodsAll);
		$("#goodsNumberjiage").text(gold);
		$("#GowAll").text(goodsAll);
		if(dataNumber[num1] > 1) {
			$(".cgs" + num1 + " #" + num1 + "all").attr("value", dataNumber[num1]);
		} else {
			$(".header-toolbar-content-goods").hide()

			$(".header-toolbar-content-2 ul").append("<li class='goods-this cgs" + num1 + "' ></li>")
			$(".header-toolbar-content-2 ul>li:last").append("<div class='goods-this-content' ></div>")
			$(".header-toolbar-content-2 ul>li:last>div.goods-this-content").append("<div class='goods-this-content-img' ></div>").append("<div class='goods-this-content-name' ></div>").append("<div class='goods-this-content-jiaqian' ></div>").append("<a class='goods-this-content-del' href='javascript:;' index='" + num1 + "'  onclick='delI(this)'  ></a>");
			$(".header-toolbar-content-2 ul>li:last>div.goods-this-content>div.goods-this-content-img").append("<img src='" + data.src[num1] + "' />")
			$(".header-toolbar-content-2 ul>li:last>div.goods-this-content>div.goods-this-content-name").append("<a href='javascript:;' >" + data.name[num1] + "</a>");
			$(".header-toolbar-content-2 ul>li:last>div.goods-this-content>div.goods-this-content-jiaqian").append("<b>" + data.cost[num1].toFixed(2) + "</b>").append("<em>×</em>").append("<input type='number'  min='1' class='gtcjq-all' id='" + num1 + "all' value='" + dataNumber[num1] + "' />")
		}
		return;
	}

	$(".s-appsoft").hover(function() {
		$(this).css({
			"background-color": "#FFF"
		})
		$(".s-appsoft .b").toggle()
	}, function() {
		$(".s-appsoft .b").toggle()
		$(this).css("background-color", "#fafafa")
	})

	$(".s-dropdown").hover(function() {
		$(this).css("background-color", "#FFF")
		$(".s-dropdown .b").toggle()
	}, function() {
		$(".s-dropdown .b").toggle()
		$(this).css("background-color", "#fafafa")
	});

	$(".a1").hover(function() {
		$(".mexinxi").show(10);
	}, function() {
		$(".mexinxi").hide(10);
	})

	$("#Gouwc").hover(function() {
		//		$(this).css({"margin":"-1px","border":"1px solid"})
		$(".header-toolbar-content").show();
		$(".header-toolbar-content-2").show();
		$(".header-toolbar-content-3").show();
	}, function() {
		$(".header-toolbar-content").hide();
		$(".header-toolbar-content-2").hide();
		$(".header-toolbar-content-3").hide();
	})

	$(".cf-items").click(function() {
		$(this).find("div.gouwuche_ui").fadeToggle(200)
	})

	$(".gouwuche_ui").click(function() {
		var sp = $(this).attr("id")

		dataNumber[sp] += 1;

		addgwc(sp)

	})

	$(".header-toolbar-content-2 ul").on("change", "input.gtcjq-all", function() {
		var idNumber = $(this).attr("id").replace(/all/, "")
		var theElemVal = $(this).val()

		gold -= dataNumber[idNumber] * data.cost[idNumber];
		goodsAll -= dataNumber[idNumber];

		dataNumber[idNumber] = parseInt(theElemVal);

		gold += dataNumber[idNumber] * data.cost[idNumber];
		goodsAll += dataNumber[idNumber];

		console.debug(typeof + dataNumber[idNumber])

		$("#goodsNumber").text(goodsAll);
		$("#GowAll").text(goodsAll);
		$("#goodsNumberjiage").text(gold);

		//		console.debug(typeof+theElemVal)
	})

	$(".homePage").hide()

	$(window).scroll(function() {
		if($(window).scrollTop() > 500) {
			$(".homePage").fadeIn(300)
		} else {
			$(".homePage").fadeOut(300)
		}
	})

	$(".goodsbut").click(function() {
		localStorage.proNumber = dataNumber
		window.location.href = "gouwuche.html"
	});
});

$(function() {
	$("#TopPage").click(function() {
		var speed = 500;

		$("html,body").animate({
			"scroll-top": 0
		}, 500)
	});
});

$(function() {
	var picList = ["url(img/pic/l0.jpg)", "url(img/pic/l1.jpg)", "url(img/pic/l2.jpg)", "url(img/pic/l3.jpg)", "url(img/pic/l4.jpg)", "url(img/pic/l5.jpg)"]

	$.each(picList, function(index) {
		$("#hot-list").append("<li class='hot-item' ></li>");
		if(index == 0) {
			$("#hot-list>li:last").css(
				"background", "url(img/pic/l" + index + ".jpg) center 0%"
			).fadeIn(1000);;
			$(".hot-list-nav").append("<span class='start' index='" + index + "' >" + (index + 1) + "</span>");
			return true;
		}
		$("#hot-list>li:last").css({
			"background": "url(img/pic/l" + index + ".jpg) center 0%",
			"display": "none"
		});
		$(".hot-list-nav").append("<span index='" + index + "' >" + (index + 1) + "</span>");
	});

	var PicIndex = 0;

	function perfectScroll() {
		PicIndex++;
		if(PicIndex >= $("#hot-list li").length) {
			PicIndex = 0;
		}
		$("#hot-list li").fadeOut();
		$(".hot-list-nav span.start").removeClass("start")
		$("#hot-list li").eq(PicIndex).fadeIn(1000);
		$(".hot-list-nav span").eq(PicIndex).addClass("start");
	}

	var TimePic = setInterval(perfectScroll, 3000)

		$(".hot-content").hover(function(){
			clearInterval(TimePic)
		},function(){
			TimePic=setInterval(perfectScroll,3000)
		})

	$(".hot-list-nav span").mouseover(function() {
		var index = parseInt($(this).attr("index"))
		$("#hot-list li").fadeOut();
		$(".hot-list-nav span.start").removeClass("start")
		$("#hot-list li").eq(index).fadeIn(1000);
		$(".hot-list-nav span").eq(index).addClass("start");
		PicIndex = index;
	})
});