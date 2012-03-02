var colours = { black : 0, red   : 1, green  : 2, yellow    : 3, blue  : 4, magenta   : 5, cyan   : 6, white : 7 },
	formats = { bold  : 1, faint : 2, italic : 3, underline : 4, blink : 5, blinkfast : 5, invert : 7, hide  : 8, strike : 9 },
	views   = { background : '4', text : '3' };

function AnsiPansi( str ) {
	this.current = []; this.output = [];
	this.concat( str );
}

!function( P ) {
	function has( o, k ) { return Object.prototype.hasOwnProperty.call( o, k ); }
	function setColour( v ) { return function() {
		this.view || this.text();
		this.current.push( this.view + v );
		return this.text();
	}; }
	function setFormat( v ) { return function() { this.current.push( v ); return this; }; }
	function setView( v )   { return function() { this.view = v;          return this; }; }
	function update( ansi ) {
		!ansi.current.length || ansi.output.push( '\033[' + ansi.current.join( ';' ) + 'm' );
								ansi.output.push( '' + ( ansi.str || '' ) );
		ansi.reset().str = '';
		return ansi;
	}

	var k;

	for ( k in formats ) !has( formats, k ) || ( P[k] = setFormat( formats[k] ) );
	for ( k in views   ) !has( views,   k ) || ( P[k] = setView( views[k] ) );
	for ( k in colours ) !has( colours, k ) || ( P[k] = setColour( colours[k] ) );

	P.concat = function( str ) {
		update( this ).current = [];
		this.str     = str || '';
		return this;
	};
	P.reset    = function() { this.output.push( '\033[0m' ); return this; };
	P.toString = function() { return update( this ).output.join( '' ); };

}( AnsiPansi.prototype = Object.create( null ) );

module.exports       = function ansi_pansi( str )  { return new AnsiPansi( str ); };

module.exports.clear = function ansi_pansi_clear() { process.stdout.write( '\033[2J\033[1;1H' ); };
