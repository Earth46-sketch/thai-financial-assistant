function calculateFinance() {

  const income =
    parseFloat(
      document.getElementById("incomeInput").value
    ) || 0;

  const expense =
    parseFloat(
      document.getElementById("expenseInput").value
    ) || 0;

  // Save Data
  localStorage.setItem(
    "income",
    income
  );

  localStorage.setItem(
    "expense",
    expense
  );

  const annualIncome = income * 12;

  let estimatedTax = 0;

  if (annualIncome > 150000) {

    estimatedTax =
      (annualIncome - 150000) * 0.05;
  }

  const monthlyTax =
    estimatedTax / 12;

  const cashflow =
    income - expense - monthlyTax;

  document.getElementById(
    "incomeDisplay"
  ).innerText =
    income.toLocaleString() + " ฿";

  document.getElementById(
    "expenseDisplay"
  ).innerText =
    expense.toLocaleString() + " ฿";

  document.getElementById(
    "taxDisplay"
  ).innerText =
    Math.round(monthlyTax).toLocaleString() + " ฿";

  document.getElementById(
    "cashflowDisplay"
  ).innerText =
    Math.round(cashflow).toLocaleString() + " ฿";
}

// Load Saved Data
window.onload = function () {

  const savedIncome =
    localStorage.getItem("income");

  const savedExpense =
    localStorage.getItem("expense");

  if (savedIncome) {

    document.getElementById(
      "incomeInput"
    ).value = savedIncome;
  }

  if (savedExpense) {

    document.getElementById(
      "expenseInput"
    ).value = savedExpense;
  }

  calculateFinance();
};

console.log(
  "Financial System Started"
);