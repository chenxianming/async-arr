# async-arr

Foreach arrays on es6 promise

#Install
    
    npm i async-arr --save
    
#Example
    
    var AsyncArr = require('async-arr');

    var arrays = ['a','b','c','d'];

    var task1 = new AsyncArr(arrays);

    task1.each(function(item,index){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(item+' '+index*100+'ms');
            },index*100);
        });
    }).then(function(results){
        console.log(results); // => ['a 0ms','b 100ms','c 200ms','d 300ms']
    });
    

todo