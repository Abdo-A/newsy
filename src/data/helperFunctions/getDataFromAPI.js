import axios from "axios";

export const getDataFromApi = link => {
  return new Promise((resolve, reject) => {
    axios
      .get(link)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        console.log("Error fetching data", err);
        reject(err);
      });
  });
};
