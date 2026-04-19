import type { Order, OrderStatus } from "@/types";

const statuses: OrderStatus[] = ["pending", "processing", "shipped", "delivered", "cancelled"];

const customers = [
  { name: "Alice Johnson", email: "alice@example.com" },
  { name: "Bob Martinez", email: "bob@example.com" },
  { name: "Carol White", email: "carol@example.com" },
  { name: "David Lee", email: "david@example.com" },
  { name: "Eva Brown", email: "eva@example.com" },
  { name: "Frank Wilson", email: "frank@example.com" },
  { name: "Grace Kim", email: "grace@example.com" },
  { name: "Henry Chen", email: "henry@example.com" },
  { name: "Isabel Davis", email: "isabel@example.com" },
  { name: "James Taylor", email: "james@example.com" },
];

function randomDate(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  return date.toISOString();
}

export const orders: Order[] = Array.from({ length: 50 }, (_, i) => {
  const customer = customers[i % customers.length];
  return {
    id: `ORD-${String(i + 1).padStart(4, "0")}`,
    customerName: customer.name,
    customerEmail: customer.email,
    status: statuses[i % statuses.length],
    total: Math.round((Math.random() * 480 + 20) * 100) / 100,
    items: Math.floor(Math.random() * 8) + 1,
    createdAt: randomDate(90),
  };
}).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
