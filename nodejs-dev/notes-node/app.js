console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('string'));

var filteredArray = _.uniq(['Martin', 1, 'Martin', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(notes.add(7, -2));

// var user = os.userInfo();
//
// fs.appendFileSync('greetings.txt', `Hello ${user.username}, you are ${notes.age}`);
