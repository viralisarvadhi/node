const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Something went wrong.');
  }
});

myPromise
  .then(result => {
    console.log(result); // This will run if the Promise is fulfilled
  })
  .catch(error => {
    console.error(error); // This will run if the Promise is rejected
  })
  .finally(() => {
    console.log('The promise has completed'); // This will run when the Promise is settled
  });
const { setTimeout: delay } = require('node:timers/promises');


//understanding the promise chaining 
const promise = delay(1000).then(() => 'First task completed');

promise
  .then(result => {
    console.log(result); // 'First task completed'
    return delay(1000).then(() => 'Second task completed'); // Return a second Promise
  })
  .then(result => {
    console.log(result); // 'Second task completed'
  })
  .catch(error => {
    console.error(error); // If any Promise is rejected, catch the error
  });

  //useage of async,await 

  /*promise1
  .then(function (result1) {
    console.log(result1);
    return promise2;
  })
  .then(function (result2) {
    console.log(result2);
  })
  .catch(function (error) {
    console.log(error);
  });

  async function performTasks() {
  try {
    const result1 = await promise1;
    console.log(result1); // 'First task completed'

    const result2 = await promise2;
    console.log(result2); // 'Second task completed'
  } catch (error) {
    console.error(error); // Catches any rejection or error
  }
}

performTasks()*/

