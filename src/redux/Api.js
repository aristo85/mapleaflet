import randomData from "../data/randomData.json";

export const fetchRandomPoints = async () => {
  const res = await fetch(
    "https://supercharge.info/service/supercharge/allSites"
  );

  let data = await res.json();

  if (!data || data.length < 1) {
    data = randomData;
  }
//   console.log(data);
  const randomArray = [...Array(20)].map((el) => {
    const randIndx = Math.round(Math.random() * (data.length - 1));

    const startPoint = {
      lat: data[randIndx].gps.latitude,
      lon: data[randIndx].gps.longitude,
      address: data[randIndx].address,
      id: data[randIndx].id,
    };
    const endPoint = data.find((el) => {
      const lat1 = el.gps.latitude;
      const lon1 = el.gps.longitude;
      const lat2 = startPoint.lat;
      const lon2 = startPoint.lon;

      return (
        lat1 !== lat2 &&
        lat1 > lat2 - 10 &&
        (lat1 < lat2 + 10) & (lon1 !== lon2) &&
        lon1 > lon2 - 10 &&
        lon1 < lon2 + 10
      );
    });
    return {
      startPoint,
      endPoint: {
        address: endPoint.address,
        lat: endPoint.gps.latitude,
        lon: endPoint.gps.longitude,
        id: endPoint.id,
      },
    };
  });
  return randomArray;
};
