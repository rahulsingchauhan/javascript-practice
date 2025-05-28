//problem-8-Find-the-maximum-between-three-numbers....
// •  Teen numbers diye gaye hain: a, b, c
// •  Print karo "a is greatest" agar a sabse bada ho
// •  Print karo "b is greatest" agar b sabse bada ho
// •  Print karo "c is greatest" agar c sabse bada ho
// •  Agar sab equal ho → print karo "All are equal"
//************************** END OF STATEMENT ****************************

let a = 30;
let b = 25;
let c = 20;

if(a>b && a>c){
    console.log("a is greatest");
}
else if (b>a && b>c){
    console.log("b is greatest");
}
else if (c>a && c>b){
    console.log("c is greatest");
}
else {
    console.log("All are equal")
};