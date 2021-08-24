function shop(input) {
    let tripPrize = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);
     
    let totalSum = puzzelCount*2.60+dollsCount*3+bearsCount*4.10+minionsCount*8.20+truckCount*2;
    let totalToys = puzzelCount+dollsCount+bearsCount+minionsCount+truckCount;

    if (totalToys>=50) {
        totalSum-=totalSum*0.25;
        
    }

    totalSum-=totalSum*0.10;

    if (totalSum >= tripPrize) {
        let res = totalSum-tripPrize;
        console.log(`Yes! ${res.toFixed(2)} lv left.`);
        
    }
    else{
        let res = tripPrize-totalSum;

        console.log(`Not enough money! ${res.toFixed(2)} lv needed.`);
   
}
}
shop(["320", "8", "2", "5", "5", "1"]);



