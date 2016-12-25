function Login(){
	var userNmae = document.getElementById("userNmae").value;
	var userKey = document.getElementById("userKey").value;
	var Tips = document.querySelector(".error_tip");
	var Name = localStorage.getItem("name");
	var Key = localStorage.getItem("key")
	
	if (userNmae === "" || userKey === "") {
		Tips.style.display = "block"
		Tips.innerText = "用户名或密码不能为空"
		
		return false;
	}else{
		if (userNmae==Name&&userKey==Key) {
			window.location.href = "homePage.html"
		}
		
	}
}

window.onload = function(){
	var userName = document.querySelector("#userNmae");
	var userKey = document.querySelector("#userKey");
	var Tips = document.querySelector(".error_tip");
	
	userName.onfocus = function(){
//		Tips.style.display = "none"
//		this.style.backgroundColor = "#f53"
//		console.debug(this.style.backgroundColor)
	}
}
