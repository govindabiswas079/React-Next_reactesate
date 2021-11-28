import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'b5a39355camsh0a53a4f0b27f4acp15f3eejsnf2b383d38e97' ,
    },
  });
    
  return data;
}