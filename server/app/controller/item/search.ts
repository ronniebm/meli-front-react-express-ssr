import { getSearchItems } from '../../services/item/search';

export const searchItem = async (req, res) => {
  const { query } = req;

  res.json(await getSearchItems(query.q)), 1000;
};
