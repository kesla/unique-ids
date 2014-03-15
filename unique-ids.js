var trumpet = require('trumpet')

  , uniqueIds = function () {
      var tr = trumpet(),
        idCounts = {}

      tr.selectAll('*', function (elm) {
        elm.getAttribute('id', function (id) {
          if (id) {
            if (idCounts[id])
              elm.setAttribute('id', id + '-' + idCounts[id])

            idCounts[id] = (idCounts[id] || 0) + 1
          }
        })
      })

      return tr
    }


module.exports = uniqueIds