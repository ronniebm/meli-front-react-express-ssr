import axios from 'axios';

export const getCategories = async (category_id: string) => {
  try {
    return (await axios.get(`https://api.mercadolibre.com/categories/${category_id}`)).data;
  } catch (error) {
    throw new Error(error);
  }
};
