function Baggage(input) {
    let baggagePrice = parseFloat(input[0]);
    let baggageKg = parseFloat(input[1]);
    let daysTillTravel = parseFloat(input[2]);
    let baggageCount = parseInt(input[3]);

    if (baggageKg >= 10 && baggageKg <= 20) {
        baggagePrice /= 2;
    } else if (baggageKg > 0 && baggageKg <= 10) {
        baggagePrice *= 0.20;
    }

    if (daysTillTravel > 30) {
        baggagePrice += baggagePrice * 0.10;
    } else if (daysTillTravel >= 7 && daysTillTravel <= 30) {
        baggagePrice += baggagePrice * 0.15;
    } else if (daysTillTravel < 7) {
        baggagePrice += baggagePrice * 0.40;
    }
    let totalSum = baggagePrice * baggageCount;

    console.log(` The total price of bags is: ${totalSum.toFixed(2)} lv.`)

}

Baggage(["63.80",
"23",
"3",
"1"])





