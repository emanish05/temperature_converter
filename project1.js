function convertTemperature() {
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;

    if (celsius !== '') {
        var resultFahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').innerHTML = celsius + ' Celsius is ' + resultFahrenheit + ' Fahrenheit.';
    } else if (fahrenheit !== '') {
        var resultCelsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').innerHTML = fahrenheit + ' Fahrenheit is ' + resultCelsius + ' Celsius.';
    } else {
        document.getElementById('result').innerHTML = 'Please enter a temperature value.';
    }
}