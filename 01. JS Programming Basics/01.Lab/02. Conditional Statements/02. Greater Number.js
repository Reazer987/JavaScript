function biggestNum(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);


    if (a > b) {
        console.log(a);
    }
    else if (b>=a) {
        console.log(b);
        
    }
    
}
biggestNum(["-5", "5"]);