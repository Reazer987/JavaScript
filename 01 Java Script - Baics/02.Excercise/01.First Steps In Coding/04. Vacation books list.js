function depo(input) {
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let reading = (pagesCount/pagesPerHour);
    let result = (reading/days);
    console.log(result);
}
depo(["212",
"20",
"2"])

