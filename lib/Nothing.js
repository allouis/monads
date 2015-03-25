function Nothing(){
    return {
        fmap: function(){
            return Nothing();      
        }
    }
}

module.exports = Nothing;
