//problem-9-Check-if-character-is-vowel-or-consonant....
// •  Ek character diya gaya hai (ch)
// •  Agar character vowel ho (a, e, i, o, u - lowercase ya uppercase) → print "Vowel"
// •  Warna agar alphabet ho → print "Consonant"
// •  Agar alphabet bhi na ho → print "Not an alphabet"
//************************** END OF STATEMENT ****************************

// 🧠 Hint:
// char.toLowerCase() ya char.toUpperCase() ka use kar sakte ho vowels check karne ke liye
// charCodeAt(0) se alphabet check bhi kar sakte ho (ASCII method)

// Solution 1: Using if-else with toLowerCase()


// let ch = "E";

// if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
//   let lowerChar = ch.toLowerCase();
//   if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//     console.log("Vowel");
//   } else {
//     console.log("Consonant");
//   }
// } else {
//   console.log("Not an alphabet");
// };


//Solution 2: Using includes() method with array

// let ch = "E";
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
//   if (vowels.includes(ch.toLowerCase())) {
//     console.log("Vowel");
//   } else {
//     console.log("Consonant");
//   }
// } else {
//   console.log("Not an alphabet");
// };


//Solution 3: Using RegEx to check alphabet


// let ch = "E";
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// if (/^[a-zA-Z]$/.test(ch)) {
//   if (vowels.includes(ch.toLowerCase())) {
//     console.log("Vowel");
//   } else {
//     console.log("Consonant");
//   }
// } else {
//   console.log("Not an alphabet");
// };



//Solution 4: Using switch statement

let ch = "E";
let lowerChar = ch.toLowerCase();

switch (lowerChar) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("Vowel");
    break;

  default:
    if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
      console.log("Consonant");
    } else {
      console.log("Not an alphabet");
    }
};
