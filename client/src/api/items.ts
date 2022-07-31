import axios from 'axios';

const searchItems = async (query: string) => {
    return (await axios.get(`/api/items?q=${query}`)).data
}

const getDetailItem = async (id: string) => {
    return (await axios.get(`/api/items/${id}`)).data;
}

export { getDetailItem, searchItems };