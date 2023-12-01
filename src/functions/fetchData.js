const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '14be22519cmsh83a01982eea54b3p1a2832jsn9657064c2e9a',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
  mode: 'cors',
};

let returnData = [];

let _params = 'relevance';

const FetchAPI = async (params) => {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/${params}`;
  if (returnData.length < 1 || params !== _params || params.startsWith('game?id=')) {
    console.log(url);
    _params = params;
    return await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        returnData = data;
        return returnData;
      })
      .catch((error) => {
        console.error('Ops! Fehler beim Abrufen der Daten: ', error);
        return null;
      });
  }

  return returnData;
};
export default FetchAPI;
