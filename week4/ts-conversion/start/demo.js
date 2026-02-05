// Demo file for TypeScript conversion
// This file has several issues that TypeScript will catch

export function calculateTotal(items, taxRate) {
  let total = 0;
  
  for (let item of items) {
    total += item.price * item.quantity;
  }
  
  return total + (total * taxRate);
}

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export function getUserInfo(user) {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
    email: user.email
  };
}

export function processOrder(order) {
  const total = calculateTotal(order.items, order.taxRate);
  const formatted = formatCurrency(total);
  
  console.log(`Order total: ${formatted}`);
  
  return {
    orderId: order.id,
    total: total,
    formattedTotal: formatted
  };
}

// Usage examples that would work in JS but have implicit any types
const myOrder = {
  id: "ORD-001",
  items: [
    { name: "Widget", price: 10.99, quantity: 2 },
    { name: "Gadget", price: 25.50, quantity: 1 }
  ],
  taxRate: 0.08
};

const result = processOrder(myOrder);
