// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Created by haibozheng on 2016/12/17.
	 */
	// URL =https://news-at.zhihu.com/api/4/news/9064596
	/*
	 *
	 * */
	// URL = http://news-at.zhihu.com/api/4/news/{news-id}

	var newsDetail = {
	  "body": "<div class=\"main-wrap content-wrap\">\n<div class=\"headline\">\n\n<div class=\"img-place-holder\"><\/div>\n\n\n\n<\/div>\n\n<div class=\"content-inner\">\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\"><\/h2>\n\n<div class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\" src=\"http:\/\/pic1.zhimg.com\/52ac22bcb593a28bd285e122d8b08de8_is.jpg\">\n<span class=\"author\">殁羽残翅，<\/span><span class=\"bio\">VR\/图像处理\/多感觉<\/span>\n<\/div>\n\n<div class=\"content\">\n<p>作为在日本的留学狗 +アニメオタク+VR 相关研究的人。<\/p>\r\n<p>最近国内大火的「君の名は。」也在日本刚上映时就已经看过了。<\/p>\r\n<p>关于体验交换身体的感觉， 作为@罗必成 所提到的相关实验并不能做到自己的身体运动和视野中所看到的影像所一致，所以这里补充一下类似的研究。<\/p>\r\n<p>最近自己在进行相关&ldquo;身体运动和视觉信息不一致时的人体运动感觉变化&rdquo;的研究，所以也查询了大量相关方面的资料。<\/p>\r\n<p>介绍一下 UCL&amp;UB 的 Mel Slater 教授，他的研究分野也与我的研究比较相关。<\/p>\r\n<p>lab：<a href=\"http:\/\/www0.cs.ucl.ac.uk\/staff\/M.Slater\/Mel_Slaters_Home_Page\/Home.html\">Mel Slater<\/a><\/p>\r\n<p>关于身体交换的研究，他有许多论文可以参考。<\/p>\r\n<p><strong>1. Virtual Embodiment of White People in a Black Virtual Body Leads to a Sustained Reduction in Their Implicit Racial Bias（2016）<\/strong><\/p>\r\n<p>url：<a href=\"http:\/\/journal.frontiersin.org\/article\/10.3389\/fnhum.2016.00601\/full\">Virtual Embodiment of White People in a Black Virtual Body Leads to a Sustained Reduction in Their Implicit Racial Bias<\/a><\/p>\r\n<p>视频：<a href=\"https:\/\/www.youtube.com\/watch?v=RcBJ1sCPv_I\">https:\/\/www.youtube.com\/watch?v=RcBJ1sCPv_I<\/a><\/p>\r\n<p>这是白人在 VR 环境中，通过改变 VR 虚拟角色肤色来减少种族歧视的研究。<\/p>\r\n<p>也就是说白人身体换成黑人身体，如下图所示。<\/p>\r\n<p><img class=\"content-image\" src=\"http:\/\/pic4.zhimg.com\/70\/v2-aa2b2dc08fb06c8dc06b9ca821f2bd0b_b.jpg\" alt=\"\" \/><\/p>\r\n<p>参加者（只有女性，有研究表明，女性所持有的隐性种族偏见更高于男性）先进入有镜子的 VR 房间内，可观察到自己的肤色（黑色或者白色），5 分钟后，跟随一个太极老师（亚洲或欧洲人）练习太极拳十分钟。<\/p>\r\n<p>实验前和实验后，都进行 Racial Implicit Association Test 测试，结果表明，那些使用黑色肤色的参加者相比于使用黑色肤色的参加者，种族偏见明显减少。<\/p>\r\n<p>类似研究，也同样是互换黑人身体，对于减少歧视的作用。<\/p>\r\n<p>类似研究：<strong>Putting yourself in the skin of a black avatar reduces implicit racial bias（2013）<\/strong><\/p>\r\n<p>url：<a href=\"http:\/\/www.sciencedirect.com\/science\/article\/pii\/S1053810013000597\">Putting yourself in the skin of a black avatar reduces implicit racial bias<\/a><\/p>\r\n<p>视频：<a href=\"https:\/\/www.youtube.com\/watch?v=HliN3iOX090\">https:\/\/www.youtube.com\/watch?v=HliN3iOX090<\/a><\/p>\r\n<p><strong>这个研究应该可以一定程度上回答<\/strong>@罗必成在回答末尾所提出的疑问。<\/p>\r\n<p>现在技术已经在一定程度上可以体验他人的感受，比如体验黑人的感受并减少歧视，让世界更美好。<\/p>\r\n<p><strong>2. First Person Experience of Body Transfer in Virtual Reality（2010）<\/strong><\/p>\r\n<p>url：<a href=\"http:\/\/journals.plos.org\/plosone\/article?id=10.1371\/journal.pone.0010564\">First Person Experience of Body Transfer in Virtual Reality<\/a><\/p>\r\n<p>视频：<a href=\"https:\/\/www.youtube.com\/watch?v=3wg14z5O9Ug\">https:\/\/www.youtube.com\/watch?v=3wg14z5O9Ug<\/a><\/p>\r\n<p>简单来讲，男性参加者在 VR 环境中使用女性身体所带来的身体所有感的研究。<\/p>\r\n<p>这点类似「君の名は。」中的男女主角互换身体。<\/p>\r\n<p>参加者可以看到自己身体，穿着裙子等类似女性特征，并与 VR 环境中另一虚拟角色互动。<\/p>\r\n<p>在实验后通过问卷调查和心率测量等手段来评价。<\/p>\r\n<p>结果而言可以产生一定的身体归属感错觉。<\/p>\r\n<p><img class=\"content-image\" src=\"http:\/\/pic4.zhimg.com\/70\/v2-f8db28d9d7bab8b414d26c5de090ad7b_b.jpg\" alt=\"\" \/><\/p>\r\n<p><strong>3. Multisensory Stimulation Can Induce an Illusion of Larger Belly Size in Immersive Virtual Reality（2011）<\/strong><\/p>\r\n<p>url：<a href=\"http:\/\/journals.plos.org\/plosone\/article?id=10.1371\/journal.pone.0016128\">Multisensory Stimulation Can Induce an Illusion of Larger Belly Size in Immersive Virtual Reality<\/a><\/p>\r\n<p>这是一个使用 VR 肥胖者身体来改变参加者对自己腹部大小认知的研究。<\/p>\r\n<p>由于涉及题主问题较远，实验不在赘述，有兴趣的可以参看论文。<\/p>\r\n<p><img class=\"content-image\" src=\"http:\/\/pic4.zhimg.com\/70\/v2-268e5f088fb2e2728485f9d8bab57973_b.jpg\" alt=\"\" \/><\/p>\r\n<p><strong>同样日本也有类似的研究，但是大部分是改变人体的一部分（手，身高等），并不能称作身体互换。<\/strong><\/p>\r\n<p><strong>例如 东大的<\/strong><\/p>\r\n<p><a href=\"http:\/\/www.cyber.t.u-tokyo.ac.jp\/ja\/\">廣瀬・谷川・鳴海研究室<\/a><\/p>\r\n<p><strong>えくす手：<a href=\"https:\/\/www.youtube.com\/watch?v=xgHrfycNstU\">https:\/\/www.youtube.com\/watch?v=xgHrfycNstU<\/a><\/strong><\/p>\r\n<p><strong>同时以上介绍的研究，都是在 VR 技术下的视觉层面的研究。通过视觉产生身体互换的错觉，并非所谓意识（或者灵魂？）进入他人身体的互换。<\/strong><\/p>\r\n<p>期待今后会有不通过错觉，更直接的互换身体技术的产生，这可能更多地涉及医学层面吧。<\/p>\n<\/div>\n<\/div>\n\n\n<div class=\"view-more\"><a href=\"http:\/\/www.zhihu.com\/question\/53281302\">查看知乎讨论<span class=\"js-question-holder\"><\/span><\/a><\/div>\n\n<\/div>\n\n\n<\/div>\n<\/div>",
	  "image_source": "《你的名字。》",
	  "title": "什么技术可以体验交换身体的感觉？",
	  "image": "http:\/\/pic3.zhimg.com\/4ede28618c583990f72c02f84bb8173a.jpg",
	  "share_url": "http:\/\/daily.zhihu.com\/story\/9064596",
	  "js": [],
	  "ga_prefix": "121718",
	  "images": ["http:\/\/pic3.zhimg.com\/f632efba140aed5cc8b1a7ebd65db716.jpg"],
	  "type": 0,
	  "id": 9064596,
	  "css": ["http:\/\/news-at.zhihu.com\/css\/news_qa.auto.css?v=4b3e3"]
	};
	module.exports.newsDetail = newsDetail;

/***/ })
/******/ ]);