# ansi pansi

Basic ansi formatting, foreground and background colours for use with CLIs.

## installation

```

   npm install ansi-pansi

```

## usage

```javascript

   var ansi = require( 'ansi-pansi' ),
       foo  = ansi( 'foo' );

   console.log( foo.bold().blue().background().yellow().toString() );
   // logs in bold, blue text on a yellow background => foo

   console.log( foo.reset().concat( '\nbar' ).italic().text().white().background().red().toString() );
   // logs in bold, blue text on a yellow background => foo
   // logs in italic, white text on a red background => bar

   ansi.clear(); // same as executing – $> clear – from the command line

```

## API
The following convenience methods are available on the `AnsiPansi` instance returned by the `ansi` method.

### concat( string:String ):this
Concatenated the passed `string` to the current String. Any formatting options already set are still valid.

#### Example:

```javascript

   var ansi = require( 'ansi-pansi' ),
       foo = ansi( 'foo' );

   foo.red().bold();    // red and bold formatting is applied to 'foo'
   foo.concat( 'bar' ); // red and bold formatting is ALSO applied to 'bar'

```

### reset():this
Resets the formatting on the current instance, so any new Strings which are concatenated to it will not have any previous formatting applied.

#### Example:

```javascript

   var ansi = require( 'ansi-pansi' ),
       foo = ansi( 'foo' );

   foo.red().bold();                    // red and bold formatting is applied to 'foo'
   foo.concat( 'bar' );                 // red and bold formatting is ALSO applied to 'bar'
   foo.reset().concat( 'lorem ipsum' ); // no formatting currently applied to 'lorem ipsum'


```

### toString():ANSIFormattedString
Returns the ANSI formatted String created.

#### Example:

```javascript

   var ansi = require( 'ansi-pansi' ),
       foo = ansi( 'foo' );

   foo.red().bold().concat( 'bar' );
   foo.concat( 'lorem ipsum' ).italic().blue();

   foo.toString(); // returns => '\u001b[0m\u001b[1;31mfoo bar\u001b[0m \u001b[3;34mlorem ipsum\u001b[0m\u001b[m'

```

## API:Formatting
All the options below are methods on the `AnsiPansi` instance returned by calling `ansi`.

**NOTE: ** Not all formatting across all CLIs.


### formatting
`bold`, `faint`, `italic`, `underline`, `blink`, `blinkfast`, `invert`, `hide`, `strike`

### views
`background`, `text`

**NOTE:** All colours are automaticallu assigned to `text` unless you call `background` first. Once a background colour is set, `text` is called to allow setting the text colour.

#### Example:

``` javascript

   var ansi = require( 'ansi-pansi' ),
       str  = ansi( 'lorem ipsum ' );                         // string

   str.background().red().white()                             // format above text to be white on a red background
   str.concat( ' dolor sit amet' ).red().background().white() // concatenate text and format it with red text on a white background

```

### colours
`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`

**NOTE:** When assigning a colour it will automatically be assigned as the `text` colour **unless** you call `background` first.

## License

(The MIT License)

Copyright &copy; 2012 christos "constantology" constandinou http://muigui.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
