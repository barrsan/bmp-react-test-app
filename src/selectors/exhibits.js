import uuid from 'uuid/v4';
import { uniqBy } from 'lodash';
import { createSelector } from 'reselect';


const exhibitsStateSelector = state => state.exhibits.toJS();
const exhibitsRouterSelector = state => state.router;


const exhibitsSearchStringSelector = createSelector(exhibitsStateSelector,
  ({ searchString }) => searchString);


const exhibitsFilterSelector = createSelector(exhibitsStateSelector,
  ({ filter }) => filter);


const exhibitsItemsSelector = createSelector(exhibitsStateSelector,
  ({ items }) => items.map((i) => {
    const { city, country } = i;
    const newItem = { ...i };
    newItem.uuid = uuid();
    newItem.place = '';

    if (city && country) {
      newItem.place = `${city}, ${country}`;
    } else if (city || country) {
      newItem.place = city ? newItem.place = city : newItem.place = country;
    }

    return newItem;
  }));


const exhibitsFoundItemsSelector = createSelector(
  exhibitsItemsSelector,
  exhibitsSearchStringSelector,
  (items, searchString) => (
    searchString
      ? items.filter(i => (i.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1))
      : items
  ),
);


const exhibitsFilteredItemsSelector = createSelector(
  exhibitsFoundItemsSelector,
  exhibitsFilterSelector,
  (items, filter) => (
    filter.place
      ? items.filter(i => (i.place === filter.place))
      : items
  ),
);


const exhibitsCurrentPageSelector = createSelector(
  exhibitsRouterSelector,
  (router) => {
    const { search } = router.location;

    if (search === '' || search.indexOf('page=') !== -1) {
      let currentPage = 1;

      if (search.indexOf('page=') !== -1) {
        const params = search.substr(1).split('&');
        const page = params.find(i => i.startsWith('page=')).split('=')[1];
        currentPage = parseInt(page, 10);
      }

      return currentPage;
    }

    return 0;
  },
);


const exhibitsItemsPageSelector = createSelector(
  exhibitsFilteredItemsSelector,
  exhibitsCurrentPageSelector,
  (items, currentPage) => (
    currentPage
      ? items.slice((currentPage - 1) * 3, currentPage * 3)
      : null
  ),
);


const exhibitsFilterDataSelector = createSelector(
  exhibitsFoundItemsSelector,
  exhibitsFilterSelector,
  items => uniqBy(items, i => i.place).map(i => i.place).filter(i => i !== ''),
);


const exhibitsPagesNumberSelector = createSelector(
  exhibitsFilteredItemsSelector,
  items => Math.ceil(items.length / 3),
);


export {
  exhibitsItemsSelector,
  exhibitsFoundItemsSelector,
  exhibitsFilteredItemsSelector,
  exhibitsSearchStringSelector,
  exhibitsFilterDataSelector,
  exhibitsItemsPageSelector,
  exhibitsPagesNumberSelector,
  exhibitsCurrentPageSelector,
};
