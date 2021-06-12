import { gistUtils } from './index';
import CONFIG from '../config';

const { API_ENDPOINT, httpConfig } = CONFIG;

const getGistsByUser = async function (username, perPage = 10, page = 1) {
  const gists = await fetch(`${API_ENDPOINT}/users/${username}/gists?per_page=${perPage}&page=${page}`, httpConfig)
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
  if (Array.isArray(gists)) {
    const forks = await Promise.all(gists.map((gist) => _getForks(gist.id)));
    const uiData = forks.map((fork, index) => {
      return {
        ...gists[index],
        forksInfo: fork.reverse().slice(0, 3)
      };
    });
    return { status: 'success', data: gistUtils.processGists(uiData) };
  }
  return { status: 'error', data: 'An error occured in data fetching' };
};

const _getForks = async function (gistId) {
  const res = await fetch(`${API_ENDPOINT}/gists/${gistId}/forks`, httpConfig);
  return await res.json();
};

export default { getGistsByUser };
