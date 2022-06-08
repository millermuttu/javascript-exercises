const sumAll = function(num1, num2) {
    if (num1<0 || num2<0){
        return "ERROR"
    }

    if (isNaN(num1) || isNaN(num2)){
        return "ERROR"
    }
    let totalsum = 0;
    if (num1>num2){
        for(let i=num2; i<num1+1; i++){
            totalsum+=i;
        }
        return totalsum;
    }
    else{
        for(let i=num1; i<num2+1; i++){
            totalsum+=i;
        }
        return totalsum;
    }
};

// Do not edit below this line
module.exports = sumAll;
