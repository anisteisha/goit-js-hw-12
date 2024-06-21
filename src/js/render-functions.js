import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images, gallery) {
  if (!Array.isArray(images)) {
    console.error('Expected images to be an array, but got:', images);
    return;
  }

  const markup = images.map(image => `
    <li>
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
        <div class="info">
          <p class="info-item"><b>Likes</b> ${image.likes}</p>
          <p class="info-item"><b>Views</b> ${image.views}</p>
          <p class="info-item"><b>Comments</b> ${image.comments}</p>
          <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
        </div>
      </a>
    </li>
  `).join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}

export function clearGallery(gallery) {
  gallery.innerHTML = '';
}

export function showLoader() {
  const loaderElement = document.getElementById('loader'); 

  if (loaderElement) {
    loaderElement.classList.remove('hidden');
  } else {
    console.error('Loader element not found.');
  }
}

export function hideLoader() {
  const loaderElement = document.getElementById('loader');

  if (loaderElement) {
    loaderElement.classList.add('hidden');
  } else {
    console.error('Loader element not found.');
  }
}
