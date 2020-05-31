import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c568eb497a154e87132efaa568a83ee9";

const fetch = (type = "trending/movie/day", query = "") => {
  return axios.get(
    `${BASE_URL}${type}?api_key=${API_KEY}${
      query !== "" ? "&query=" + query : ""
    }`
  );
};

export default fetch;
