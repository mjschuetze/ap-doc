'use strict'

const path = require('path')
const async = require('async')
const fs = require('fs')

const accessionOrderDataPath = path.join(__dirname, 'test-data.17-10925.json')

module.exports.build = function ({
  masterAccessionNo = null,
  reportNo = null
}, callback) {
  var images64 = []

  var data = {
    logoImage: null,
    accessionOrder: null,
    panelSetOrder: null,
    testing: 'hello world',
    addresses: [
      {
        addressline1: '150 Walt Disney lane',
        addressline2: null,
        city: 'MiddleOfNowhere',
        state: 'MT',
        zip: '55555',
        phone: '(202) 505-5555',
        tollfree: '1(800) 123-4567',
        fax: '(202) 505-5556'
      },
      {
        addressline1: '42 MGM circle',
        addressline2: null,
        city: 'Fairytale',
        state: 'NY',
        zip: '52525',
        phone: '(303) 606-6665',
        tollfree: null,
        fax: null
      }
    ],
    pathologist: [
      'Mickey M. Mouse, MD, FCAP',
      'Donald A. Duck, MD, FCAP',
      'Minnie C. Mouse, MD, FCAP',
      'Goofy G. Goof, MD, FCAP',
      'Proky P. Pig, MD, FCAP',
      'Walt G. Disney, MD, FCAP'
    ]
  }

  async.series([

    function (cb) {
      async.eachSeries(
        ['./images/ypilogo1400.png'],
        function (fileName, cb) {
          fs.readFile(fileName, function (err, content) {
            if (err) return console.log(err)
            images64.push(content.toString('base64'))
            cb(null)
          })
        },
        function (err) {
          if (err) return callback(err)
          data.logoImage = images64[0]
          cb(null, data)
        }
      )
    },

    function (cb) {
      fs.readFile(accessionOrderDataPath, function (err, content) {
        if (err) return cb(err)
        var ao = JSON.parse(content)
        data.accessionOrder = ao.accessionOrder
        data.panelSetOrder = ao.accessionOrder.panelSetOrders[0].panelSetOrder
        cb(null)
      })
    }

  ],
  function (err) {
    if (err) return callback(err)
    callback(null, data)
  })
}
