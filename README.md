# gist-explorer

This app is using github apis which may get rate-limited after few calls.
So, it is better to start this app with a github Personal access Token (https://github.com/settings/tokens) as an environment variable having name REACT_APP_API_KEY

Here is the live demo of this app deployed on Netlify using this codebase and my Personal access Token :
https://stupefied-galileo-e94532.netlify.app/

## Steps to run this app locally
```
Use node version >= v12.20.0
----
1. git clone git@github.com:ashwanisindhu1/gist-explorer.git
2. cd gist-explorer
3. npm install
4. REACT_APP_API_KEY=<GITHUB_PERSONAL_ACESSS_TOKEN> npm start
(The app will run even without GITHUB_PERSONAL_ACESSS_TOKEN but may get rate-limited after first few calls)
5. Point your browser to http://localhost:3000/
```
