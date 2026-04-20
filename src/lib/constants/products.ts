import type { ProductCategory } from "@/types";

export const CATEGORY_CONFIG: Record<ProductCategory, { label: string; className: string }> = {
  electronics: { label: "Electronics", className: "bg-blue-100 text-blue-700 border-blue-200" },
  clothing:    { label: "Clothing",    className: "bg-purple-100 text-purple-700 border-purple-200" },
  food:        { label: "Food",        className: "bg-green-100 text-green-700 border-green-200" },
  furniture:   { label: "Furniture",   className: "bg-amber-100 text-amber-700 border-amber-200" },
  sports:      { label: "Sports",      className: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  other:       { label: "Other",       className: "bg-gray-100 text-gray-600 border-gray-200" },
};

export const CATEGORY_OPTIONS = [
  { label: "All categories", value: "" },
  { label: "Electronics",    value: "electronics" },
  { label: "Clothing",       value: "clothing" },
  { label: "Food",           value: "food" },
  { label: "Furniture",      value: "furniture" },
  { label: "Sports",         value: "sports" },
  { label: "Other",          value: "other" },
];

export const LOW_STOCK_THRESHOLD = 20;
