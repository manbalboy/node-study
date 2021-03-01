const value = require('./var.js');

 const checkStringOddOrEven =  function (str) {
    if(str.length % 2) {
        return value.odd;
    } else {
        return value.even;
    }
}



module.exports = {
    checkStringOddOrEven
}


