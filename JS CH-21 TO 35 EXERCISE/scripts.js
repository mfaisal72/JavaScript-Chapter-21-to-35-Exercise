//Chapter 21 (Changing Case)

//1.Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

var allLower = userInput.toLowerCase();

//2. Convert the string represented by x to lower-case and assign the result to the same variable.

var x = "HELLO WORLD";
x = x.toLowerCase();
alert(x);

//3. Convert the string represented by y to upper-case and assign the result to the same variable

var y = "hello world";
y = y.toUpperCase();
alert(y);

//4. Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.

var originalString = "YourOriginalString"; // Replace "YourOriginalString" with your actual string
var newLowerCaseString = originalString.toLowerCase();

//5. Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.

var myArray = ["HelloWorld", "ExampleString", "AnotherElement"]; // Replace these with your actual strings
var indexToConvert = 1; // Replace this with the index of the array element you want to convert

// Check if the index is within the bounds of the array
if (indexToConvert >= 0 && indexToConvert < myArray.length) {
  var newLowerCaseString = myArray[indexToConvert].toLowerCase();
  console.log("Original string:", myArray[indexToConvert]);
  console.log("Lowercase string:", newLowerCaseString);
} else {
  console.error("Index out of bounds");
}

//6. Display in an alert the upper-case version of the string represented by a variable.

var myString = "Hello, World!"; // Replace this with your actual string
var upperCaseString = myString.toUpperCase();

// Display the upper-case version in an alert
alert("Uppercase version: " + upperCaseString);

//7. var cityName = “kaRacHi”; Convert the string represented by a cityName in Capitalisation is the writing of a word with its first varter in uppercase and the remaining varters in lowercase

var cityName = "kaRacHi";
var capitalizedName =
  cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log("Original city name:", cityName);
console.log("Capitalized city name:", capitalizedName);

//EXPLANATIONS:
// cityName.charAt(0): This extracts the character at index 0 (the first character) of the cityName string.

// .toUpperCase(): This method is then applied to the first character, converting it to uppercase.

// + cityName.slice(1).toLowerCase(): The rest of the string (from index 1 to the end) is sliced and then converted to lowercase. The + operator is used to concatenate the capitalized first character with the lowercase rest of the string.

// By using charAt(0), the code explicitly targets the first character of the string, ensuring that only the first varter is capitalized while the rest of the string remains unchanged in terms of capitalization.

//Chapter 22 - 25 (Strings)

//1. "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.

var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);

console.log(slicedPart);

// In this code:

// sameWords.slice(1, 3): This extracts the characters from index 1 up to (but not including) index 3 from the sameWords string, resulting in "ap".

// console.log: These statements are used to display the original string and the sliced part in the console.

//2. The number of characters in the string will be assigned to the variable

var sameWords = "captain";
var numberOfCharacters = sameWords.length;

console.log("Original string:", sameWords);
console.log("Number of characters:", numberOfCharacters);

//In this example,
// sameWords.length retrieves the number of characters in the sameWords string, and it is then assigned to the variable numberOfCharacters. The console.log statements are used to display the original string and the number of characters in the console.

//3. The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.

var animal = "elephant";
var middleIndex = Math.floor(animal.length / 2); // Calculate the middle index
var seg = animal.slice(middleIndex - 2, middleIndex + 2);

console.log("Original string:", animal);
console.log("Sliced middle characters:", seg);

// In this code:

// Math.floor(animal.length / 2): This calculates the middle index of the string animal.

// animal.slice(middleIndex - 2, middleIndex + 2): This slices the four middle characters (two characters before and two characters after the middle index) and assigns them to the variable seg.

// console.log: These statements are used to display the original string and the sliced middle characters in the console.

//4. Find the number of characters in the string represented by a variable and assign the number to a second variable

var animal = "elephant";
var numberOfCharacters = animal.length;

