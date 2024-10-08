const leapYears = function(year) {
    const leapYear = year % 4 === 0;
    const anotherLeapYear = year % 400 === 0;
    const notLeapYear = year % 100 === 0;

    if(leapYear && (!notLeapYear || anotherLeapYear)){
        return true;
    }else{
        return false;
    }
}
// Do not edit below this line
module.exports = leapYears;
