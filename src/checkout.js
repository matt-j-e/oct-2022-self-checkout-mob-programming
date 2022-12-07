const scanItem = (catalogue, barcode) => {
  return catalogue.find((item) => item.barcode === barcode);
};

const addItem = (basket, item) => {
  basket.push(item);
};

const getTotal = (basket) => {
  return basket.reduce((total, item) => (total += item.price), 0);
};

const removeItem = (basket, removedItem) => {
  const index = basket.findIndex((item) => item === removedItem);
  basket.splice(index, 1);
};

module.exports = { scanItem, addItem, getTotal, removeItem };
