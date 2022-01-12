function animalFood(input) {
    let dogCount = Number(input[0])*2.50;
    let otherAnumals = Number(input[1])*4;
    let total = dogCount+otherAnumals;
    console.log(`${total} lv.`)
  
}
animalFood(["5", "4"]);