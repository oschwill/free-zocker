const url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '14be22519cmsh83a01982eea54b3p1a2832jsn9657064c2e9a',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
  mode: 'cors',
};

let returnData = [];

const FetchAPI = async () => {
  if (returnData.length < 1) {
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
