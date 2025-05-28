//problem-5-Check-if-a-number-is-divisible-by-5-and-11....
// •  Ek number diya gaya hai
// •  Agar woh 5 aur 11 dono se divide hota hai → print karo "Divisible by both 5 and 11"
// •  Agar sirf 5 se divide hota hai → print karo "Divisible by 5"
// •  Agar sirf 11 se divide hota hai → print karo "Divisible by 11"
// •  Agar dono se nahi hota → print karo "Not divisible by 5 or 11"
//************************** END OF STATEMENT ****************************

let num = 55;

if (num % 5 === 0 && num % 11 === 0) {
  console.log("Divisible by both 5 and 11");
}
else if (num % 5 === 0) {
  console.log("Divisible by 5");
}
else if (num % 11 === 0) {
  console.log("Divisible by 11");
}
else {
  console.log("Not divisible by 5 or 11");
};


// % remainder deta hai → 0 ka matlab hai poori tarah divisible

// && dono condition true honi chahiye

// || kisi ek condition ke true hone se kaam ho jaata hai