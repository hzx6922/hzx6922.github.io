window.onload = function (){
	var Top = document.getElementById("TOP");
	Top.onclick = function (){
		var scroll = document.documentElement.scrollTop
		var speed = 500
		
		var time = setInterval(function(){
			speed = Math.floor(speed / 10)
			document.documentElement.scrollTop =  Math.floor(speed / 10);
			console.log(scroll)
			if (document.documentElement.scrollTop == 0) {
			clearInterval(time);
		}
		},20)
		
		
		
		
	}
}
