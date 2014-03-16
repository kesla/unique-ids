var trumpet = require('trumpet')

  , uniqueIds = function () {
      var tr = trumpet()
        , idCounts = {}

      tr.selectAll('*[id]', function (elm) {
        elm.getAttribute('id', function (idString) {
          idString = idString
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

          elm.setAttribute('id', idString)
        })
      })

      return tr
    }


module.exports = uniqueIds