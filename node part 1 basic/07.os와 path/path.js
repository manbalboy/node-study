const path = require('path');

const string = __filename; 

console.log(path.join(__dirname));
console.log(path.resolve(__dirname,'..','/var.js'));

console.log(path.extname(string));
console.log(path.dirname(string));
console.log(path.basename(string));