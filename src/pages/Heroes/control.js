import { callApi } from 'utils/api';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://api.opendota.com';

export async function fetchHeroes() {
  try {
    const data = await callApi('get', API_ENDPOINT, '/heroStats');
    return data;
  } catch (error) {
    return [];
  }
}