if( document.createElement('svg').getAttributeNS ) {

		checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( 'form.ac-checkmark input[type="checkbox"]' ) ),
		pathDefs = {
			checkmark : ['m33.667,47.279781c1.296638,2.077305 3.009914,3.964096 4.556786,5.89505c1.090191,1.360912 2.147434,2.814278 3.403618,4.062157c-0.019188,-0.019093 0.817017,0.90353 1.122719,0.876957c0.373272,-0.03294 2.901897,-3.185574 2.508194,-2.732307c2.501102,-2.880154 4.871246,-5.787628 7.061222,-8.869144c2.666256,-3.752243 5.102718,-7.625385 7.550426,-11.493286c1.04641,-1.655102 2.213337,-3.297108 3.130035,-5.019209']
		},
		animDefs = {
			checkmark : { speed : .2, easing : 'ease-in-out' }
		};

	function createSVGEl( def ) {
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if( def ) {
			svg.setAttributeNS( null, 'viewBox', def.viewBox );
			svg.setAttributeNS( null, 'preserveAspectRatio', def.preserveAspectRatio );
		}
		else {
			svg.setAttributeNS( null, 'viewBox', '0 0 100 100' );
		}
		svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
		return svg;
	}

	function controlCheckbox( el, type, svgDef ) {
		var svg = createSVGEl( svgDef );
		el.parentNode.appendChild( svg );
		
		el.addEventListener( 'change', function() {
			if( el.checked ) {
				draw( el, type );
			}
			else {
				reset( el );
			}
		} );
	}

	checkbxsCheckmark.forEach( function( el, i ) { controlCheckbox( el, 'checkmark' ); } );

	function draw( el, type ) {
		var paths = [], pathDef, 
			animDef,
			svg = el.parentNode.querySelector( 'svg' );

		switch( type ) {
			case 'cross': pathDef = pathDefs.cross; animDef = animDefs.cross; break;
			case 'fill': pathDef = pathDefs.fill; animDef = animDefs.fill; break;
			case 'checkmark': pathDef = pathDefs.checkmark; animDef = animDefs.checkmark; break;
			case 'circle': pathDef = pathDefs.circle; animDef = animDefs.circle; break;
			case 'boxfill': pathDef = pathDefs.boxfill; animDef = animDefs.boxfill; break;
			case 'swirl': pathDef = pathDefs.swirl; animDef = animDefs.swirl; break;
			case 'diagonal': pathDef = pathDefs.diagonal; animDef = animDefs.diagonal; break;
			case 'list': pathDef = pathDefs.list; animDef = animDefs.list; break;
		};
		
		paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );

		if( type === 'cross' || type === 'list' ) {
			paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );
		}
		
		for( var i = 0, len = paths.length; i < len; ++i ) {
			var path = paths[i];
			svg.appendChild( path );

			path.setAttributeNS( null, 'd', pathDef[i] );

			var length = path.getTotalLength();
			// Clear any previous transition
			//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
			// Set up the starting positions
			path.style.strokeDasharray = length + ' ' + length;
			if( i === 0 ) {
				path.style.strokeDashoffset = Math.floor( length ) - 1;
			}
			else path.style.strokeDashoffset = length;
			// Trigger a layout so styles are calculated & the browser
			// picks up the starting position before animating
			path.getBoundingClientRect();
			// Define our transition
			path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
			// Go!
			path.style.strokeDashoffset = '0';
		}
	}

	function reset( el ) {
		Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
	}

	function resetRadio( el ) {
		Array.prototype.slice.call( document.querySelectorAll( 'input[type="radio"][name="' + el.getAttribute( 'name' ) + '"]' ) ).forEach( function( el ) { 
			var path = el.parentNode.querySelector( 'svg > path' );
			if( path ) {
				path.parentNode.removeChild( path );
			}
		} );
	}

}