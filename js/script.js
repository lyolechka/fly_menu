;( function() {
	'use strict';

	var button = document.body.querySelector( '.fly-button' ),
		menu = document.body.querySelector( '.fly-button-menu' );

		button.addEventListener( 'click', clickHeandler );
		function clickHeandler( event ) {
			menu.classList.toggle( 'open' );
			event.stopPropagation();
			return false;
		};

		document.addEventListener( 'click', documentClickHeandler );
		function documentClickHeandler( event ) {
			menu.classList.remove( 'open' );
			return false;
		};
} () );
