/**
 * Created by maeth on 11/2/14.
 */

var socket = io.connect('127.0.0.1');

function ChileIntolerable() {
	var hidden = false;
	var cloudRendered = false;
	var mapRendered = false;
	var rtMap;

	var hideWindows = function() {


		var cloud = document.getElementById('cloud');
		cloud.style.top = -window.innerHeight;

		var map = document.getElementById('map');
		map.style.top = window.innerHeight;

		var graph = document.getElementById('graph');
		graph.style.height = window.innerHeight;
	
	};

	var showMapTab = function() {
		$("#graph").fadeOut("slow", function() {
			$(".mapCanvas").fadeIn("slow",function() { 

			});
		});
	};


	var showGraphsTab = function() {
		var rtGraph = new Graph;
		$(".mapCanvas").fadeOut("slow", function() {
			$("#graph").fadeIn("slow",function() { 
				rtGraph.show();
			});
		});
	};

	var showWordsTab = function() {
		hidden = true;

		$("#cloud").css('z-index', 9);
		$("#cloud").animate({ top: 0 },1500,words.show);
		$("#cloud .bar").unbind('click');
		$("#cloud .bar").bind('click',hideWordsTab);
	};

	var hideWordsTab = function()  { 
		$("#cloud").css('z-index', 9);
		$("#cloud").animate({ top: -window.innerHeight},1500);
	};
	var showMap = function() {
		$("#logo").hide();
		$("#tweetd").hide();
		$("#cloud .handle .bar .up").addClass("down");
		$("#cloud .handle .bar .up").removeClass("up");
		
		$("#cloud").animate({ top: -window.innerHeight + 30},1500,function() {

			if (!mapRendered) {
				

				var rtMap = new Map;


				rtMap.setFilters(words.filters);
				rtMap.render();
				$("#map").animate({ top: 0 },1500,function() { 
					$("#map .handle").fadeIn("fast");
					$("#map .handle").css("top", window.innerHeight - 80);


					rtMap.show() 
					mapRendered = true;
				});
			}
			$("#cloud .bar").unbind('click');
			$("#cloud .bar").bind('click',showWordsTab);
		});
	};



	var _setBindings = function() {
		$("#logo").click(showWordsTab);
		$("#cloud .bar").bind('click',hideWordsTab);
		$("#goMapBtn").click(showMap);
		$("#showGraphsBtn").click(showGraphsTab);
		$("#showMapBtn").click(showMapTab);
	};


	var runBg = function() {

		socket.emit('home',true);
		socket.on("bg", function(text) { 
			console.log(text);
			$("#tweetd").append(text + "</br>");
		});
	};


	var _init = function() { 
		hideWindows();
		_setBindings();
		runBg();

		window.addEventListener( 'resize', function() { 
			if (!hidden)
				hideWindows();
		});
		
	};


	_init();

};

var clint = new ChileIntolerable;