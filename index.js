var indexjs = require('indexjs');
indexjs(__dirname + '/lib', exports);

Object.keys(exports).reduce(function(exports, key){
    exports[key.toLowerCase()] = exports[key]; 
    return exports;
}, exports);
