/**
 * Created by maeth on 11/2/14.
 */

function ChileIntolerable() {

	var hideWindows = function() {
		var cloud = document.getElementById('cloud');
		cloud.style.top = -window.innerHeight;

		var map = document.getElementById('map');
		map.style.top = window.innerHeight;
	};

	var showWordsTab = function() {
		$("#cloud").css('z-index', 9);
		$("#cloud").animate({ top: 0 },1500,words.show);
	};

	var hideWordsTab = function()  { 
		$("#cloud").css('z-index', 0);
		$("#cloud").animate({ top: -window.innerHeight},1500);
	};
	var showMap = function() {
		$("#logo").hide();
		$("#cloud").animate({ top: -window.innerHeight},1500,function() { 
			$("#map").animate({ top: 0 },1500,countryMap.show);
		});
	};

	var hideMap = function() {
		$("#map").animate({ top: window.innerHeight },1500);
	}


	var _setBindings = function() {
		$("#logo").click(showWordsTab);
		$("#cloud .bar").click(hideWordsTab);
		$("#goMapBtn").click(showMap);
	};


	var _init = function() { 
		hideWindows();
		_setBindings();
		
	};



	_init();

};

var clint = new ChileIntolerable;