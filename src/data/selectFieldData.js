export const platforms = [
  {
    value: 'all',
    text: 'All Platforms',
  },
  {
    value: 'PC (Windows)',
    text: 'Windows (PC)',
  },
  {
    value: 'Web Browser',
    text: 'Browser (Web)',
  },
];

export const sortBy = [
  {
    value: 'rel',
    text: 'Relevance',
  },
  {
    value: 'pop',
    text: 'Popularity',
  },
  {
    value: 'date',
    text: 'Release Date',
  },
  {
    value: 'alp',
    text: 'Alphabetical',
  },
];

export const allGenres = (data) => {
  const tempArr = [...new Set(data.map(({ genre }) => genre.trimStart()))];
  return tempArr.map((cur) => ({ value: cur, text: cur }));
};
