export const transformItemDetail = (item, description: string): ItemDetail => {
    const { id, title, price, currency_id, thumbnail, condition, shipping, sold_quantity } =
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
      sold_quantity,
      description 
    };
  };
  