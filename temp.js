function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusInput = document.getElementById('celsius');

    if (fahrenheitInput.value === '') {
        alert('Please enter a value for Fahrenheit temperature.');
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * (5 / 9);
    celsiusInput.value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    if (celsiusInput.value === '') {
        alert('Please enter a value for Celsius temperature.');
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
}
