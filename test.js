var test = require('tape')
  , uniqueIds = require('./unique-ids')

test(function (t) {
  var stream = uniqueIds()
    , output = []

  stream.on('data', function (chunk) { output.push(chunk) })
  stream.once('end', function () {
    t.equal(output.join(''), '<h1 id="foo">Hello</h1>\n<p id="bar">Beep boop<span id="foo-1">woop woop!</span></p>\n<div id="foo-2">Some more foo</div>')
    t.end()
  })

  stream.write('<h1 id="foo">Hello</h1>\n')
  stream.write('<p id="bar">Beep boop')
  stream.write('<span id="foo">woop woop!</span>')
  stream.write('</p>\n')
  stream.write('<div id="foo">Some more foo</div>')
  stream.end()
})

test(function (t) {
  var stream = uniqueIds()
    , output = []

  stream.on('data', function (chunk) { output.push(chunk) })

  stream.once('end', function () {
    t.equal(output.join(''), '<p class="hello">Hello!<em> world!</em></p>')
    t.end()
  })

  stream.write('<p class="hello">Hello!<em> world!</em></p>')
  stream.end()

})

test(function (t) {
  var stream = uniqueIds()
    , output = []

  stream.on('data', function (chunk) { output.push(chunk) })

  stream.once('end', function () {
    t.equal(output.join(''), '<p id="beep">Hello!</p><p id="beep-1 boop"> world!</p>')
    t.end()
  })

  stream.write('<p id="beep">Hello!</p><p id="beep boop"> world!</p>')
  stream.end()

})
