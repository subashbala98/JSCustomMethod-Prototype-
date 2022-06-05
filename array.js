/** Sum of Array  */
let mark=[99,88,97,93,100]

Array.prototype.sum=function(){
    let total=0
    for(let i=0;i<this.length;i++){
        total+=this[i]
    }
    return total;
}

mark.sum()

