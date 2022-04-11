
import {getBigPhoto} from './big-picture.js';
const getData =(similarPhotos) => {

  const listPhotos = document.querySelector('.pictures.container');
  const similarPhotoTemplate = document.querySelector('#picture').content;
  const similarListFragment = document.createDocumentFragment();

  similarPhotos().forEach(({url, likes, comments}, id) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);
    const pictureElement = photoElement.querySelector('.picture');
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.setAttribute('data-id', id);

    pictureElement.addEventListener('click', (evt)=> {
      evt.preventDefault();
      getBigPhoto({url, likes, comments,id});
    }
    );
    similarListFragment.appendChild(pictureElement);
  });
  //
  listPhotos.appendChild(similarListFragment);
  document.body.appendChild(listPhotos);
};

export {
  getData
};
