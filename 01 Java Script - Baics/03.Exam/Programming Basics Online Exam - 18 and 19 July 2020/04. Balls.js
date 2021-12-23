function Balls(input) {
    let numberOfBalls = parseInt(input[0]);
    let totalPoints = 0;
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let whiteCount = 0;
    let blackCount = 0;
    let others = 0;

    for (let i = 1; i <= numberOfBalls; i++) {
        let ballCoulour = input[i]

        if (ballCoulour === "red") {
            totalPoints += 5;
            redCount++;

        } else if (ballCoulour === "orange") {
            totalPoints += 10;
            orangeCount++;

        } else if (ballCoulour === "yellow") {
            totalPoints += 15;
            yellowCount++;

        } else if (ballCoulour === "white") {
            totalPoints += 20;
            whiteCount++;

        } else if (ballCoulour === "black") {
            
           totalPoints = Math.floor(totalPoints /= 2);
            blackCount++;

        } else {
            others++;
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redCount}`);
    console.log(`Orange balls: ${orangeCount}`);
    console.log(`Yellow balls: ${yellowCount}`);
    console.log(`White balls: ${whiteCount}`);
    console.log(`Other colors picked: ${others}`);
    console.log(`Divides from black balls: ${blackCount}`)
}

Balls(["3",
"white",
"black",
"pink"])
