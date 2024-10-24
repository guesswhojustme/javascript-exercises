const palindromes = function (string) {
    let reverseString = string.split('').reverse().join();
    let regularString = string.split('').join();

    if(reverseString === regularString){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;



