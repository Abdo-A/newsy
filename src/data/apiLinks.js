//NEWS
const newsApiKey = "57b345a9885145969cc144ad50fbf66d";
export const internationalNewsUrl = `https://newsapi.org/v2/top-headlines?language=en&pageSize=50&apiKey=${newsApiKey}`;
export const localNewsUrl = country_code => {
  return `https://newsapi.org/v2/top-headlines?country=${country_code}&pageSize=50&category=general&apiKey=${newsApiKey}`;
};
export const keywordNewsUrl = keyword => {
  return `https://newsapi.org/v2/everything?q=${keyword}&pageSize=50&apiKey=${newsApiKey}`;
};

//API
export const IPUrl = "https://api.ipify.org/?format=json";

//LOCATION
const locationApiKey = "477b6d8531937a4968588144819a8992";
export const locationUrl = ip => {
  return `http://api.ipstack.com/${ip}?access_key=${locationApiKey}`;
};

//export const locationUrl = "https://geoip-db.com/json/";
