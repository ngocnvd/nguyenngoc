function dangnhap() {
	var a = document.getElementById('taikhoan').value;
	var hihi = document.getElementById("taikhoan").parentNode.getElementsByTagName("span")[0]
	if (a.length == 0) {
		hihi.innerHTML = " Vui lòng điền thông tin *"
		hihi.style.color = "red"
	}

	else {
		hihi.innerHTML = "✓"
		hihi.style.color = "green"
	}
	var a = document.getElementById('matkhau').value;
	var aaa = document.getElementById("matkhau").parentNode.getElementsByTagName("span")[0]
	if (a.length == 0) {
		aaa.innerHTML = " Vui lòng điền thông tin *"
		aaa.style.color = "red"
	}

	else {
		aaa.innerHTML = "✓"
		aaa.style.color = "green"
	};

	var a = document.getElementById('nhaplaimatkhau').value;
	var aaa = document.getElementById("nhaplaimatkhau").parentNode.getElementsByTagName("span")[0]
	if (a.length == 0) {
		aaa.innerHTML = " Vui lòng điền thông tin *"
		aaa.style.color = "red"
	}

	else {
		aaa.innerHTML = "✓"
		aaa.style.color = "green"
	};

	var a = document.getElementById('giotao').value;
	var aaa = document.getElementById("giotao").parentNode.getElementsByTagName("span")[0]
	if (a.length == 0) {
		aaa.innerHTML = " Vui lòng điền thông tin *"
		aaa.style.color = "red"
	}

	else {
		aaa.innerHTML = "✓"
		aaa.style.color = "green"
	};

	var a = document.getElementById('ngaysinh').value;
	var aaa = document.getElementById("ngaysinh").parentNode.getElementsByTagName("span")[0]
	if (a.length == 0) {
		aaa.innerHTML = " Vui lòng điền thông tin *"
		aaa.style.color = "red"
	}

	else {
		aaa.innerHTML = "✓"
		aaa.style.color = "green"
	};
}