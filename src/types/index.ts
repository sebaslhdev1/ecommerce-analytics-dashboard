export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export type ProductCategory = "electronics" | "clothing" | "food" | "furniture" | "sports" | "other";

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  total: number;
  items: number;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  sold: number;
  revenue: number;
  imageUrl?: string;
}

export interface SalesStat {
  date: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
}

export interface KpiCard {
  title: string;
  value: number | string;
  change: number;
  changeLabel: string;
}

export interface PerformanceStat {
  date: string;
  conversionRate: number;
  returningCustomers: number;
  newCustomers: number;
  avgSessionValue: number;
}

export interface TopProduct {
  id: string;
  name: string;
  revenue: number;
  units: number;
  trend: number;
}

export interface ApiResponse<T> {
  data: T;
  total?: number;
  page?: number;
  pageSize?: number;
}
