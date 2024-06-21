import axios from 'axios';

const API_KEY = '44428649-a15122ccea82814442a666457';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, per_page = 15) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      page,
      per_page
    }
  });
  return response.data;
}
