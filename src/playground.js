export const evenOrOdd = (number) => {
    if (number % 2 === 0) {
    return 'Even' 
    } else {
        return "Odd"
    }
}

// export const multiply = (num1, num2) => {
//     let number = 0;
//     for (let i = 0; i < num1; i++){
//         number += num2
//     }
//     return number;
// }

export const multiply = (num1, num2) => num1 * num2;