var Just = require('./Just');
var Nothing = require('./Nothing');

function Maybe(val){
    return val == null ? Nothing() : Just(val);
}

module.exports = Maybe;
