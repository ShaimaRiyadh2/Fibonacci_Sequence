def fibonacci(n):
    if n <= 0:
        print("The number must be positive.")  # Check if the number is positive
        return
    fib_sequence = [0, 1]  # Start of the Fibonacci sequence
    while len(fib_sequence) < n:
        next_number = fib_sequence[-1] + fib_sequence[-2]  # Calculate the next number in the sequence
        fib_sequence.append(next_number)  # Add the next number to the sequence
    return fib_sequence[:n]  # Slice the sequence to get the first n numbers

# Test the function
num = int(input("Please enter a positive integer: "))
sequence = fibonacci(num)
if sequence:
    print("Fibonacci sequence:")
    print(sequence)