var App = function(arr){
    this.tasks = [];
    this.arr = arr;
}

App.prototype = {
    each:function(fn){
        var self = this;
        self.arr.forEach(function(item,index){
            self.tasks[index] = fn(item,index);
        });
        return Promise.all(self.tasks);
    }
}
module.exports = App;