var data = {
	name: ["荣耀平板2", "华为 M2 8英寸平板电脑", "荣耀畅玩平板LTE版", "华为 M2 10.0 平板电脑", "荣耀畅玩平板note", "华为 M2 青春版 7.0英寸", "华为 M2 青春版 10.1英寸", "华为平板 M3"],
	src: ["img/pic/1479092302387.jpg", "img/pic/1479113137477.jpg", "img/pic/1479279235465.jpg", "img/pic/1479432155158.jpg", "img/pic/1478483754802.jpg", "img/pic/1477966307203.png", "img/pic/1479434808275.jpg", "img/pic/1480328497453.jpg"],
	cost: [1299, 1288, 799, 3288, 999, 1599, 1899, 2688]
}

var gold = 0;
//定义初始变量
console.debug(localStorage.proNumber)

var dataNumber = localStorage.proNumber.split(",")


$.each(dataNumber, function(index) {
	dataNumber[index] = parseInt(dataNumber[index])
});

console.debug(dataNumber)

// 读取商品数量

$(function() { //生成购物车内容
	$.each(dataNumber, function(index) {
		gold = 0;
		if(dataNumber[index] == 0) {
			return true //如果此商品类型没被添加则跳过创建步骤
		}
		$("#tips-car").hide();
		$("#content").append("<tr class='box-" + index + "' ></tr>");
		$("#content>tr:last").append("<td class='tr-check' ></td>").append("<td class='tr-pro'></td>").append("<td  class='tr-price'></td>").append("<td  class='tr-quantity'></td>").append("<td class='tr-subtotal' ></td>").append("<td class='tr-operate' ></td>");
		$("#content>tr>td.tr-check:last").append("<input type='checkbox' id='check-" + index + "'  />");
		$("#content>tr>td.tr-pro:last").append("<div class='trPro-img' ><img src='" + data.src[index] + "' /</div>");
		$("#content>tr>td.tr-pro:last").append("<p class='trPro-name' >" + data.name[index] + "</ p>");
		$("#content>tr>td.tr-price:last").append("¥").append("<span>" + data.cost[index] + "</span>");
		$("#content>tr>td.tr-quantity:last").append("<input value='" + dataNumber[index] + "' type='text' id='pro" + index + "Number' />").append("<a class='add btn' index='" + index + "' ></a>").append("<a class='minus btn' index='" + index + "' ></a>");
		$("#content>tr>td.tr-subtotal:last").append("<span>¥</span>").append("<span id='proAllthe-" + index + "' class='proAlls' >" + dataNumber[index] * data.cost[index] + "</span>");
		$("#content>tr>td.tr-operate:last").append("<a class='delete' index='" + index + "' ></a>")
	});
	
	
	
	if($("#content>tr").length == 0) {
			console.debug($("#content>tr").length)
			$(".divTable").hide();
	} else {

		$.each(dataNumber, function(index) {
			gold += dataNumber[index] * data.cost[index]
		});

		var pri = parseInt($("#privilege").val())

		$("#costAll").text("¥" + gold)
		if((gold - pri) <= 0) {
			$("#costAllTo").text("免费")
		} else {
			$("#costAllTo").text("¥" + (gold - pri))
		}
	}
})

$(function() {
	$("#privilege").change(function() {
		if($(this).val() == "0") {
			$("#costAllTo").text("¥" + (gold))
			return false
		}

		var privilege = parseInt($(this).val());
		console.debug(typeof(gold - privilege))
		if((gold - privilege) <= 0) {
			$("#costAllTo").text("免费")
		} else {
			$("#costAllTo").text("¥" + (gold - privilege))
		}
	})

	$("#content").delegate("a.btn", "click", function() {
		var index = parseInt($(this).attr("index"));
		var theVal = $("#pro" + index + "Number")

		if($(this).hasClass("add")) {
			dataNumber[index] += 1;
			theVal.val(parseInt(theVal.val()) + 1);
			$("#proAllthe-" + index + "").text(dataNumber[index] * data.cost[index]);
			gold += data.cost[index]
		} else if($(this).hasClass("minus")) {
			if(dataNumber[index] == 1) {
				return false
			}
			dataNumber[index] -= 1
			theVal.val(parseInt(theVal.val()) - 1);
			$("#proAllthe-" + index + "").text(dataNumber[index] * data.cost[index]);
			gold -= data.cost[index]
		}

		var pri = parseInt($("#privilege").val())

		$("#costAll").text("¥" + gold)
		$("#costAllTo").text("¥" + (gold - pri))
	})

	$("#content").delegate("a.delete", "click", function() {
		var index = parseInt($(this).attr("index"));

		console.debug($(".box-" + index + ""))

		gold -= dataNumber[index] * data.cost[index]

		var pri = parseInt($("#privilege").val())

		$("#costAll").text("¥" + gold)
		if((gold - pri) <= 0) {
			$("#costAllTo").text("免费")
		} else {
			$("#costAllTo").text("¥" + (gold - pri))
		}

		dataNumber[index] = 0;
		$(".box-" + index + "").remove();
		if($("#content>tr").length == 0){
			$(".divTable").hide();
			$("#tips-car").show(200);
			$("#costAll").text("-");
			$("#costAllTo").text("-")
		}
	})
	
	$("#content").delegate("input[type=text]","keyup",function(){
		var reg=/^\d{1,10}$/;
		if(reg.test($(this).val())){
			$(this).css("border","1px solid #999");
			$(this).css("background-color","white");
			num=$(this).val();
			$(".priTotal").text(priceTotal*num);
		}else if($(this).val()==""){
			$(this).val(1);
		}else{
			$(this).css("border","1px solid red");
			$(this).css("background-color","rgba(255,0,0,0.2)");
		}

	})
})