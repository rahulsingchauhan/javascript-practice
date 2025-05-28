// problem-10-Check-whether-a-character-is-uppercase-or-lowercase
// 🧠 Statement:
// Ek character diya gaya hai. Check karo ki woh uppercase hai ya lowercase.

// 📥 Input Example:
// let ch = 'G';

// ✅ Output Example:
// Uppercase

// 🎯 Your Task:
// JavaScript ke if-else ka use karke check karo:
// • "Uppercase" agar character 'A' se 'Z' ke beech mein ho.
// • "Lowercase" agar character 'a' se 'z' ke beech mein ho.
// • "Not a letter" agar character alphabet na ho.

//************************** END OF STATEMENT ****************************

//Solution 1: Using ASCII values

let ch = 'G';

if (ch >= 'A' && ch <= 'Z') {
  console.log("Uppercase");
} else if (ch >= 'a' && ch <= 'z') {
  console.log("Lowercase");
} else {
  console.log("Not a letter");
};

//Solution 2: Using toUpperCase() and comparing

// let ch = 'H';

// if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
//   console.log("Uppercase");
// } else if (ch === ch.toLowerCase() && ch !== ch.toUpperCase()) {
//   console.log("Lowercase");
// } else {
//   console.log("Not a letter");
// }
