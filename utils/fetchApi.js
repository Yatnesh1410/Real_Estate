import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "eca5ac25a8msh3db1236f176efd7p13785ejsn7b98e97e27a9",
    },
  });

  return data;
};
