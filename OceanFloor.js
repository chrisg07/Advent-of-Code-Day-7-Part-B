module.exports = class OceanFloor {
  crabs = [];
	furthestCrab = 0;

  constructor(lines) {
		for (let line of lines) {
			if (line) {
				let values = line.split(',').map(num => Number(num));
				this.furthestCrab = Math.max(...values);
				for (let i = 0; i <= this.furthestCrab; i++) {
					this.crabs[i] = 0;
				}
				for (let value of values) {
					this.crabs[value]++
				}
			}
		}
  }

	alignCrabs(values) {
		let minFuel = Number.MAX_SAFE_INTEGER;
		let currentFuel = 0;
		for (let alignAt = 0; alignAt < this.furthestCrab; alignAt++) {
			currentFuel = 0
			for (let j = 0; j <= this.furthestCrab; j++) {
				const delta = Math.abs(j - alignAt)
				let fuelCost = this.getFuelCostForDelta(delta)
				currentFuel += fuelCost * this.crabs[j];
				if (currentFuel > minFuel) {
					break
				}
			}
			if (currentFuel < minFuel) {
				minFuel = currentFuel
			}
		}
		return minFuel
	}


	getFuelCostForDelta(delta) {
		let fuelCost = 0
		for (let i = 0; i <= delta; i++) {
			fuelCost += i
		}
		return fuelCost
	}
}
