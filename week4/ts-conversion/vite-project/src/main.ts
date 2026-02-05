import {
  calculateTotal,
  formatCurrency,
  getUserInfo,
  processOrder,
} from "./orders.ts";

// Test calculateTotal
const items = [
  { name: "Widget", price: 10.99, quantity: 2 },
  { name: "Gadget", price: 25.5, quantity: 1 },
];
const total = calculateTotal(items, 0.08);
const calculateTotalDiv = document.getElementById("calculate-total");
if (calculateTotalDiv) {
  calculateTotalDiv.innerHTML = `
      <div class="item">Items: ${items.map((item) => `${item.name} ($${item.price} x ${item.quantity})`).join(", ")}</div>
      <div class="item">Tax Rate: 8%</div>
      <div class="result">Total: $${total.toFixed(2)}</div>
    `;
}

// Test formatCurrency
const amounts = [100, 1234.56, 0.99];
document.getElementById("format-currency")!.innerHTML = amounts
  .map(
    (amount) => `<div class="item">${amount} → ${formatCurrency(amount)}</div>`,
  )
  .join("");

// Test getUserInfo
const user = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  email: "jane.doe@example.com",
};
const userInfo = getUserInfo(user);
(document.getElementById("user-info") as HTMLElement).innerHTML = `
      <div class="item">Input: ${JSON.stringify(user, null, 2).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;")}</div>
      <div class="result">
        Full Name: ${userInfo.fullName}<br>
        Age: ${userInfo.age}<br>
        Email: ${userInfo.email}
      </div>
    `;

// Test processOrder
const order = {
  id: "ORD-001",
  items: items,
  taxRate: 0.08,
};
const orderResult = processOrder(order);
const processOrderDiv = document.getElementById("process-order");
if (!processOrderDiv) throw new Error("Element not found");

processOrderDiv.innerHTML = `
      <div class="item">Order ID: ${order.id}</div>
      <div class="item">Items: ${order.items.length}</div>
      <div class="result">
        Order ID: ${orderResult.orderId}<br>
        Total: $${orderResult.total.toFixed(2)}<br>
        Formatted: ${orderResult.formattedTotal}
      </div>
    `;
