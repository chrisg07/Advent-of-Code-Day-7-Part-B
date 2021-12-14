const fs = require('fs')
var OceanFloor = require('./OceanFloor.js')

const { Worker } = require('worker_threads')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
	const lines = data.split(/\r?\n/).map(line => line.trim());
	const oceanFloor = new OceanFloor(lines);
	const minFuel = oceanFloor.alignCrabs(oceanFloor.crabs)
	console.log(`minFuelToAlignCrabs`, minFuel)
})