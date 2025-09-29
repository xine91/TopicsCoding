// Recursive function to calculate factorial
function factorial(n) {
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

// Recursive function to calculate the n-th Fibonacci number
function fibonacci(n) {
	if (n <= 1) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function potenz(n, k){
    if (k === 0) {
        return 1;
    }
    return n * potenz(n, k - 1);
}

function bacteriaGrowth(n, days){
    if (days === 0) {
        return n;
    }
    return n * 1.2 + bacteriaGrowth(n, days - 1);
}


// Factorial using a for loop
function factorial2(n) {
    let result  = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function fibonacci2(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function potenz2(n, k) {
    let result = 1;
    for (let i = 0; i < k; i++) {
        result *= n;
    }
    return result;
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Choose an operation:');
console.log('1 - Factorial');
console.log('2 - Fibonacci sequence');
console.log('3 - Power');
console.log('4 - Bacterial growth');
console.log('5 - For loop Factorial');
rl.question('Enter 1, 2, 3, 4 or 5: ', (choice) => {
	if (choice === '1') {
		rl.question('Enter a number to calculate factorial: ', (input) => {
			const number = parseInt(input);
			if (isNaN(number) || number < 0) {
				console.log('Please enter a non-negative integer.');
			} else {
				console.log(`Factorial of ${number} = ${factorial(number)}`);
			}
			rl.close();
		});
	} else if (choice === '2') {
		rl.question('Enter the index of Fibonacci sequence: ', (input) => {
			const number = parseInt(input);
			if (isNaN(number) || number < 0) {
				console.log('Please enter a non-negative integer.');
			} else {
				console.log(`F(${number}) = ${fibonacci(number)}`);
			}
			rl.close();
		});
    } else if (choice === '3') {
        rl.question('Enter the base number: ', (baseInput) => {
            const base = parseFloat(baseInput);
            rl.question('Enter the exponent: ', (expInput) => {
                const exponent = parseInt(expInput);
                if (isNaN(base) || isNaN(exponent) || exponent < 0) {
                    console.log('Please enter a valid base and a non-negative integer exponent.');
                } else {
                    console.log(`${base}^${exponent} = ${potenz(base, exponent)}`);
                }
                rl.close();
            });
        });
    } else if (choice === '4') {
        rl.question('Enter the initial number of bacteria: ', (bacteriaInput) => {
            const initialBacteria = parseFloat(bacteriaInput);  
            rl.question('Enter the number of days: ', (daysInput) => {
                const days = parseInt(daysInput);
                if (isNaN(initialBacteria) || isNaN(days) || days < 0) {
                    console.log('Please enter a valid number of bacteria and a non-negative integer for days.');
                } else {
                    console.log(`Bacterial growth after ${days} days: ${bacteriaGrowth(initialBacteria, days)}`);
                }
                rl.close();
            });
        });
    } else if (choice === '5') {
        rl.question('Enter a number to calculate factorial: ', (input) => {
            const number = parseInt(input);
            if (isNaN(number) || number < 0) {
                console.log('Please enter a non-negative integer.');
            } else {
                console.log(`Factorial of ${number} = ${factorial2(number)}`);
            }
            rl.close();
        });
    } else {
        console.log('Invalid choice. Please restart the program.');
        rl.close();
    }
});