console.log("Original string:", animal);
console.log("Number of characters:", numberOfCharacters);

//5. In a first statement measure how many characters there are in a string "elephant" represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and ssign it to a second variable that hasn't been declared
// beforehand.

// count the number of characters in the string "elephant"
var originalString = "elephant";
var characterCount = originalString.length;

// Slice the string to keep only the first character and last 3 characters
var slicedString = originalString[0] + originalString.slice(1, -3);

console.log("Number of characters in the original string:", characterCount);
console.log("Sliced string:", slicedString);

// In these lines,
// a new variable slicedString is declared. The goal is to slice the original string to keep only the first character and the characters from index 1 to 3 from the end.

// originalString[0] extracts the first character of the string.
// originalString.slice(1, -3) extracts the portion of the string starting from index 1 and up to (but not including) the last 3 characters. The use of -3 as the second parameter counts from the end of the string.
// These two parts are concatenated using the + operator, and the result is stored in the variable slicedString.

//6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log("Index of 'be':", indx); // answer is 3

// The indexOf method is used to find the index of the first occurrence of the substring "be" in the string text. It returns the index of the first character of the first occurrence of the specified substring, or -1 if the substring is not found.

// In this case, "be" first occurs at index 3 in the string "To be or not to be.", so the value of indx would be 3.

//7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
console.log("Last Index of 'be':", indx); //answer is 16

//8. Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.

var text = "To go or not to go, that is the question.";
var indx = text.lastIndexOf("go");

console.log("Index of the first character of the last instance of 'go':", indx); // annswer is 16

//9. Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string

var text = "This is a sample string.";
var segment = "sample";
var indexNum = 5;

if (text.indexOf(segment) !== -1) {
  // The segment exists in the string
  var startIndex = text.indexOf(segment);
  var endIndex = startIndex + segment.length;
  var extractedSegment = text.substring(startIndex, endIndex);

  console.log("Segment found in the string:", extractedSegment);
} else {
  // The segment does not exist in the string
  console.log("Segment not found in the string.");
}

//10. In this string "abcde", what character is at index 2? (Use charAt)

var myString = "abcde";
var characterAtIndex2 = myString.charAt(2);

console.log(characterAtIndex2);

//11. Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.

var text = "hello every one";
var cha = text.charAt(9);

console.log(cha);

//12. Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand

var str = "hello every one";

// Find the last character in the string and assign it to the variable x
var x = str.charAt(str.length - 1);

console.log(x);

//13. Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand

var input = "good morning pakistan";

// Find the 5th character in the string and assign it to the variable cha
var cha = input.charAt(4); // Note: Indices are zero-based, so 4 corresponds to the 5th character

console.log(cha);

//14. Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character

var yourString = "good morning pakistan";
var particularCharacter = "X"; // Replace "X" with the specific character you are checking for

if (yourString.length >= 3 && yourString.charAt(2) === particularCharacter) {
  // The 3rd character is the particular character
} else {
  // The 3rd character is not the particular character
}

//15. Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand. In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.

var yourString = "YourStringHere"; // Replace "YourStringHere" with the actual string
var charArray = []; // Declare an array to store the characters

for (var i = 0; i < yourString.length; i++) {
  charArray[i] = yourString.charAt(i);
}

// Now, charArray contains each character of the string as separate elements
console.log(charArray);

// Replace the first instance of "no" with "yes" in a string
var reply = "Your original reply with 'no'"; // Replace with the actual reply string
var revisedReply = reply.replace("no", "yes");

console.log(revisedReply);

//16. In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.

var str = "YourStringWith1"; // Replace "YourStringWith1" with the actual string
var newStr = str.replace("1", "one");

console.log(newStr);

//In this example:

// str is the original string.
// newStr is the variable that will hold the revised string after replacing the first instance of "1" with "one".
// The replace method is used to perform the replacement.
// After running this code, newStr will contain the revised string with the first instance of "1" replaced by "one".

