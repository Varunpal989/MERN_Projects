let age = 45;
let gender = 'female';
let finalDiscount;

if(age <= 5){
    finalDiscount = 100;
}

else if(gender === 'female'){
    finalDiscount = 50;
}
else if(age <=8){
    finalDiscount = 50;
}
else if(age >= 65){
    finalDiscount = 30;
}
else{
    finalDiscount = 0;
}

console.log(`your final discount is ${finaldiscount}` )

