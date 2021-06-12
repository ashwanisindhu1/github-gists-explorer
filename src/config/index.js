const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const httpConfig = { headers: { Accept: 'application/vnd.github.v3+json' } };

if (REACT_APP_API_KEY) {
  httpConfig.headers.Authorization = `token ${REACT_APP_API_KEY}`;
}

const API_ENDPOINT = 'https://api.github.com';

export default { httpConfig, API_ENDPOINT };
