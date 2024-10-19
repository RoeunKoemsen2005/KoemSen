function reverseInputNumber() {
    // Get the value from the input field
    const num = document.getElementById('inputNumber').value;

    // Convert the number to a string, split, reverse, and join it back
    const reversedString = num.split('').reverse().join('');

    // Display the result
    document.getElementById('result').innerText = `Reversed Number: ${reversedString}`;
}//versoin 2 update