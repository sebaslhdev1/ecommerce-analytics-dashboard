"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { useProducts } from "../hooks/use-products";
import { CATEGORY_CONFIG, CATEGORY_OPTIONS, LOW_STOCK_THRESHOLD } from "@/lib/constants/products";
import { formatCurrency, formatNumber } from "@/lib/utils/formatters";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";

function StockIndicator({ stock }: { stock: number }) {
  const isLow = stock < LOW_STOCK_THRESHOLD;
  const isMedium = stock >= LOW_STOCK_THRESHOLD && stock < 50;

  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "inline-block h-2 w-2 rounded-full",
          isLow ? "bg-red-500" : isMedium ? "bg-amber-400" : "bg-emerald-500"
        )}
        aria-hidden="true"
      />
      <span className={cn("text-sm", isLow && "text-red-600 font-medium")}>
        {formatNumber(stock)}
      </span>
    </div>
  );
}

export function ProductsTable() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProductCategory | "">("");

  const { data, isLoading, isError } = useProducts({ category, search });
  const products = data?.data ?? [];

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-base">Product Catalog</CardTitle>
          <span className="text-sm text-muted-foreground">{data?.total ?? 0} products</span>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
              aria-label="Search products by name"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory | "")}
            className="h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            aria-label="Filter by category"
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {isError && <p className="p-6 text-sm text-destructive">Failed to load products.</p>}

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6">Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">Units Sold</TableHead>
                <TableHead className="pr-6 text-right">Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <TableRow key={i}>
                      {Array.from({ length: 6 }).map((_, j) => (
                        <TableCell key={j}><Skeleton className="h-4 w-full" /></TableCell>
                      ))}
                    </TableRow>
                  ))
                : products.map((product) => {
                    const cat = CATEGORY_CONFIG[product.category];
                    return (
                      <TableRow key={product.id}>
                        <TableCell className="pl-6">
                          <div>
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground font-mono">{product.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={cn(
                            "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
                            cat.className
                          )}>
                            {cat.label}
                          </span>
                        </TableCell>
                        <TableCell className="text-right text-sm font-medium">
                          {formatCurrency(product.price)}
                        </TableCell>
                        <TableCell>
                          <StockIndicator stock={product.stock} />
                        </TableCell>
                        <TableCell className="text-right text-sm">
                          {formatNumber(product.sold)}
                        </TableCell>
                        <TableCell className="pr-6 text-right text-sm font-medium">
                          {formatCurrency(product.revenue)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </div>

        {!isLoading && products.length === 0 && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No products match your filters.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
