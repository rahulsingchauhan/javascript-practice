//problem-6-Check-if-a-number-is-a-leap-year....
// •  Ek year diya gaya hai
// •  Agar year 400 se divisible hai → leap year hai
// •  Agar year 100 se divisible hai → leap year nahi hai
// •  Agar year 4 se divisible hai → leap year hai
// •  Warna → leap year nahi hai
// •  Print karo: "Leap Year" ya "Not a Leap Year"
//************************** END OF STATEMENT ****************************

let year = 2024;

if (year % 400 === 0) {
  console.log("Leap Year");
}
else if (year % 100 === 0) {
  console.log("Not a Leap Year");
}
else if (year % 4 === 0) {
  console.log("Leap Year");
}
else {
  console.log("Not a Leap Year");
}


// 2024 → divisible by 4 → ✅ Leap Year

// 1900 → divisible by 100 but not 400 → ❌ Not a Leap Year

// 2000 → divisible by 400 → ✅ Leap Year