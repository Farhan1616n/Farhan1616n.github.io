// Define an array of names
var names = ["John", "Jane", "Doe", "James", "Emily"];

// Function to determine greeting based on name
function sayHelloOrGoodbye(namesArray) {
    // Loop through each name in the array
    for (var i = 0; i < namesArray.length; i++) {
        var name = namesArray[i]; // Get the current name
        var firstLetter = name.charAt(0).toLowerCase(); // Get the first letter and convert to lowercase

        // Check if the first letter is 'j' or 'J'
        if (firstLetter === 'j') {
            // If it starts with 'j', print "Goodbye JSomeName"
            console.log("Goodbye " + name);
        } else {
            // Otherwise, print "Hello SomeName"
            console.log("Hello " + name);
        }
    }
}

// Call the function with the names array
sayHelloOrGoodbye(names);
