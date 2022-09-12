Finding the Minimum value in an Array.
const arrMin = arr => Math.min(...arr);

Finding the Maximum value in an Array.

const arrMax = arr => Math.max(...arr);
Finding the Average value of an Array.

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
Finding the Sum of all values in an Array.

const arrSum = arr => arr.reduce((a,b) => a + b, 0)