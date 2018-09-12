import {
  exhibitsItemsSelector,
  exhibitsFoundItemsSelector,
  exhibitsFilteredItemsSelector,
  exhibitsSearchStringSelector,
  exhibitsFilterDataSelector,
  exhibitsItemsPageSelector,
  exhibitsPagesNumberSelector,
  exhibitsCurrentPageSelector,
} from './exhibits';


describe('Exhibits selectors', () => {
  test('Should return exhibits array', () => {
    const mockParams = {
      items: [
        {
          name: 'Кассета к киносъемочному апарату "Кинап"',
          city: 'Ленинград',
          country: 'СССР',
          organization: 'Ленинградский завод "Кинап" (Ленкинап)',
          description: 'Предназначена для хранения неэкспонированной пленки',
        },
        {
          name: 'Футляр фотоаппарата "Certo Dollina"',
          city: '',
          country: 'Германия',
          organization: '',
          description: '',
        },
        {
          name: 'Футляр фотоаппарата',
          city: '',
          country: '',
          organization: '',
          description: '',
        },
      ],
    };

    expect(exhibitsItemsSelector.resultFunc(mockParams))
      .toEqual([
        {
          uuid: expect.any(String),
          name: 'Кассета к киносъемочному апарату "Кинап"',
          city: 'Ленинград',
          country: 'СССР',
          organization: 'Ленинградский завод "Кинап" (Ленкинап)',
          description: 'Предназначена для хранения неэкспонированной пленки',
          place: 'Ленинград, СССР',
        },
        {
          uuid: expect.any(String),
          name: 'Футляр фотоаппарата "Certo Dollina"',
          city: '',
          country: 'Германия',
          organization: '',
          description: '',
          place: 'Германия',
        },
        {
          uuid: expect.any(String),
          name: 'Футляр фотоаппарата',
          city: '',
          country: '',
          organization: '',
          description: '',
          place: '',
        },
      ]);
  });


  test('Should return found exhibits by name', () => {
    const mockItems = [
      {
        uuid: '1',
        name: 'Кассета к киносъемочному апарату "Кинап"',
        city: 'Ленинград',
        country: 'СССР',
        organization: 'Ленинградский завод "Кинап" (Ленкинап)',
        description: 'Предназначена для хранения неэкспонированной пленки',
        place: 'Ленинград, СССР',
      },
      {
        uuid: '2',
        name: 'Футляр фотоаппарата "Certo Dollina"',
        city: '',
        country: 'Германия',
        organization: '',
        description: '',
        place: 'Германия',
      },
      {
        uuid: '3',
        name: 'Футляр фотоаппарата',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
      {
        uuid: '4',
        name: 'Футляр фотоаппарата 2',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
    ];

    const mockSearchString = 'кассета';

    expect(exhibitsFoundItemsSelector.resultFunc(mockItems, mockSearchString))
      .toEqual([
        {
          uuid: '1',
          name: 'Кассета к киносъемочному апарату "Кинап"',
          city: 'Ленинград',
          country: 'СССР',
          organization: 'Ленинградский завод "Кинап" (Ленкинап)',
          description: 'Предназначена для хранения неэкспонированной пленки',
          place: 'Ленинград, СССР',
        },
      ]);
  });


  test('Should return filtered exhibits by place', () => {
    const mockItems = [
      {
        uuid: '1',
        name: 'Кассета к киносъемочному апарату "Кинап"',
        city: 'Ленинград',
        country: 'СССР',
        organization: 'Ленинградский завод "Кинап" (Ленкинап)',
        description: 'Предназначена для хранения неэкспонированной пленки',
        place: 'Ленинград, СССР',
      },
      {
        uuid: '2',
        name: 'Футляр фотоаппарата "Certo Dollina"',
        city: 'Ленинград',
        country: '',
        organization: '',
        description: '',
        place: 'Ленинград',
      },
      {
        uuid: '3',
        name: 'Футляр фотоаппарата',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
      {
        uuid: '4',
        name: 'Футляр фотоаппарата 2',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
    ];

    const mockFilter = {
      place: 'Ленинград, СССР',
    };

    expect(exhibitsFilteredItemsSelector.resultFunc(mockItems, mockFilter))
      .toEqual([
        {
          uuid: '1',
          name: 'Кассета к киносъемочному апарату "Кинап"',
          city: 'Ленинград',
          country: 'СССР',
          organization: 'Ленинградский завод "Кинап" (Ленкинап)',
          description: 'Предназначена для хранения неэкспонированной пленки',
          place: 'Ленинград, СССР',
        },
      ]);
  });


  test('Should return search string value', () => {
    const mockParams = {
      searchString: 'test',
    };

    expect(exhibitsSearchStringSelector.resultFunc(mockParams))
      .toEqual(mockParams.searchString);
  });


  test('Should return filter object', () => {
    const mockParams = [
      {
        uuid: '1',
        name: 'Кассета к киносъемочному апарату "Кинап"',
        city: 'Ленинград',
        country: 'СССР',
        organization: 'Ленинградский завод "Кинап" (Ленкинап)',
        description: 'Предназначена для хранения неэкспонированной пленки',
        place: 'Ленинград, СССР',
      },
      {
        uuid: '2',
        name: 'Футляр фотоаппарата "Certo Dollina"',
        city: '',
        country: 'Германия',
        organization: '',
        description: '',
        place: 'Германия',
      },
      {
        uuid: '3',
        name: 'Футляр фотоаппарата',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
      {
        uuid: '4',
        name: 'Футляр фотоаппарата',
        city: 'Ленинград',
        country: 'СССР',
        organization: '',
        description: '',
        place: '',
      },
    ];

    expect(exhibitsFilterDataSelector.resultFunc(mockParams))
      .toEqual(['Ленинград, СССР', 'Германия']);
  });


  test('Should return exhibits array by number of current page', () => {
    const mockItems = [
      {
        uuid: '1',
        name: 'Кассета к киносъемочному апарату "Кинап"',
        city: 'Ленинград',
        country: 'СССР',
        organization: 'Ленинградский завод "Кинап" (Ленкинап)',
        description: 'Предназначена для хранения неэкспонированной пленки',
        place: 'Ленинград, СССР',
      },
      {
        uuid: '2',
        name: 'Футляр фотоаппарата "Certo Dollina"',
        city: '',
        country: 'Германия',
        organization: '',
        description: '',
        place: 'Германия',
      },
      {
        uuid: '3',
        name: 'Футляр фотоаппарата',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
      {
        uuid: '4',
        name: 'Футляр фотоаппарата 2',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
    ];

    const mockPageNumber = 2;

    expect(exhibitsItemsPageSelector.resultFunc(mockItems, mockPageNumber))
      .toEqual([
        {
          uuid: '4',
          name: 'Футляр фотоаппарата 2',
          city: '',
          country: '',
          organization: '',
          description: '',
          place: '',
        },
      ]);
  });


  test('Should return number of pages', () => {
    const mockParams = [
      {
        uuid: '1',
        name: 'Кассета к киносъемочному апарату "Кинап"',
        city: 'Ленинград',
        country: 'СССР',
        organization: 'Ленинградский завод "Кинап" (Ленкинап)',
        description: 'Предназначена для хранения неэкспонированной пленки',
        place: 'Ленинград, СССР',
      },
      {
        uuid: '2',
        name: 'Футляр фотоаппарата "Certo Dollina"',
        city: '',
        country: 'Германия',
        organization: '',
        description: '',
        place: 'Германия',
      },
      {
        uuid: '3',
        name: 'Футляр фотоаппарата',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
      {
        uuid: '4',
        name: 'Футляр фотоаппарата 2',
        city: '',
        country: '',
        organization: '',
        description: '',
        place: '',
      },
    ];

    expect(exhibitsPagesNumberSelector.resultFunc(mockParams)).toBe(2);
  });


  test('Should return number of current page', () => {
    const mockParams = {
      location: {
        search: '?page=1',
      },
    };

    expect(exhibitsCurrentPageSelector.resultFunc(mockParams)).toBe(1);
  });
});
