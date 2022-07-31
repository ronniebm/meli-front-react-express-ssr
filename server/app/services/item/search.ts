import axios from 'axios';
import { getCategories } from '../categories';
import { transformItemResult } from '../transforms/itemResult';

export const getSearchItems = async (query: string) => {
  try {
    const { data } = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    const transformData: Data = {
      author: {
        name: '',
        lastname: '',
      },
      categories: [],
      items: [],
    };

    data?.results.slice(0, 4).forEach(async (item) => {
      getCategories(item.category_id).then(({ name }) => {
        console.log('Categorias:', name);
        transformData.categories.push(name);
      });
    });

    data?.results.slice(0, 4).forEach((item) => {
      const transformItem = transformItemResult(item);
      transformData.items.push(transformItem);
    });

    return transformData;
  } catch (error) {
    throw new Error(error);
  }
};
