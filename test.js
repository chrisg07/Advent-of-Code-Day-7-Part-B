var assert = require('assert');
const fs = require('fs')
var OceanFloor = require('./OceanFloor.js')

describe('Ocean Floor', function() {
  describe('should have 10 crabs after test input', function() {
    it('parse test input', function(done) {
      fs.readFile('text-input.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const lines = data.split(/\r?\n/).map(line => line.trim());
      const oceanFloor = new OceanFloor(lines);
			assert.equal(oceanFloor.getFuelCostForDelta(4), 10)
			assert.equal(oceanFloor.alignCrabs(oceanFloor.crabs), 168)
      done();
    })
    });
  });
});