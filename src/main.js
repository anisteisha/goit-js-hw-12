import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery, showLoader, hideLoader, showLoadMoreBtn, hideLoadMoreBtn } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
const loadMoreBtn = document.getElementById('load-more-btn');

let query = '';
let page = 1;

hideLoadMoreBtn();

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  page = 1;
  clearGallery(gallery);
  hideLoadMoreBtn();
  

  showLoader();
  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(data.hits, gallery);
      if (data.totalHits > page * 15) {
        showLoadMoreBtn();
      }
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images!',
    });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();
  try {
    const data = await fetchImages(query, page);
    renderGallery(data.hits, gallery);
    if (page * 15 >= data.totalHits) {
      hideLoadMoreBtn();
      iziToast.info({
        title: 'End of Results',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images!',
    });
  } finally {
    hideLoader();
  }
});

console.log('iziToast loaded:', typeof iziToast !== 'undefined');
console.log('SimpleLightbox loaded:', typeof SimpleLightbox !== 'undefined');
