/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const startTime = new Date().getTime();

  // Calculate the sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // End the timer and calculate the elapsed time
  const endTime = new Date().getTime();
  const elapsedTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds

  // Return the elapsed time
  return elapsedTime;
}

console.log(calculateTime(100000000));