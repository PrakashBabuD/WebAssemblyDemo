fetch("./wast/add.wasm")
    .then(function(response) {
        return response.arrayBuffer();
    })
    .then(function(buffer) {

        var moduleBufferView = new Uint8Array(buffer);
        var myMathModule = Wasm.instantiateModule(moduleBufferView);
        console.log(myMathModule.exports.addTwo);
        for(var i = 0; i < 5; i++) {
            console.log(myMathModule.exports.add(i,i+1));
        }
    });