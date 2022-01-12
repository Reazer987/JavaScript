function radiansToDegree(input) {
    let radians = Number(input[0]);
    let result = (radians*180)/Math.PI;
    console.log(result.toFixed(0))
    
}
radiansToDegree(["3.1416"]);