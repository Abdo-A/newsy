const newsApiKey = "57b345a9885145969cc144ad50fbf66d";
export const internationalNewsUrl = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${newsApiKey}`;
export const localNewsUrl = country_code => {
  return `https://newsapi.org/v2/top-headlines?country=${country_code}&category=general&apiKey=${newsApiKey}`;
};

export const locationUrl = "https://geoip-db.com/json/";
