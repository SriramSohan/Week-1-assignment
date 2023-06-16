/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

var counter=1;
function busyWait(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
      
        }
  }

  console.log('Before busyWait');
  busyWait(3000); // Wait for 3000 milliseconds (3 seconds)
  console.log('After busyWait');