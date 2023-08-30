function fibonacci(n) {
    if (n <= 0) {
      console.log("The number must be positive.");  // Check if the number is positive
      return;
    }
    var fibSequence = [0, 1];  // Start of the Fibonacci sequence
    while (fibSequence.length < n) {
      var nextNumber = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];  // Calculate the next number in the sequence
      fibSequence.push(nextNumber);  // Add the next number to the sequence
    }
    return fibSequence.slice(0, n);  // Slice the sequence to get the first n numbers
  }
  
  // Test the function
  var num = parseInt(prompt("Please enter a positive integer: "));
  var sequence = fibonacci(num);
  if (sequence) {
    console.log("Fibonacci sequence:");
    console.log(sequence);
  }