export const transformItemResult = (item): ItemResult => {
  const { id, title, price, currency_id, thumbnail, condition, shipping } =
    item;
  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimals: price,
    },
    picture: thumbnail,
    condition,
    free_shipping: shipping.free_shipping,
  };
};
