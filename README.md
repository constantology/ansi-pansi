# ansi pansi

Basic ansi formatting, foreground and background colours for use with CLIs.

## installation

```

   npm install ansi-pansi

```

## usage

```javascript

   var ansiformat = require( 'ansi-pansi' ),
       foo        = ansiformat( 'foo' );

   console.log( foo.bold().blue().background().yellow().toString() );
   // logs in bold, blue text on a yellow background => foo

   console.log( foo.concat( '\nbar' ).italic().text().white().background().red().toString() );
   // logs in bold, blue text on a yellow background => foo
   // logs in italic, white text on a red background => bar

   ansiformat.clear(); // same as executing – $> clear – from the command line

```

## formatting and colour options
All the options below are methods on the instance returned by calling `ansiformat`.

**NOTE: ** Not all formatting across all CLIs.

### formatting
`bold`, `faint`, `italic`, `underline`, `blink`, `blinkfast`, `invert`, `hide`, `strike`

### views
`background`, `text`

**NOTE:** All colours are automaticallu assigned to `text` unless you call `background` first. Once a background colour is set, `text` is called to allow setting the text colour.

#### Example:

``` javascript

   var ansiformat = require( 'ansi-pansi' ),
       str        = ansiformat( 'lorem ipsum ' );             // string

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
