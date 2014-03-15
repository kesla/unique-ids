var assert = require('assert')
  , uniqueIds = require('./unique-ids')

  , transformStream = uniqueIds()
  , output = []

transformStream.on('data', function (chunk) {
  output.push(chunk)
})

transformStream.once('end', function () {
  assert.equal(output.join(''), '<h1 id="foo">Hello</h1>\n<p id="bar">Beep boop<span id="foo-1">woop woop!</span></p>\n<p class="world">OMG!</p>\n<div id="foo-2">Some more foo</div>')
})

transformStream.write('<h1 id="foo">Hello</h1>\n')
transformStream.write('<p id="bar">Beep boop')
transformStream.write('<span id="foo">woop woop!</span>')
transformStream.write('</p>\n')
transformStream.write('<p class="world">OMG!</p>\n')
transformStream.write('<div id="foo">Some more foo</div>')
transformStream.end()