const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};

start();

// start foo bar zoo baz 
//first execute the simple console.log thats why start
//then the nexttick outside the promise thats why the foo 
//then the promise resole bar
// next task by nexttick so zoo
//then the setimmediate baz
