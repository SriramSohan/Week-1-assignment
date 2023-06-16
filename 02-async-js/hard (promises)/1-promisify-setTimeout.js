/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, n * 1000);
    });
  }

  console.log('Start');
wait(3).then(function() {
  console.log('3 seconds have passed');
});