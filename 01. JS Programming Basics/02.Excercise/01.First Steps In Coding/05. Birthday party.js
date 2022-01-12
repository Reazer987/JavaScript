function party(input) {
    let salaray = Number(input[0]);
    let cakePrice = salaray*0.20;
    let drinksPrice = cakePrice - cakePrice*0.45;
    let animatorPrice = salaray*(1/3);
    let result = salaray+cakePrice+drinksPrice+animatorPrice;
    console.log(result.toFixed(1));
    
}
party(["2250"]);