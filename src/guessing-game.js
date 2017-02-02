class GuessingGame {
    constructor() {
    	this.minValue = null;
    	this.maxValue = null;
    	this.middleValue = null;
    }

    setRange(min, max) {
    	this.minValue = min;
    	this.maxValue = max;
    }

    guess() {
    	this.middleValue = Math.round((this.minValue+this.maxValue)/2);
    	return this.middleValue;
    }

    lower() {
    	this.maxValue = this.middleValue;
    }

    greater() {
    	this.minValue = this.middleValue;
    }
}

module.exports = GuessingGame;