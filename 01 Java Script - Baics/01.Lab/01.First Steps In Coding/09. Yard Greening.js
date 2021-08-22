function calculateArea(input) {
    let fieldToBecomeGreen = Number(input[0])*7.61;
    let discount = fieldToBecomeGreen*0.18;
    let total = fieldToBecomeGreen-discount;
    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
calculateArea(["550"])