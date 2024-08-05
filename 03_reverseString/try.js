const reverseString = function(string) {
    let newString = "";

    for(i = string.length - 1; i >= 0; i--){
        newString += string.at(i)
    }
   return newString;
};

console.log(reverseString('joshuamarc'))