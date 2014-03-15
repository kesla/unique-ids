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