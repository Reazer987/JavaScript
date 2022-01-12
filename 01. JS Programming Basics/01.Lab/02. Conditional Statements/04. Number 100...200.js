function numberSize(input) {
    let a = Number(input[0]);

    if (a < 100) {
        console.log("Less than 100");
    }
    else if (a >= 100 && a <= 200 ) {
        console.log("Between 100 and 200");

    }
    else if (a > 200) {
        console.log("Greater than 200");
    }

}
numberSize(["-1200"]);

