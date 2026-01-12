const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
  console.log('please trun off the motor');
  setTimeout(()=>{
    console.log('reminder off the motor ');

  }, 3000);
});
console.log("or else running")
myEmitter.emit('waterFull');