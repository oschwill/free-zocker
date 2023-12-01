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

export const cleanArray = (actual) => {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
};