//17. If you want all instances replaced, enter 3 characters that need to appear in this statement.var y = x.replace("a", "z");

var x = "banana";
var y = x.replace(/a/g, "z");
console.log(y); // "bznznz"

//In the above example,
// the /g flag replaces all instances of the varter “a” with the varter “z” in the string “banana”.

// In your case, you can replace all instances of the varter “a” with the varter “z” in the string “x” by using the following code:

//Chapter 26 (Rounding Numbers)

//1. Form a statement that rounds a number to the nearest integer

var originalNumber = 5.67;
var roundedNumber = Math.round(originalNumber);

console.log("Rounded Number: " + roundedNumber);

//In this example, Math.round() is used to round the originalNumber to the nearest integer, and the result is stored in the roundedNumber variable. The output will be:

//2. Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

var origNum = 5.67;
var roundNum = Math.ceil(origNum);

console.log("Original Number: " + origNum);
console.log("Rounded Up Number: " + roundNum);

//In this example, Math.ceil() is used to round origNum up to the nearest integer,

//3. Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand

var origNum = 5.67;
var roundNum = Math.floor(origNum);

console.log("Original Number: " + origNum);
console.log("Rounded Down Number: " + roundNum);

//In this example, Math.floor() is used to round origNum down to the nearest integer, and the result is stored in the roundNum variable.

//4. Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.

var origNum = 5.67;
var roundedNum = Math.round(origNum);

console.log("Original Number: " + origNum);
console.log("Rounded Number: " + roundedNum);

//In this example, the origNum is rounded to the nearest integer using Math.round(), and the result is stored in the roundedNum variable

//5. Round .5 to 0 and assign it to a variable that hasn't been declared beforehand

var originalNumber = 0.5;
var roundedNumber = Math.floor(originalNumber);

console.log("Original Number: " + originalNumber);
console.log("Rounded Number: " + roundedNumber);

//In this example, Math.floor() is used to round originalNumber down to the nearest integer, and the result is stored in the roundedNumber variable.

//Chapter 27 (Random Numbers)

//1. Convert a random number generated by JavaScript to a number in the range 1 to 50

// Generate a random number between 0 and 1
var randomFraction = Math.random();

// Scale the random number to the range 1 to 50
var randomNumberInRange = Math.floor(randomFraction * 50) + 1;

console.log("Random Number in the Range 1 to 50: " + randomNumberInRange);

//In this example, Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). By multiplying this value by 50, you scale it to the range 0 to 50. The Math.floor() function is then used to round down to the nearest integer. Finally, adding 1 ensures that the result is in the range 1 to 50.

//2. Generate a random number and assign it to a variable that hasn't been declared beforehand.

// Generate a random number between 0 and 1
var randomNumber = Math.random();

console.log("Random Number: " + randomNumber);

//In this example, Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive), and the result is assigned to the variable randomNumber.

//3. You have to create a dice in JavaScript with the use of pseudorandom number

// Function to simulate a six-sided dice roll
function rollDice() {
  // Generate a random number between 1 and 6
  var diceResult = Math.floor(Math.random() * 6) + 1;

  return diceResult;
}

// Roll the dice and display the result
var result = rollDice();
console.log("You rolled a " + result);

//In this example, the rollDice function generates a random number between 1 and 6 using Math.random(), Math.floor(), and adding 1. The result is then printed to the console.

//4. You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number

// Function to simulate a coin toss (head or tail)
function coinToss() {
  // Generate a random number (0 or 1)
  var randomNum = Math.floor(Math.random() * 2);

  // Use the random number to determine head or tail
  var result = randomNum === 0 ? "Heads" : "Tails";

  return result;
}

// Perform the coin toss and display the result
var tossResult = coinToss();
console.log("Coin Toss Result: " + tossResult);

//Chapter 28, 29 (Converting Strings)

//1. How do you convert a string to an integer in JavaScript?

