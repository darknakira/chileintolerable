function Map () {

	var camera, scene, renderer;
	var controls, objects;
	var lastTimeMsec= null
	var nowMsec = null
	var onRenderFcts = [];
	var container = new THREE.Object3D();
	var filter_tags = null;

	var init = function() {

		objects = [];
		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 3600;
		camera.position.y = 150;

		scene = new THREE.Scene();
		//

		renderer = new THREE.CSS3DRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.style.position = 'absolute';
		document.getElementById( 'map' ).appendChild( renderer.domElement );
		
		//

//		controls   = new THREE.OrbitControls(camera);
//		controls.noPan = true;

		window.addEventListener( 'resize', onWindowResize, false );

		createLand();

		socket.on('stream', function(tweet){
			setTag(parseInt(Math.random() * 10) + 1, tweet);
		});
	};


	this.setFilters = function( filters ) { 
		filter_tags = filters;
		socket.emit("filter",filter_tags);
	};


	var setTag = function(pos,tweet) {
		var element = document.createElement( 'div' );
		element.className = 'marker';
		element.textContent = tweet.keyword;

		var tag = new THREE.CSS3DObject( element );
		tag.position.set(objects[pos].position.x , objects[pos].position.y, objects[pos].position.z + 50);
		
		container.add(tag);


		setTimeout(function() { 
			tag.visible = false;
			$(tag.element).fadeOut();
			scene.remove(tag);
		},5000);

		onRenderFcts.push(function(delta, now){
			tag.lookAt(camera.position);
			tag.rotation.set(1.6,-0.8,0);
		});


		$("#tweetText").append("<li>" + tweet.text + "</li>");

		return tag;
	};


	var animCountry = function() {

		TWEEN.removeAll();

		new TWEEN.Tween( container.rotation).to( { x: -1.0, y: 0, z: 0.8 }, 2000).onUpdate(function(){  })
		.start();
		new TWEEN.Tween(camera.position).to({ x: 250, y: -1800, z: 2000 },2000).start()

	};

	var adjust = function(i,object) {
		/*console.log(i);*/
		switch (i) {
			case 1:

			break;

			case 2:
				object.position.y += 45;
				object.position.x += 25;
			break;

			case 3:
				object.position.y -= 8;
				object.position.x += 52;
			break;


			case 4:
				object.position.y -= 125;
				object.position.x -= 10;
			break;

			case 5:
				object.position.y -= 183;
				object.position.x -= 71;
			break;


			case 6:
				object.position.y -= 175;
				object.position.x -= 85;
			break;

			case 7:
				object.position.y -= 25;
				object.position.x -= 75;
			break;
			case 8:
				object.position.y += 107;
				object.position.x -= 85;
			break;

			case 9:
				object.position.y += 205;
				object.position.x -= 115;
			break;

			case 10:
				object.position.y += 265;
				object.position.x -= 165;
			break;

			case 11:
				object.position.y += 355;
				object.position.x -= 162;
			break;


			case 12:
				object.position.y += 420;
				object.position.x -= 185;
			break;


			case 13:
				object.position.y += 420;
				object.position.x -= 220;
			break;


			case 14:
				object.position.y += 265;
				object.position.x -= 240;
			break;


			case 15:
				object.position.y -= 230;
				object.position.x -= 100;
			break;
		}
	};

	var createLand = function() {
		
		for (var i = 16 - 1; i >= 1; i--) {
			var element = document.createElement( 'div' );
			element.className = 'region';

			var img = document.createElement( 'img' );
			img.src = "img/regiones/" + i + ".png";
			element.appendChild(img);


			var object = new THREE.CSS3DObject( element );
			//object.scale.set(new THREE.Vector3(0.01,0.01,0.01));
			object.position.y = ((i * 200) * -1) + 2000;
			object.position.z = -1700;

			adjust(i,object);

			object.element.addEventListener("click", function(event) { 
				var vector = new THREE.Vector3({ x: object.position.x , y: object.position.y , z: object.position.z });
				//vector.setFromMatrixPosition( object.matrixWorld );
				camera.lookAt(vector);
			});

			
			objects.push( object );
			container.add( object );
		};
		scene.add( container );
		/*onRenderFcts.push(function(delta, now){
			for (var i = objects.length - 1; i >= 0; i--) {
				objects[i].lookAt(camera.position);
			};
		});*/
	};

	var onWindowResize = function() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		render();

	};

	onRenderFcts.push(function(delta, now){
		renderer.render( scene, camera);
	});

	var render = function() {

		requestAnimationFrame( render );
		lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
		var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
		lastTimeMsec	= nowMsec
		TWEEN.update();
		onRenderFcts.forEach(function(onRenderFct){
			onRenderFct(deltaMsec/1000, nowMsec/1000);
		});

	};
	
	this.show = animCountry;
	this.setTag = setTag;

	init();
	render();
};