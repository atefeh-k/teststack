function stack (){
this.items = Array() 
}

stack.prototype.push = function(item){

    this.items[this.items.length -1 +1]= item
    
    }
    
stack.prototype.pop = function(){
    const item = this.items[this.items.length -1 ]
     this.items = this.items.splice(0,this.items.length -1)
     return item  
}

stack.prototype.size = function(){
    return this.items.length
}

stack.prototype.isEmpty = function (){
    return this.size() === 0 
}
module.exports = stack