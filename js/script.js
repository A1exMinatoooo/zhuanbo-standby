$(function () {
	var flag = false;
	if (getQueryString("slide") == 1) {
		flag = true;
	}
	var gpname = getQueryString("gpname")
		? (gpname = getQueryString("gpname"))
		: "hime";															// 转播对象
	switchEmoji(gpname);
	switchPic(gpname);
	// Slideshow 4
	$("#slider4").responsiveSlides({
		auto: flag,
		pager: false,
		nav: false,
		speed: 500,
		namespace: "callbacks",
		before: function () {
			$(".events").append("<li>before event fired.</li>");
		},
		after: function () {
			$(".events").append("<li>after event fired.</li>");
		}
	});
});

$(document).ready(function () {
	times = "2020-12-31!23:59:59";
	var times = getQueryString("times");		// 定义时间
	times = times.replace("!", " ");

	var name = getQueryString("staff");
	name = decodeURIComponent(name);
	$("#staff").html(name);
	/* ---- Countdown timer ---- */

	$("#counter").countdown({
		timestamp: new Date(times).getTime()	// Unix 时间戳（毫秒单位）
	});

	/* ---- Animations ---- */

	$("#links a").hover(
		function () {
			$(this).animate({ left: 3 }, "fast");
		},
		function () {
			$(this).animate({ left: 0 }, "fast");
		}
	);

	$("footer a").hover(
		function () {
			$(this).animate({ top: 3 }, "fast");
		},
		function () {
			$(this).animate({ top: 0 }, "fast");
		}
	);
});
var getQueryString = function (field, url) {
	var href = url ? url : window.location.href;
	var reg = new RegExp("[?&]" + field + "=([^&#]*)", "i");
	var string = reg.exec(href);
	return string ? string[1] : null;
};

function switchEmoji(type) {							// 切换页面内显示的 Emoji
	if (type == "tamaki") {
		$(".emoji").html("🐶💙");
		$("#mirrorGroupName").html("犬金組");
	} else if (type == "hime") {
		$(".emoji").html("🍡");
		$("#mirrorGroupName").html("織田軍");
	} else if (type == "mishiro") {
		$(".emoji").html("🐶❄️");
		$("#mirrorGroupName").html("犬金組");
	}
}

function switchPic(type) {								// 切换轮播图片
	var picSource = "./images/bk-hime/";
	if (type == "tamaki") {
		picSource = "./images/bk-tamaki/";
	} else if (type == "hime") {
		picSource = "./images/bk-hime/";
	} else if (type == "mishiro") {
		picSource = "./images/bk-mishiro/";
	}

	var i = 1;
	var imageurl = picSource + "img" + i + ".png";
	var hdfiles = "";
	// alert(imageurl);
	while (CheckImgExists(imageurl)) {
		hdfiles += "<li>";
		hdfiles +=
			'<div class="agileits-banner-info" style="background: url(' +
			imageurl +
			') no-repeat 0px 0px; background-size: cover; background-attachment: fixed;">';
		hdfiles += '<div class="banner-dot"></div>';
		hdfiles += "</div>";
		hdfiles += "</li>";
		i = i + 1;
		imageurl = picSource + "img" + i + ".png";
	}
	$("#slider4").html(hdfiles);
}

function CheckImgExists(imgurl) {					// 判断图片有效性
	var ImgObj = new Image();
	ImgObj.src = imgurl;
	var xhr = new XMLHttpRequest();
	xhr.open("HEAD", ImgObj.src, false);
	xhr.send();
	return xhr.status == 200;
}
