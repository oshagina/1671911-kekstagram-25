import {
  DELAY_INTERVAL,
  PostInfo
} from './data.js';

import {
  debounce
} from './utils.js';

import {
  getData
} from './small-picture.js';

const uploadFiltersFormElement = document.querySelector('.img-filters__form');
const uploadFiltersButtonElements = uploadFiltersFormElement.querySelectorAll('.img-filters__button');
const uploadFiltersElement = document.querySelector('.img-filters');
const getPreviewes = () => document.querySelectorAll('.picture');

const setFilterButtonStyle = (element) => {
  uploadFiltersButtonElements.forEach((el) => el.classList.remove('img-filters__button--active'));
  element.classList.add('img-filters__button--active');
};
const getFilteredPosts = (galleryPosts) => {
  uploadFiltersElement.classList.remove('img-filters--inactive');

  const onClickFilter = (evt) => {
    setFilterButtonStyle(evt.target);
    getPreviewes().forEach((element) => { element.remove(); });

    if (evt.target.id === 'filter-default') {
      getData(galleryPosts);
    } else if (evt.target.id === 'filter-random') {
      getData(galleryPosts.slice(0, PostInfo.FILTERED_POSTS).sort(() => 0.5 - Math.random()));
    } else if (evt.target.id === 'filter-discussed') {
      const setCompareCommentsCount = (b, a) => a.comments.length - b.comments.length;
      getData(galleryPosts.slice().sort(setCompareCommentsCount));
    }
  };

  uploadFiltersFormElement.addEventListener('click', debounce(onClickFilter, DELAY_INTERVAL));
};

export {
  getFilteredPosts
};

