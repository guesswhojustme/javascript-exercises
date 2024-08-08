const leapYears = function(year) {
    const leapYear = year % 4 === 0;
    const anotherLeapYear = year % 400 === 0;
    const notLeapYear = year % 100 === 0;

    if(leapYear && (!notLeapYear || anotherLeapYear)){
        console.log('leap year');
    }else{
        console.log('not leap year');
    }
};

console.log(leapYears(1600));