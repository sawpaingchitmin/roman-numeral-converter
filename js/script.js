// Get references to DOM elements
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputResult = document.getElementById("output");

// Define the mapping of decimal numbers to Roman numerals
const decimalRoman = [
    {
      decimal: 1000,
      roman: "M"
    },
    {
      decimal: 900,
      roman: "CM"
    },
    {
      decimal: 500,
      roman: "D"
    },
    {
      decimal: 400,
      roman: "CD"
    },
    {
      decimal: 100,
      roman: "C"
    },
    {
      decimal: 90,
      roman: "XC"
    },
    {
      decimal: 50,
      roman: "L"
    },
    {
      decimal: 40,
      roman: "XL"
    },
    {
      decimal: 10,
      roman: "X"
    },
    {
      decimal: 9,
      roman: "IX"
    },
    {
      decimal: 5,
      roman: "V"
    },
    {
      decimal: 4,
      roman: "IV"
    },
    {
      decimal: 1,
      roman: "I"
    }
];

// Hide the output field initially
outputResult.parentElement.style.display = "none";

// Add event listener to the convert button
convertBtn.addEventListener("click", () => {
  // Get the value from the input field
  const input = numberInput.value;

  // Show the output field
  outputResult.parentElement.style.display = "block";

  // Validate the input
  if (!input) {
    outputResult.textContent = "Please enter a valid number";
    warningColor();
    return;
  } else if (input < 1) {
    outputResult.textContent = "Please enter a number greater than or equal to 1";
    warningColor();
    return;
  } else if (input > 3999) {
    outputResult.textContent = "Please enter a number less than or equal to 3999";
    warningColor();
    return;
  }

  // Reset output styles for valid conversion
  outputResult.style.color = "#E0E0E0";
  outputResult.parentElement.style.backgroundColor = '#581661';

  // Convert the number to Roman numeral
  const romanNumberal = decimalToRoman(parseInt(input));
  outputResult.textContent = romanNumberal;

  // Clear the input field
  numberInput.value = "";
});

// Function to convert a decimal number to a Roman numeral
const decimalToRoman = (input) => {
  let result = "";
  // Loop through each Roman numeral mapping
  decimalRoman.forEach(({ decimal, roman }) => {
    while (input >= decimal) {
      result += roman;
      input -= decimal;
    }
  })

  return result;
};

// Function to apply warning styles to the output field
const warningColor = () => {
  outputResult.style.color = "#d10d31";
  outputResult.parentElement.style.backgroundColor = '#5a0d78';
};