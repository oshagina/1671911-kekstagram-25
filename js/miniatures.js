import {similarDescriptionPhotos} from './data.js';

const listPhotos=document.querySelector('.pictures container');
const similarPhotoTemplate=document.querySelector('#picture').content;

const similarPhotos=similarDescriptionPhotos();
const similarListFragment=document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments}) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments;
  similarListFragment.appendChild(photoElement);
});

listPhotos.appendChild(similarListFragment);
