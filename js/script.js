function FlyMenu( className, options ) {
	var _self = this;

	_self.mergeOption = function( defaultOptions, options ){
		var key;
		if( options ) {		// Если нас переданы опции, то мы их передаем в дефолтное значение
			for( key in options ) {
				if ( ! options.hasOwnProperty( key ) ) {		 //если опции не унаследованы от проттотипа
					continue;
				}
				defaultOptions[ key ] = options[ key ];
			}
		};
		return defaultOptions;
	};

	var options = _self.mergeOption(
			{
				menuClass: '.main-menu',
				buttonHTML: '<button class="fly-button"><i class="material-icons">format_align_justify</i></button>'
			},
			options
		),
		flyMenuHolder = document.body.querySelector( className ),
		menu = document.body.querySelector( options.menuClass ),
		button = document.createElement( options.buttonHTML );

		flyMenuHolder.appendChild(button);
	console.log( flyMenuHolder );
};


var flyMenu = new FlyMenu( '.fly-button-container', { menuClass: '.new-main-menu' } );



/*;( function() {
	'use strict';

	var button  = document.body.querySelector( '.fly-button' ),
		menu    = document.body.querySelector( '.fly-button-menu' ),
		clone   = menu.cloneNode(true),
		content = document.body.querySelector( '.fly-button-container' ),
		item;

	for (item in menu.children) {
		if ( ! menu.children.hasOwnProperty( item ) ) {
			continue;
		}
		console.log(menu.children[ item ]);
	}
	content.appendChild(clone);

	button.addEventListener( 'click', clickHeandler );
	function clickHeandler( event ) {
		clone.classList.toggle( 'open' );
		event.stopPropagation();
		return false;
	};

	document.addEventListener( 'click', documentClickHeandler );
	function documentClickHeandler( event ) {
		clone.classList.remove( 'open' );
		return false;
	};
} () );*/
