const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("en-US");

export function formatCurrency(value: number): string {
  return currency.format(value);
}

export function formatNumber(value: number): string {
  return number.format(value);
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(decimals)}%`;
}

export function formatChange(value: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}
