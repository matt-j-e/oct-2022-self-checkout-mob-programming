const { scanItem, addItem, getTotal, removeItem } = require("../src/checkout");
const { apple, banana, orange, catalogue } = require("../test-data");

describe("scanItem", () => {
  it("returns the item when passed a barcode", () => {
    expect(scanItem(catalogue, 123)).toEqual({
      name: "apple",
      barcode: 123,
      price: 5,
    });
  });
});

describe("addItem", () => {
  const basket = [];
  it("adds the required item to the basket", () => {
    addItem(basket, apple);
    expect(basket.length).toBe(1);
  });
});

describe("getTotal", () => {
  const basket = [banana, orange];
  it("correctly adds the price of items in the basket", () => {
    expect(getTotal(basket)).toBe(13);
  });
});

describe("removeItem", () => {
  const basket = [apple, banana, orange];
  it("removes the required item from the basket", () => {
    removeItem(basket, banana);
    expect(basket).toHaveLength(2);
    expect(basket).toEqual([apple, orange]);
  });
});
