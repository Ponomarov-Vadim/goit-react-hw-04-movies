import axios from "axios";

const BASE_URL = "https://hn.algolia.com/api/v1/search";

const fetch = (query = "react") => {
  return axios.get(`${BASE_URL}?query=${query}`);
};

export default fetch;