var stringNumber = "123";
var integerNumber = parseInt(stringNumber);

console.log("String: " + stringNumber);
console.log("Integer: " + integerNumber);

//2. Write a JavaScript function to convert the string "123" to an integer.

function convertStringToInteger() {
  var stringNumber = "123";
  var integerNumber = parseInt(stringNumber);

  return integerNumber;
}

// Call the function and store the result in a variable
var result = convertStringToInteger();

// Display the result
console.log("Converted Integer: " + result);

//3. How can you convert a string containing a decimal number to a floating-point number in JavaScript?

var stringDecimal = "123.45";
var floatNumber = parseFloat(stringDecimal);

console.log("String: " + stringDecimal);
console.log("Floating-point Number: " + floatNumber);

//In this example, parseFloat() is used to convert the string "123.45" to the floating-point number 123.45. The resulting floating-point number is stored in the floatNumber variable, and both the original string and the converted floating-point number are printed to the console.

// Similar to parseInt(), parseFloat() parses the string until it encounters a non-digit character or the end of the string. It handles decimal points and returns a floating-point number. If the string doesn't start with a valid numeric representation,

//4. How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

function isConvertibleToNumber(str) {
  // Try converting to integer
  var integerNumber = parseInt(str);
  // Check if the conversion is successful and the result is not NaN
  var isInteger = !isNaN(integerNumber);

  // Try converting to float
  var floatNumber = parseFloat(str);
  // Check if the conversion is successful and the result is not NaN
  var isFloat = !isNaN(floatNumber);

  // Return true if either integer or float conversion is successful
  return isInteger || isFloat;
}

// Test the function with different strings
console.log(isConvertibleToNumber("123")); // true (can be converted to integer)
console.log(isConvertibleToNumber("123.45")); // true (can be converted to float)
console.log(isConvertibleToNumber("abc")); // false (contains non-numeric characters)
console.log(isConvertibleToNumber("12.34.56")); // false (invalid float format)

//In this example, the isConvertibleToNumber function takes a string as an argument, attempts to convert it to both an integer and a float using parseInt() and parseFloat(), and checks if the conversion results are not NaN. If either the integer or float conversion is successful, the function returns true; otherwise, it returns false.

//5. How can you convert a number to a string in JavaScript?

var number = 123;
var stringNumber = number.toString();

console.log("Number: " + number);
console.log("String: " + stringNumber);

//6. Write a JavaScript function to convert the number 42 to a string.

function convertNumberToString() {
  var number = 42;
  var stringNumber = number.toString();
  return stringNumber;
}

// Call the function and store the result in a variable
var result = convertNumberToString();

// Display the result
console.log("Converted String: " + result);

//7. Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?

var decimalString = "3.14";
var integerNumber = parseInt(decimalString);

console.log("Decimal String: " + decimalString);
console.log("Converted Integer: " + integerNumber);

//In this example, the string "3.14" is converted to the integer 3. If you want to keep the decimal part, you would need to use parseFloat() to convert the string to a floating-point number.

//Chapter 30 (Controlling the length of decimals)

//1. Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand

var num = 12.3456789;
var newNum = num.toFixed(4).toString();

console.log("Original Number: " + num);
console.log("Rounded and Converted String: " + newNum);

//In this example, toFixed(4) is used to round the number num to 4 decimal places, and then toString() is used to convert it to a string. The resulting string is stored in the newNum variable.

//2. In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable

var num = 12.3456789;
num = Number(num.toFixed(2));

console.log("Original Number: " + num); //Original Number: 12.35

//In this example, toFixed(2) is used to round the number num to 2 decimal places, and then Number() is used to convert the resulting string back to a number. The value is assigned back to the same variable num.

//3. Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.

var num = 123.456;
var numString = num.toFixed(2).toString();
if (numString.length > 4) {
  console.log("The number has more than 4 characters.");
} else {
  console.log("The number has 4 or fewer characters.");
}

