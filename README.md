# ansi pansi

Basic ansi formatting, foreground and background colours for use with CLIs.

## installation

```

   npm install ansi-pansi

```

## usage

```javascript

   var ansiformat = require( 'ansi-pansi' );

   console.log( ansiformat( 'foo', 'bold blue bg_yellow' ) );
   // prints => 'foo' to the console in blue, bold on a yellow background.\

   ansiformat.clear(); // same as executing – $> clear – from the command line

```

## formatting and colour options
You can use the below codes concatenated with either a plus `+` or a space ` ` character as shown in the example above.

**NOTE: ** Not all formatting across all CLIs.

### formatting
`bold`, `faint`, `italic`, `underline`, `blink`, `blinkfast`, `invert`, `hide`, `strike`

### foreground colours
`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`

### background colours
`bg_black`, `bg_red`, `bg_green`, `bg_yellow`, `bg_blue`, `bg_magenta`, `bg_cyan`, `bg_white`

## License

(The MIT License)

Copyright &copy; 2012 christos "constantology" constandinou http://muigui.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
