class GuessingGame {
    constructor() {
    	this.minValue = null;
    	this.maxValue = null;
    	this.middleValue = null;
    	//this.tempValue = null;
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

/*
function BinarySearch(t,A)       // t - искомый элемент,
{                                // A - упорядоченный массив, в котором ищем.
    var i = 0, j = A.length, k;

    while (i < j)
    {  k = Math.floor((i+j)/2);
       if (t <= A[k]) j = k;
       else i = k+1;
    }

    if (A[ i ] === t) return i;     // На выходе индекс искомого элемента.
    else return -1;                 // Если искомого элемента нет в массиве, то -1.
}*/