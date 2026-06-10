function calculateThaiTax(taxableIncome) {

  let tax = 0;

  if (taxableIncome <= 150000) {

    tax = 0;

  } else if (taxableIncome <= 300000) {

    tax =
      (taxableIncome - 150000) * 0.05;

  } else if (taxableIncome <= 500000) {

    tax =
      (150000 * 0.05) +
      ((taxableIncome - 300000) * 0.10);

  } else if (taxableIncome <= 750000) {

    tax =
      (150000 * 0.05) +
      (200000 * 0.10) +
      ((taxableIncome - 500000) * 0.15);

  } else if (taxableIncome <= 1000000) {

    tax =
      (150000 * 0.05) +
      (200000 * 0.10) +
      (250000 * 0.15) +
      ((taxableIncome - 750000) * 0.20);

  } else if (taxableIncome <= 2000000) {

    tax =
      (150000 * 0.05) +
      (200000 * 0.10) +
      (250000 * 0.15) +
      (250000 * 0.20) +
      ((taxableIncome - 1000000) * 0.25);

  } else if (taxableIncome <= 5000000) {

    tax =
      (150000 * 0.05) +
      (200000 * 0.10) +
      (250000 * 0.15) +
      (250000 * 0.20) +
      (1000000 * 0.25) +
      ((taxableIncome - 2000000) * 0.30);

  } else {

    tax =
      (150000 * 0.05) +
      (200000 * 0.10) +
      (250000 * 0.15) +
      (250000 * 0.20) +
      (1000000 * 0.25) +
      (3000000 * 0.30) +
      ((taxableIncome - 5000000) * 0.35);

  }

  return tax;
}

function calculateFinance() {

  const salary =
    parseFloat(
      document.getElementById("salaryInput").value
    ) || 0;

  const bonusMonths =
    parseFloat(
      document.getElementById("bonusInput").value
    ) || 0;

  const monthsWorked =
    parseFloat(
      document.getElementById("monthsInput").value
    ) || 0;

  const expense =
    parseFloat(
      document.getElementById("expenseInput").value
    ) || 0;

  const lifeInsurance =
    parseFloat(
      document.getElementById("lifeInsuranceInput").value
    ) || 0;

  const ssf =
    parseFloat(
      document.getElementById("ssfInput").value
    ) || 0;

  const rmf =
    parseFloat(
      document.getElementById("rmfInput").value
    ) || 0;

  const provident =
    parseFloat(
      document.getElementById("providentInput").value
    ) || 0;

  const annualSalary =
    salary * monthsWorked;

  const annualBonus =
    salary * bonusMonths;

  const grossIncome =
    annualSalary + annualBonus;

  const personalDeduction = 60000;

  const socialSecurity =
    Math.min(salary * 0.05, 750) *
    monthsWorked;

  const deductions =
    personalDeduction +
    socialSecurity +
    lifeInsurance +
    ssf +
    rmf +
    provident;

  const taxableIncome =
    Math.max(
      grossIncome - deductions,
      0
    );

  const annualTax =
    calculateThaiTax(
      taxableIncome
    );
    const suggestedSSF = 20000;

const newTaxableIncome =
Math.max(
taxableIncome - suggestedSSF,
0
);

const newTax =
calculateThaiTax(
newTaxableIncome
);

const taxSaving =
annualTax - newTax;

  const monthlyTax =
    annualTax / 12;

  const cashflow =
    salary -
    expense -
    monthlyTax;

  document.getElementById(
    "incomeDisplay"
  ).innerText =
    grossIncome.toLocaleString() +
    " ฿";

  document.getElementById(
    "deductionDisplay"
  ).innerText =
    deductions.toLocaleString() +
    " ฿";

  document.getElementById(
    "taxableDisplay"
  ).innerText =
    taxableIncome.toLocaleString() +
    " ฿";

  document.getElementById(
    "taxDisplay"
  ).innerText =
    Math.round(annualTax)
      .toLocaleString() +
    " ฿";

  document.getElementById(
    "cashflowDisplay"
  ).innerText =
    Math.round(cashflow)
      .toLocaleString() +
    " ฿";
    document.getElementById(
"savingDisplay"
).innerText =
Math.round(taxSaving)
.toLocaleString() +
" ฿";

  localStorage.setItem(
    "salary",
    salary
  );

  localStorage.setItem(
    "bonusMonths",
    bonusMonths
  );

  localStorage.setItem(
    "monthsWorked",
    monthsWorked
  );

  localStorage.setItem(
    "expense",
    expense
  );

  localStorage.setItem(
    "lifeInsurance",
    lifeInsurance
  );

  localStorage.setItem(
    "ssf",
    ssf
  );

  localStorage.setItem(
    "rmf",
    rmf
  );

  localStorage.setItem(
    "provident",
    provident
  );
}

window.onload = function () {

  document.getElementById(
    "salaryInput"
  ).value =
    localStorage.getItem("salary") || "";

  document.getElementById(
    "bonusInput"
  ).value =
    localStorage.getItem("bonusMonths") || "";

  document.getElementById(
    "monthsInput"
  ).value =
    localStorage.getItem("monthsWorked") || "";

  document.getElementById(
    "expenseInput"
  ).value =
    localStorage.getItem("expense") || "";

  document.getElementById(
    "lifeInsuranceInput"
  ).value =
    localStorage.getItem("lifeInsurance") || "";

  document.getElementById(
    "ssfInput"
  ).value =
    localStorage.getItem("ssf") || "";

  document.getElementById(
    "rmfInput"
  ).value =
    localStorage.getItem("rmf") || "";

  document.getElementById(
    "providentInput"
  ).value =
    localStorage.getItem("provident") || "";

  calculateFinance();
};