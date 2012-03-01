var code = {
	reset    : 0,
// formatting
	bold     : 1,  faint  : 2,  italic : 3,     underline : 4,  blink   : 5,  blinkfast  : 5,  invert  : 7,  hide     : 8,  strike : 9,
// foreground colours
	black    : 30, red    : 31, green     : 32, yellow    : 33, blue    : 34, magenta    : 35, cyan    : 36, white    : 37,
// background colours
	bg_black : 40, bg_red : 41, bg_green  : 42, bg_yellow : 43, bg_blue : 44, bg_magenta : 45, bg_cyan : 46, bg_white : 47
};

module.exports = function ansi_pansi( str, colour ) {
	var f = colour.split( /[\s\+]/ ).reduce( function( s, a ) { return ( a in code ) ? s += code[a] + ';' : s; }, '' );
	return ( f.length ? '\033[' + f + 'm' : f ) + str + '\033[0m';
};

module.exports.clear = function ansi_pansi_clear() {
	process.stdout.write( '\033[2J\033[1;1H' );
};
