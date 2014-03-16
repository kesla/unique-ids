var Cornet = require('cornet')
  , domutils = require('domutils')
  , duplex = require('duplexer2')
  , Parser = require('htmlparser2').WritableStream
  , PassThrough = require('stream').PassThrough

  , uniqueIds = function () {
      var cornet = Cornet()
        , idCounts = {}
        , writable = new Parser(cornet)
        , readable = new PassThrough()
        , lastIndex = 0

      cornet.on('element', function (elm) {
        // only care about the elm that have no parent - that are on the lowest
        // level
        if (!elm.parent)
          process.nextTick(function () {
            var index = cornet.dom.indexOf(elm) + 1
            // slice it out of the dom to get all elements included
            // (e.g. text-nodes etc)
            cornet.dom.slice(lastIndex, index).forEach(function (e) {
              readable.write(domutils.getOuterHTML(e))
            })
            lastIndex = index
          })
      })

      cornet.on('dom', function () {
        readable.end()
      })

      cornet.select('*[id]', function (elm) {
        elm.attribs.id = elm.attribs.id
          .split(' ')
          .map(function (id) {
            if (idCounts[id] === undefined) {
              idCounts[id] = 0
            } else {
              idCounts[id] = idCounts[id] + 1
              id = id + '-' + idCounts[id]
            }

            return id
          })
          .join(' ')
      })

      return duplex(writable, readable)
    }


module.exports = uniqueIds