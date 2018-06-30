var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Luke'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(12, (user) => {
  console.log(user);
});
