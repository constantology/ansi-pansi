var colours = { black : 0, red   : 1, green  : 2, yellow    : 3, blue  : 4, magenta   : 5, cyan   : 6, white : 7 },
	formats = { bold  : 1, faint : 2, italic : 3, underline : 4, blink : 5, blinkfast : 5, invert : 7, hide  : 8, strike : 9 },
	views   = { background : '4', text : '3' };

function AnsiPansi( str ) {
	this.formats = []; this.output = [];

	this.reset().concat( str );
}

!function( P ) {
	function has( o, k ) { return Object.prototype.hasOwnProperty.call( o, k ); }
	function setColour( v ) { return function() {
		this.view || this.text();
		this.current[0].push( this.view + v );
		return this.text();
	}; }
	function setFormat( v ) { return function() { this.current[0].push( v ); return this; }; }
	function setView( v )   { return function() { this.view = v; return this; }; }
	function tostring( s, v )  {
		switch ( Object.prototype.toString.call( v ) ) {
			case '[object String]' : s += v; break;
			case '[object Array]'  : s += '\033[' + v[0].join( ';' ) + 'm' + v[1].join( '' ); break;
		}
		return s;
	}

	var k;

	for ( k in formats ) !has( formats, k ) || ( P[k] = setFormat( formats[k] ) );
	for ( k in views   ) !has( views,   k ) || ( P[k] = setView( views[k] ) );
	for ( k in colours ) !has( colours, k ) || ( P[k] = setColour( colours[k] ) );

	P.concat   = function( str ) {
		this.current || ( this.current = [[],[]] );
		this.current[1].push( str );
		return this;
	};
	P.reset    = function() {
		if ( this.current ) {
			this.output.push( this.current );
			delete this.current;
		}
		this.output.push( '\033[0m' );
		this.current = [[], []];
		return this;
	};
	P.toString = function() { return tostring( this.output.reduce( tostring, '' ), this.current ); };

}( AnsiPansi.prototype = Object.create( null ) );

module.exports       = function ansi_pansi( str )  { return new AnsiPansi( str ); };

module.exports.clear = function ansi_pansi_clear() { process.stdout.write( '\033[2J\033[1;1H' ); };
