export const platforms = [
  {
    value: 'all',
    text: 'All Platforms',
  },
  {
    value: 'win',
    text: 'Windows (PC)',
  },
  {
    value: 'browser',
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
  return tempArr.map((cur) => ({ value: cur.replace(/ /g, '').toLowerCase(), text: cur }));
};
