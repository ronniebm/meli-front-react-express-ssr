import axios from 'axios';
import { transformItemDetail } from '../transforms/itemDetail';
import { getDescriptionItem } from './description';

export const getDetailItem = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    const transformData: DataDetail = {
      author: {
        name: '',
        lastname: '',
      },
      items: {},
    };

    const { plain_text } = await getDescriptionItem(id);
    const transformItem = transformItemDetail(data, plain_text);
    transformData.items = transformItem;

    return transformData;
  } catch (error) {
    throw new Error(error);
  }
};
