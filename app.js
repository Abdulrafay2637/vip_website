let totalExpenses = 0;

function addExpense() {
    let name = document.getElementById("expense-name").value;
    let amount = parseFloat(document.getElementById("expense-amount").value);
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }
    
    let expenseList = document.getElementById("expense-list");
    let expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    
    expenseItem.innerHTML = `
        <span>${name}: $${amount.toFixed(2)}</span>
        <button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button>
    `;
    
    expenseList.appendChild(expenseItem);
    totalExpenses += amount;
    document.getElementById("total-expenses").innerText = totalExpenses.toFixed(2);
    
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
}

function deleteExpense(element, amount) {
    element.parentElement.remove();
    totalExpenses -= amount;
    document.getElementById("total-expenses").innerText = totalExpenses.toFixed(2);
}
