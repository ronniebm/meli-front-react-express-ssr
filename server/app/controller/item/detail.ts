import { getDetailItem } from '../../services/item/detail';

export const itemDetailController = async (req, res) => {
    const { params } = req;
    res.json(await getDetailItem(params.id))
}