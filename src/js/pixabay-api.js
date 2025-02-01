export const BASE_URL = "https://pixabay.com/api/";
export const API_KEY = "48265594-3edacf02e8cadda91195713cc";

import axios from 'axios';

export async function fetchPhotosByQuery(searchQuery, page = 1) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;
  try{
    const response = await axios.get(URL);
    return response.data;
  }catch(error){
throw new Error("Sorry, there are no imagies matching your search query. Please try again!")
  }
}



