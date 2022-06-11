const palindromes = function (str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');

    var reverse = lowRegStr.split('').reverse().join('');

    return lowRegStr===reverse;

};

// Do not edit below this line
module.exports = palindromes;


// var a = "man a";
// console.log(a.split(""))
