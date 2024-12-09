import axios from 'axios';
const BaseURL = "https://api.flickr.com/services/rest/";

export const HttpGet = async(aParams) => {
  aParams['api_key'] = "d12447f70e875413282a48b9cbe48257";
  aParams['format'] = 'json';
  aParams['method'] = 'flickr.photos.search';
  aParams['extras'] = 'url_h';
  aParams['nojsoncallback'] = '1';
  aParams['page'] = '1';
  const oURL = BaseURL + "?" + new URLSearchParams(aParams);
  let oResponse = await axios.get(oURL);
  return oResponse?.data;
}