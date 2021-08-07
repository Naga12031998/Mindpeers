/* eslint-disable array-callback-return */
export const API_STATUS = {
  IN_PROGRESS: 1,
  SUCCESS: 2,
};

// api parameters
export const params = {
  api_key: "f38afb5b95afd243730d9755fdc39747",
  format: "json",
  nojsoncallback: 1,
};

// getting the src for the response from API call
export function getPicsArray(response) {
  const tempArray = [];
  const responseArray = response.data.photos.photo;
  responseArray.map((i) => {
    const src = `https://farm${i.farm}.staticflickr.com/${i.server}/${i.id}_${i.secret}.jpg`;
    tempArray.push(src);
  });
  return tempArray;
}

export function getItemFromLocalStorage() {
  const item = window.localStorage.getItem("mindpeers");
  const parsedArr = JSON.parse(item);
  return parsedArr || [];
}
