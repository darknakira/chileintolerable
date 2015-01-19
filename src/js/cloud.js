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


		list();
	};


	var list = function() {

		items = [["vestido de novia en la cartera",22],
		["al 3 y al 4",17],
		["al tres y al cuatro",45],
		["aplaplac",400],
		["a todo cachete",8],
		["bagallo",25],
		["bachicha",20],
		["burrero",75],
		["brujo",85],
		["bruto",97],
		["cachudo",80],
		["se le cae el helado",30],
		["cabeza de rodilla",150],
		["cabro chico",150],
		["cafiche",220],
		["califa",158],
		["canuto",180],
		["cantimplora",55],
		["cartucho",280],
		["cuentero",95],
		["cuico",1003],
		["cuyano",75],
		["chamullento",88],
		["chancho",209],
		["chancletero",33],
		["chanta",400],
		["vuelta la chaqueta",233],
		["che",100],
		["china",99],
		["chino",56],
		["chiporro",45],
		["choro",356],
		["choro canero",120],
		["choros de esquina",129],
		["chula",700],
		["del ambiente",88],
		["domestico",12],
		["duro",95],
		["encalillado",300],
		["encanado",32],
		["en la pitilla",471],
		["esta en la cuerea",30],
		["flayte",1089],
		["fleto",2005],
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
		["maraca",30],
		["mariposon",30],
		["maricon",30],
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
		["roto",30],
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
		["yegua",30],
		["yira",30],
		["zorra",30]];	


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
				minSize: 30,
				rotateRatio: 0.5,
				color: function (word, weight) {
					var colors = ["#CCCCCC","#996666", "#660000", "#330000" ,"#666666", "##996633", "#CC9966","#663333"];
				    return (weight > 150) ? '#336666' : colors[Math.floor(Math.random()*colors.length)];
				}
			});

			container.addEventListener("wordcloudstop", function() {
				$("#cloudCanvas span").click(function() { 
					// find element
					var elem = $(this).text();
					var index = selected.indexOf(elem);
					if (index == -1) {
						if (selected.length < 3) {
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

					if (selected.length == 3) {
						$(".blackbg").fadeIn("fast");
					} else {
						$(".blackbg").fadeOut("fast");
					}
					
				});


			});
		}
	};


	var bindings = function() {


	};

	this.show = draw;


	_init();
};


var words = new Cloud;