//Problem 4: Check the largest of three numbers....
// •  Teen numbers diye gaye hain: a, b, c
// •  Print karo "a is the largest" agar a sabse bada ho
// •  Print karo "b is the largest" agar b sabse bada ho
// •  Print karo "c is the largest" agar c sabse bada ho
// •  Agar koi do ya teeno equal ho toh print karo "All numbers are equal" ya "Two numbers are equal" (optional challenge)
//************************** END OF STATEMENT ****************************

//Method 1 : Using If , else if , else

// let a = 10;
// let b = 25;
// let c = 15;

// if (a > b && a > c) {
//   console.log("a is the largest");
// } else if (b > a && b > c) {
//   console.log("b is the largest");
// } else if (c > a && c > b) {
//   console.log("c is the largest");
// } else {
//   console.log("Some numbers are equal");
// }

//-----------------------------------------------------Multiple Solutions-------------------------------------------------------------

// Method 2: Using Math.max()

// let a = 10, b = 25, c = 15;
// let largest = Math.max(a, b, c);
// console.log("Largest is", largest);

//-----------------------------------------------------Multiple Solutions-------------------------------------------------------------


//  Method 3: Ternary Operators

// let largest = (a > b && a > c) ? a : (b > c) ? b : c;
// console.log("Largest is", largest);
