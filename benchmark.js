var request = require('request')
  , uniqueIds = require('./unique-ids')
  , benchmark = function (uri) {
      request(uri, function (err, res, content) {

        console.time(uri)
        for(var i = 0; i < 15; ++i) {
          uniqueIds().write(content)
        }
        console.timeEnd(uri)
      })
    }

benchmark('https://www.npmjs.org/package/unique-ids')
benchmark('http://developer.like.tv/api/broadcast')