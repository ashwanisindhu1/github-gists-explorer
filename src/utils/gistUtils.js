const _getUserInfo = (owner) => {
  const { login, avatar_url, html_url } = owner;
  return { login, avatar_url, html_url };
};

const _getFilesInfo = (files) => {
  const filesInfo = [];
  const fileKeys = Object.keys(files);
  for (let i = 0; i < fileKeys.length; i++) {
    const currentFile = files[fileKeys[i]];
    const { filename, type, raw_url, language } = currentFile;
    filesInfo.push({ filename, type, raw_url, language });
  }
  return filesInfo;
};

const _getUsersWhoForked = (forksInfo) => {
  const users = [];
  for (let i = 0; i < forksInfo.length; i++) {
    const fork = forksInfo[i];
    users.push(_getUserInfo(fork.owner));
  }
  return users;
};

const processGists = function (gists) {
  const slicedGistInfo = [];
  gists.forEach((gist) => {
    slicedGistInfo.push({
      id: gist.id,
      description: gist.description,
      url: gist.html_url,
      user: _getUserInfo(gist.owner),
      files: _getFilesInfo(gist.files),
      forkedUsers: _getUsersWhoForked(gist.forksInfo)
    });
  });

  return slicedGistInfo;
};

export default { processGists };
