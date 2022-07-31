import { getCategories } from './categories';

const axios = require('axios');

/* en los services van las peticiones que se hagan al API, podemos hacer modificaciones antes de que se renderice en el client */
export const getItems = async () => {
  try {
    const { data } = await axios.get(
      'https://api.mercadolibre.com/items/MLA1118258076'
    );
    const categories = await getCategories(data.category_id);

    data.categories = categories?.path_from_root.map(({ name }) => name);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
