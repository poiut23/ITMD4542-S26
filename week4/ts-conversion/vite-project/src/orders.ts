// Demo file for TypeScript conversion
// This file has several issues that TypeScript will catch

interface Item {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  items: Item[];
  taxRate: number;
}

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

interface UserInfo {
  fullName: string;
  age: number;
  email: string;
}

interface ProcessedOrder {
  orderId: string;
  total: number;
  formattedTotal: string;
}

export function calculateTotal(items: Item[], taxRate: number) {
  let total = 0;

  for (let item of items) {
    total += item.price * item.quantity;
  }

  return total + total * taxRate;
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function getUserInfo(user: User): UserInfo {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
    email: user.email,
  };
}

export function processOrder(order: Order): ProcessedOrder {
  const total = calculateTotal(order.items, order.taxRate);
  const formatted = formatCurrency(total);

  console.log(`Order total: ${formatted}`);

  return {
    orderId: order.id,
    total: total,
    formattedTotal: formatted,
  };
}

// Usage examples that would work in JS but have implicit any types
const myOrder = {
  id: "ORD-001",
  items: [
    { name: "Widget", price: 10.99, quantity: 2 },
    { name: "Gadget", price: 25.5, quantity: 1 },
  ],
  taxRate: 0.08,
};

processOrder(myOrder);
