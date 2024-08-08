const convertToCelsius = function(fahrenheit) {
        let cel = ((fahrenheit - 32) * 0.5556);

        const rounded = Math.round(cel * 10) / 10;
        return rounded;
};

const convertToFahrenheit = function(celsius) {
        let fah = (celsius * 1.8 + 32);

        const rounded = Math.round(fah * 10) / 10;
        return rounded;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(37.8));
