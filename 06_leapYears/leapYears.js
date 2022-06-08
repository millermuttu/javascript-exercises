const leapYears = function(year) {
    let leapyear = false;

    if (year%4 == 0){
        leapyear=true;
        if(year%100 ==0){
            leapyear=false;
        }
        if (year%400 == 0){
            leapyear=true;
        }
    }
    return leapyear;
};

// Do not edit below this line
module.exports = leapYears;
