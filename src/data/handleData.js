export const getCurrentData = (checkedData, setCurrentData, data) => {
  let filteredResults = [...data];

  for (let i = 0; i < checkedData.length; i++) {
    if (checkedData.includes('all') && checkedData.length === 3) {
      break;
    }

    if (checkedData.includes('all') && checkedData.length > 3) {
      if (
        checkedData[i] === 'PC (Windows)' ||
        checkedData[i] === 'Web Browser' ||
        checkedData[i] === 'all'
      ) {
        continue;
      }
    }

    filteredResults = [
      ...filteredResults.filter(
        (element) => element.platform.includes(checkedData[i]) || element.genre === checkedData[i]
      ),
    ];
  }

  setCurrentData(filteredResults);
};
