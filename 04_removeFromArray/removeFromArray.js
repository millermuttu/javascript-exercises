const removeFromArray = function(arr, ...args) {

return arr.filter(x => !args.includes(x))
};


function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}


// Do not edit below this line
module.exports = removeFromArray;
