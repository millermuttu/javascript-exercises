const repeatString = function(str, num) {
    let repeat_str = '';
    if (num===0)
    {
        return repeat_str;
    }
    else if (num>0)
    {
        for (let i=0; i<num; i++)
        {
            repeat_str += str;
        }
    }
    else
    {
        return "ERROR"
    }

    return repeat_str

};

// Do not edit below this line
module.exports = repeatString;
