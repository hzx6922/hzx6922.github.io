window.onload = function() {
	var Tips = document.querySelector(".error_tip");
	var userName = document.querySelector("#userName");
	var Register = document.querySelector("#Register");
	var userKey = document.querySelector("#userKey");
	var userKeyTwo = document.querySelector("#userKeyTwo");
	var userPhone = document.querySelector("#userPhone")

	userKeyTwo.onblur = function() {
		var keyOne = userKey.value;
		var keyTwo = userKeyTwo.value;

		if(keyTwo === "") {
			Tips.style.display = "block";
			Tips.innerText = "请输入确认密码";
			return false;
		}

		if(keyOne !== keyTwo) {
			Tips.style.display = "block";
			Tips.innerText = "俩次密码不一致";
			return false;
		}
	}

	userKey.onblur = function() {
		var reg = /\w{6,20}/

		if(!reg.test(this.value) && this.value !== "") {
			Tips.style.display = "block";
			Tips.innerText = "密码长度不能小于6个字符";
			return false;
		}
	}

	userPhone.onblur = function() {
		var reg = /^[1][358][0-9]{9}$/;
		var ElemValue = this.value;
		if(!reg.test(ElemValue) && ElemValue !== "") {
			Tips.style.display = "block";
			Tips.innerText = "手机号码格式错误 XXX-XXXX-XXXX";
			return false;
		}
	}

	userName.onblur = function() {
		var reg = /^[a-zA-Z]{2,12}$/
		var ElemValue = this.value;
		if(!reg.test(ElemValue) && ElemValue !== "") {
			Tips.style.display = "block";
			Tips.innerText = "昵称必须是英文且长度大于2";
			return false;
		}

		return true;
	}

	Register.onclick = function() {
		if(userName.value === "") {
			Tips.style.display = "block";
			Tips.innerText = "昵称不可以为空";
			return false;
		} else {
			var reg = /^[a-zA-Z]{2,12}$/
			if(!userName.value && userName.value !== "") {
				Tips.style.display = "block";
				Tips.innerText = "昵称必须是英文且长度大于2";
				return false;
			}
		}

		if(userKey.value === "") {
			Tips.style.display = "block";
			Tips.innerText = "密码不可以为空";
			return false;
		} else {
			var reg = /^\w{6,20}$/
			if(!reg.test(userKey.value) && userKey.value !== "") {
				Tips.style.display = "block";
				Tips.innerText = "密码长度不能小于6个字符";
				return false;
			}
		}

		if(userKeyTwo.value === "") {
			Tips.style.display = "block";
			Tips.innerText = "请输入密码";
			return false;
		} else {
			var keyOne = userKey.value;
			var keyTwo = userKeyTwo.value;

			if(keyTwo === "") {
				Tips.style.display = "block";
				Tips.innerText = "请输入确认密码";
				return false;
			}

			if(keyOne !== keyTwo) {
				Tips.style.display = "block";
				Tips.innerText = "俩次密码不一致";
				return false;
			}
		}

		if(userPhone.value === "") {
			Tips.style.display = "block";
			Tips.innerText = "请输入手机号码";
			return false;
		} else {
			var reg = /^[1][358][0-9]{9}$/;
			if(!reg.test(userPhone.value) && userPhone.value !== "") {
				Tips.style.display = "block";
				Tips.innerText = "手机号码格式错误 XXX-XXXX-XXXX";
				return false;
			}
		}
		
		localStorage.setItem("name",userName.value);
		localStorage.setItem("key",userKey.value);
		
		window.location.href = "Login.html"
	}

	userName.onfocus = function() {
		Tips.style.display = "none";
	}

	userKey.onfocus = function() {
		Tips.style.display = "none";
	}

	userKeyTwo.onfocus = function() {
		Tips.style.display = "none";
	}

	userPhone.onfocus = function() {
		Tips.style.display = "none";
	}
}