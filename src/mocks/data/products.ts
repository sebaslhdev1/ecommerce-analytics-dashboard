import type { Product, ProductCategory } from "@/types";

export const products: Product[] = [
  { id: "PRD-001", name: "Wireless Headphones", category: "electronics", price: 129.99, stock: 45, sold: 312, revenue: 40556.88 },
  { id: "PRD-002", name: "Running Shoes", category: "sports", price: 89.99, stock: 78, sold: 245, revenue: 22047.55 },
  { id: "PRD-003", name: "Denim Jacket", category: "clothing", price: 69.99, stock: 34, sold: 198, revenue: 13858.02 },
  { id: "PRD-004", name: "Coffee Maker", category: "electronics", price: 59.99, stock: 12, sold: 421, revenue: 25255.79 },
  { id: "PRD-005", name: "Yoga Mat", category: "sports", price: 34.99, stock: 92, sold: 534, revenue: 18684.66 },
  { id: "PRD-006", name: "Desk Lamp", category: "furniture", price: 44.99, stock: 67, sold: 178, revenue: 8008.22 },
  { id: "PRD-007", name: "Protein Powder", category: "food", price: 49.99, stock: 23, sold: 389, revenue: 19446.11 },
  { id: "PRD-008", name: "Mechanical Keyboard", category: "electronics", price: 149.99, stock: 19, sold: 156, revenue: 23398.44 },
  { id: "PRD-009", name: "Winter Coat", category: "clothing", price: 199.99, stock: 8, sold: 87, revenue: 17399.13 },
  { id: "PRD-010", name: "Blender", category: "electronics", price: 79.99, stock: 41, sold: 263, revenue: 21037.37 },
  { id: "PRD-011", name: "Basketball", category: "sports", price: 29.99, stock: 115, sold: 302, revenue: 9057.98 },
  { id: "PRD-012", name: "Office Chair", category: "furniture", price: 299.99, stock: 5, sold: 64, revenue: 19199.36 },
  { id: "PRD-013", name: "Green Tea Pack", category: "food", price: 14.99, stock: 200, sold: 712, revenue: 10672.88 },
  { id: "PRD-014", name: "Smartwatch", category: "electronics", price: 249.99, stock: 28, sold: 134, revenue: 33498.66 },
  { id: "PRD-015", name: "Linen T-Shirt", category: "clothing", price: 24.99, stock: 143, sold: 489, revenue: 12220.11 },
];

export const productCategories: ProductCategory[] = [
  "electronics", "clothing", "food", "furniture", "sports", "other",
];
