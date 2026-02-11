function calculateEA() {
  const premium = document.getElementById("premium").value;
  const term = document.getElementById("term").value;
  const result = document.getElementById("result");

  if (premium === "" || term === "") {
    result.innerHTML = "❌ Please enter all values";
    return;
  }

  const yearly = premium * 12;
  const total = yearly * term;

  result.innerHTML = `✅ Expected Amount: ₹ ${total.toLocaleString()}`;
}
