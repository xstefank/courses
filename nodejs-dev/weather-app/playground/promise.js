var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey. It worked');
    reject('Unable to fullfil promise');
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Failure: ', errorMessage);
})
