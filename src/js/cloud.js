function Cloud () {
	var container = null;
	var	items = [];
	var selected = [];	
	var selectedColors = [];
	var drawed = false;
	var _init = function() {
		parent =  document.getElementById( 'cloud' );
		parent.style.width = window.innerWidth;
		parent.style.height = window.innerHeight;

		container = document.getElementById( 'cloudCanvas' );
		container.style.width = window.innerWidth;
		container.style.height = window.innerHeight * 0.75;

		window.addEventListener( 'resize', function() {  
			parent.style.width = window.innerWidth;
			parent.style.height = window.innerHeight;
			container.style.width = window.innerWidth;
			container.style.height = window.innerHeight * 0.75;
			drawed = false;
			draw();
		}, false );


		list();

		setListener();

	};


	var setListener = function() {
		
		container.addEventListener("wordcloudstop", function() {
			$("#cloudCanvas span").click(function() { 
				// find element
				var elem = $(this).text();
				var index = selected.indexOf(elem);
				if (index == -1) {
					if (selected.length < 10) {
						selected.push(elem);
						selectedColors.push($(this).css('color'));
						$(this).css('color',"#3399CC");
						$(this).css('z-index', 10);
					}
				} else {
					//de-select
					selected.splice(index,1);
					$(this).css('color',selectedColors[index]);
					$(this).css('z-index', 0);
					selectedColors.splice(index,1);
				}

				if (selected.length == 10) {
					$(".blackbg").height(window.innerHeight - 90)
					$(".blackbg").fadeIn("fast");
				} else {
					$(".blackbg").fadeOut("fast");
				}
				

				if (selected.length > 0)
					$("#goMapBtn").fadeIn();
				else
					$("#goMapBtn").fadeOut();

			});
		});
	}


	var list = function() {

		items = [["vestido de novia en la cartera",22],
		["al 3 y al 4",17],
		["al tres y al cuatro",45],
		["aplaplac",40],
		["a todo cachete",8],
		["bagallo",25],
		["bachicha",20],
		["burrero",75],
		["brujo",85],
		["bruto",60],
		["cachudo",80],
		["se le cae el helado",30],
		["cabeza de rodilla",10],
		["cabro chico",60],
		["cafiche",60],
		["califa",55],
		["canuto",40],
		["cantimplora",55],
		["cartucho",60],
		["cuentero",95],
		["cuico",110],
		["cuyano",75],
		["chamullento",88],
		["chancho",60],
		["chancletero",33],
		["chanta",80],
		["vuelta la chaqueta",30],
		["che",100],
		["china",99],
		["chino",56],
		["chiporro",45],
		["choro",120],
		["choro canero",50],
		["choros de esquina",129],
		["chula",60],
		["del ambiente",20],
		["domestico",12],
		["duro",95],
		["encalillado",300],
		["encanado",32],
		["weon",200],
		["en la pitilla",70],
		["esta en la cuerea",30],
		["flayte",170],
		["fleto",170],
		["franchute",100],
		["fresco raja",2],
		["gallo",30],
		["gata mojada",30],
		["gitano",30],
		["guacho",30],
		["guardado",30],
		["guata",30],
		["guitre",30],
		["gringo",30],
		["highlander",30],
		["hocicon",30],
		["huaso",30],
		["incapas",30],
		["patita de chancho",30],
		["julero",30],
		["jai",30],
		["jaibon",30],
		["lanza",30],
		["lela",30],
		["letrado",30],
		["liceo con numero",30],
		["liceo con nombre de misil",30],
		["malandra",30],
		["mandril",30],
		["mano challa",30],
		["maraca",170],
		["mariposon",30],
		["maricon",140],
		["matasanos",30],
		["matusalen",30],
		["mea contra viento",30],
		["mea contra el viento",30],
		["mechera",30],
		["melon con flecos",30],
		["mina",30],
		["mino",30],
		["mono",30],
		["opus",30],
		["opuh",30],
		["paco",30],
		["pailon",30],
		["paitoco",30],
		["palo grueso",30],
		["papito coraz",30],
		["peineta",30],
		["pelolais",30],
		["pelo lais",30],
		["peluson",30],
		["pendejo",30],
		["pepe pato",30],
		["petaca",30],
		["perro",30],
		["perra",30],
		["pez gordo",30],
		["picante",30],
		["pokemon",30],
		["punga",30],
		["profana cuna",30],
		["puta",30],
		["profeta",30],
		["se le quema el arroz",30],
		["raspado",30],
		["rata",30],
		["rati",30],
		["resfalin de piojos",30],
		["roto",90],
		["se le cae",30],
		["se le cae la pelota al barro",30],
		["da vuelta el paragua",30],
		["sele apago el calefon",30],
		["se le apaga el calefon",30],
		["se le paso el tren",30],
		["singuchito",30],
		["siutico",30],
		["solterona",30],
		["sudaca",30],
		["tecla",30],
		["testiculo de jehova",30],
		["tira",30],
		["tira el poto pa las moras",30],
		["todo cagado",30],
		["torrante",30],
		["turco",30],
		["tropicarsh",30],
		["vaca",30],
		["vacuna",30],
		["vagoneta",30],
		["viejo verde",30],
		["yegua",130],
		["yira",30],
		["zorra",140]];	


		return items;
	};


	var draw = function() {
		$("#addFrase").focus();
		if (!drawed) {
			drawed = true;
			WordCloud(container,{
				gridSize: Math.round(32 * (window.innerWidth / 4) / 1024),
				list: items,
				fontFamily: 'Times, serif', 
				minSize: 12,
				rotateRatio: 0.5,
				color: function (word, weight) {
					var colors = ["#336666","#CCCCCC","#996666", "#660000", "#330000" ,"#666666", "##996633", "#CC9966","#663333"];
				    return colors[Math.floor(Math.random()*colors.length)];
				}
			});
		}
	};


	this.filters = selected;

	this.show = draw;


	_init();
};


var words = new Cloud;