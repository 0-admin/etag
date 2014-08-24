
var assert = require('assert')
var etag = require('..')

describe('etag(entity)', function () {
  describe('when "entity" is a string', function () {
    it('should generate an ETag', function () {
      assert.equal(etag('beep boop'), '"677e121b2436201ed8cc1ec73240a3ad"')
    })
  })

  describe('when "entity" is a Buffer', function () {
    it('should generate an ETag', function () {
      assert.equal(etag(new Buffer([1, 2, 3])), '"5289df737df57326fcdd22597afb1fac"')
    })
  })
})
