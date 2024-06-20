// Пакування товарів

function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;

  for (const product in products) {
    totalQuantity += products[product];
  }

  return totalQuantity <= containerSize;
}
