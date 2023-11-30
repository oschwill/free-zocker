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
    value: 'relevance',
    text: 'Relevance',
  },
  {
    value: 'popularity',
    text: 'Popularity',
  },
  {
    value: 'release-date',
    text: 'Release Date',
  },
  {
    value: 'alphabetical',
    text: 'Alphabetical',
  },
];

export const allGenres = (data) => {
  const tempArr = [...new Set(data.map(({ genre }) => genre.trimStart()))];
  return tempArr.map((cur) => ({ value: cur, text: cur }));
};
