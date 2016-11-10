var AsyncArr = require('./index');

var arrays = ['a','b','c','d'];

var tasks = new AsyncArr(arrays);

tasks.each(function(item,index){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(item+' '+index*100+'ms');
        },index*100);
    });
}).then(function(results){
    console.log(results); // => ['a 0ms','b 100ms','c 200ms','d 300ms']
});