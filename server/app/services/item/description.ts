import axios from 'axios';

export const getDescriptionItem = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
