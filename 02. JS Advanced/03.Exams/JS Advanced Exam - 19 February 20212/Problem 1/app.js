function solve() {
  let fnameElement = document.getElementById("fname");
  let lnameElement = document.getElementById("lname");
  let emailElement = document.getElementById("email");
  let birthElement = document.getElementById("birth");
  let positionElement = document.getElementById("position");
  let salaryElement = document.getElementById("salary");
  let totalSum = document.getElementById("sum");

  let hireWorkerBtn = document.getElementById("add-worker");
  let tableBody = document.getElementById("tbody");
  let totalSumCount = 0;
  hireWorkerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let fname = fnameElement.value;
    let lname = lnameElement.value;
    let email = emailElement.value;
    let birth = birthElement.value;
    let position = positionElement.value;
    let salary = Number(salaryElement.value);

    fnameKeep = fnameElement.value;
    lnameKeep = lnameElement.value;
    emailKeep = emailElement.value;
    birthKeep = birthElement.value;
    positionKeep = positionElement.value
    salaryKeep = salaryElement.value



    if (
      fnameElement.value == "" &&
      lnameElement.value == "" &&
      emailElement.value == "" &&
      birthElement.value == "" &&
      positionElement.value == "" &&
      salaryElement.value == ""
    ) {
      return;
    }
    let tr = document.createElement("tr");

    let fnameTd = document.createElement("td");
    fnameTd.textContent = fname;

    let lnameTd = document.createElement("td");
    lnameTd.textContent = lname;

    let emailTd = document.createElement("td");
    emailTd.textContent = email;

    let birthTd = document.createElement("td");
    birthTd.textContent = birth;

    let positionTd = document.createElement("td");
    positionTd.textContent = position;

    let salaryTd = document.createElement("td");
    salaryTd.textContent = salary;

    let actionsTd = document.createElement("td");

    let fireBtn = document.createElement("button");
    fireBtn.className = "fired";
    fireBtn.textContent = "Fired";

    let editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "Edit";

    actionsTd.appendChild(fireBtn);
    actionsTd.appendChild(editBtn);

    tr.appendChild(fnameTd);
    tr.appendChild(lnameTd);
    tr.appendChild(emailTd);
    tr.appendChild(birthTd);
    tr.appendChild(positionTd);
    tr.appendChild(salaryTd);
    tr.appendChild(actionsTd);
    tableBody.appendChild(tr);

    fnameElement.value = "";
    lnameElement.value = "";
    emailElement.value = "";
    birthElement.value = "";
    positionElement.value = "";
    salaryElement.value = "";

    totalSumCount += salary;
    totalSum.textContent = totalSumCount.toFixed(2);

    editBtn.addEventListener('click',(e)=>{
        let currentRow = e.currentTarget.parentNode.parentNode
        let currentRowFname  = e.currentTarget.parentNode.parentNode.children[0].textContent
        let currentRowLname  = e.currentTarget.parentNode.parentNode.children[1].textContent
        let currentRowEmail  = e.currentTarget.parentNode.parentNode.children[2].textContent
        let currentRowBirth  = e.currentTarget.parentNode.parentNode.children[3].textContent
        let currentRowPosition  = e.currentTarget.parentNode.parentNode.children[4].textContent
        let currentRowSalary  = e.currentTarget.parentNode.parentNode.children[5].textContent

        fnameElement.value = currentRowFname
        lnameElement.value = currentRowLname;
        emailElement.value = currentRowEmail;
        birthElement.value = currentRowBirth;
        positionElement.value = currentRowPosition;
        salaryElement.value = currentRowSalary
        totalSumCount-=Number(currentRowSalary)
        totalSum.textContent = totalSumCount.toFixed(2);
        tableBody.removeChild(currentRow)
    
    })
    fireBtn.addEventListener('click',(e)=>{
        let currentRow = e.currentTarget.parentNode.parentNode
        let currentRowSalary  = e.currentTarget.parentNode.parentNode.children[5].textContent

        totalSumCount-=Number(currentRowSalary)
        totalSum.textContent = totalSumCount.toFixed(2);
        tableBody.removeChild(currentRow)
    })
  });
}
solve();
