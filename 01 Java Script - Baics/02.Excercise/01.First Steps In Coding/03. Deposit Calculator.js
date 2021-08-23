function depo(input) {
    let deposit = Number(input[0]);
    let depositInMonths = Number(input[1]);
    let percent = Number(input[2]);
let result = deposit+depositInMonths*((deposit*percent/100)/12)
    
    console.log(result);
  
}
depo(["200","3","5.7"]);
