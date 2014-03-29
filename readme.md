# unique-ids

Transform html so that all ids are unique

## Installation

```
npm install unique-ids
```

## Example

### Input

```javascript
var uniqueIds = require('./unique-ids')

  , transformStream = uniqueIds()

transformStream.pipe(process.stdout);

transformStream.write('<h1 id="foo">Hello</h1>\n')
transformStream.write('<p id="bar">Beep boop')
transformStream.write('<span id="foo">woop woop!</span>')
transformStream.write('</p>\n')
transformStream.write('<p class="world">OMG!</p>\n')
transformStream.write('<div id="foo">Some more foo</div>')
transformStream.end()
```

### Output

```
<h1 id="foo">Hello</h1>
<p id="bar">Beep boop<span id="foo-1">woop woop!</span></p>
<p class="world">OMG!</p>
<div id="foo-2">Some more foo</div>
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

