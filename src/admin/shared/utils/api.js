import axios from 'axios';

const apiClient = axios.create({
  baseUrl: 'http://backend.sandbox.local',
  credentials: 'same-origin',
});

export function get(endpoint, params = {}, headers = null) {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .filter(key => params[key] !== null && typeof params[key] !== 'undefined')
    .map(key => esc(key) + '=' + esc(params[key]))
    .join('&');

  endPoint = endPoint + (query ? '?' + query : '');

  return apiClient
    .get(endpoint, { headers: headers })
    .then(response => ({ response }))
    .catch(error => ({ error }));
}
