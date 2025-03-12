import axios from 'axios';

export const getClothes = async (limit) => {
  const response = await axios.get(`https://67cdba52125cd5af75789ab9.mockapi.io/products?page=1&limit=${limit}`);
  return response.data;
};