//4. Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal places and converted to a string.

var originalNumber = 123.4567890123456;

// Round to 2 decimal places and convert to a string
var roundedString = originalNumber.toFixed(2).toString();

// Display the result in an alert
alert("Rounded and Converted String: " + roundedString);

//In this example, originalNumber is assigned a number with many decimal places. The toFixed(2) method is then used to round it to 2 decimal places, and toString() converts it to a string

//Chapter 31 - 34 (Date & Time)

//1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand

var dObj = new Date();
console.log(dObj);

//2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand;
var dObj = new Date();
var dStr = dObj.toISOString();
console.log(dStr);

//3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.

var d = new Date();
var day = d.getDay();
console.log(day);

//Here, d is the Date object from which you want to extract the day of the week. The getDay() function returns the day of the week (0 to 6) of the specified date, where Sunday is 0, Monday is 1, and so on

//4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index

var d = new Date();
var day = d.getDay();

var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Alert the current day
alert("Today is: " + dayNames[day]);

//In this code snippet, d.getDay() retrieves the day of the week as a number, and dayNames[day] accesses the corresponding day name from the dayNames array.

//5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand

var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

//6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand

var later = new Date(2020, 11, 31); // Month is zero-indexed, so 11 represents December
console.log(later);

//7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand

var myDate = new Date(1992, 1, 2); // Month is zero-indexed, so 1 represents February
console.log(myDate);

//8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980

alert(new Date(1980, 0, 1).getTime());

//In this code snippet:

// new Date(1980, 0, 1) creates a Date object representing the beginning of 1980. The month is zero-indexed, so 0 represents January. getTime() is then called on the Date object to get the timestamp in milliseconds. The result is passed to alert() to display it in an alert box.

//9. How do you change the year of a date in JavaScript?

// Create a Date object
var myDate = new Date();

// Change the year to 2023
myDate.setFullYear(2023);
console.log(myDate);

//10. Write a JavaScript function to change the month of a given date to January.

function changeMonthToJanuary(date) {
  return new Date(date.getFullYear(), 0, date.getDate());
}

const date = new Date("2023-12-31");
const newDate = changeMonthToJanuary(date);
console.log(newDate);

//11. What is the method to change the day of the week for a specific date in JavaScript?

const date = new Date("2023-12-31");
date.setDate(date.getDate() + (1 - date.getDay()));
console.log(date);

//12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

function changeMinutes(time, newMinutes) {
  var newTime = new Date(time);
  newTime.setMinutes(newMinutes);
  return newTime;
}

var time = "2024-01-03T22:45:54.000Z";
var newTime = changeMinutes(time, 30);
console.log(newTime);

//13. Write a JavaScript function to add a specific number of hours to a given time.

function addHours(time, hours) {
  var newTime = new Date(time);
  newTime.setHours(newTime.getHours() + hours);
  return newTime;
}

var time = "2024-01-03T22:45:54.000Z";
var newTime = addHours(time, 3);
console.log(newTime);

//14. You have to create a age calculator in JavaScript.

function calculateAge(dateOfBirth) {
  var today = new Date();
  var birthDate = new Date(dateOfBirth);
  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
var age = calculateAge("1972-05-12");
console.log(age);

//=The function takes one parameter: dateOfBirth, which is the date of birth of the person. It should be a valid date string.
// =The function creates two new Date objects: today and birthDate. today represents the current date and time, while birthDate represents the date of birth of the person.
// =The function calculates the difference between the current year and the year of birth using today.getFullYear() - birthDate.getFullYear(). This gives us the age of the person in years.
// =The function then calculates the difference between the current month and the month of birth using today.getMonth() - birthDate.getMonth(). If the difference is negative or if the difference is zero and the current date is less than the date of birth, then the age is decremented by 1. This is because the person has not yet had their birthday this year.
// =The function returns the age of the person in years.
