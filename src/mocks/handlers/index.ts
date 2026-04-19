import { ordersHandlers } from "./orders";
import { productsHandlers } from "./products";
import { salesHandlers } from "./sales";
import { performanceHandlers } from "./performance";

export const handlers = [
  ...salesHandlers,
  ...ordersHandlers,
  ...productsHandlers,
  ...performanceHandlers,
];
