var Maybe = require('./Maybe');

function Just(val){
    return {
        fmap: function(fn) {
            return Maybe(fn(val));      
        }
    }
}

module.exports = Just;
