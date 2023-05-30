<div align="center">
  <br>
  <img alt="Pageblox" src="https://i.postimg.cc/jdwrK6w6/pageblox-github-logo.png" width="300px">
<br/>
</div>
<br/>
<p align="center">
<a href='http://makeapullrequest.com'><img alt='PRs Welcome' src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields'/></a>
<img src="https://img.shields.io/badge/license-MIT-green" />
</p>

# Pageblox
[Pageblox](https://www.pageblox.io) is an open-source React tool that generates preview links with a real-time, collaboration review interface. It replaces the back-and-forth screen recordings and conversations that usually occur when giving feedback on UX/UI changes.

<img src="https://i.postimg.cc/SQzBSG3G/pageblox-demo-screenshot.png" alt="Demo Screenshot" width="500" />

## Installation

### Generating a project ID

Start by generating a unique project key, so that comments/replies have a dependency to your repo.
You can visit https://www.uuidtools.com/ to generate a UUID.

Store this somewhere, to pass in as a prop into your <Pageblox/> described further below.

### Github Actions

  To create preview links, a <a href="https://docs.github.com/en/actions/learn-github-actions">Github Actions workflow</a> is required. This will build the React project on every push to a branch and deploy it using Github Pages. The URL will be in the form of ```https://<USERNAME>.github.io/<REPO>/```.
  
#### Creating the workflow file

Start by creating a ```.github/workflows``` folder, and add a ```deploy.yml``` file. Depending on the React library used, the build folder path will change. The following example is for a Vite project, so the folder path is ```dist```.

To toggle Pageblox, you want to create an environment variable in your repo, and set it equal to ```true``` upon build.

Lastly, ensure that your repository is configured to have its GitHub Pages site deployed from a branch, by setting the source for the deployment under Settings > Pages of your repository to <b>Deploy from branch</b>. Best practice is to name this branch```gh-pages```. <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site">You can learn more about deploying from a branch here.</a>

```yml
name: Build and Deploy
on: [push]
permissions:
  contents: write
jobs:
  build-and-deploy:
    concurrency: ci-${{ github.ref }}
    runs-on: ubuntu-latest
    env:
      VITE_DISPLAY_PREVIEW: "true"
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3
      - name: Install and Build 🔧 
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist # The folder the action should deploy. Adjust this value based on your react library.
```

### React Library

To install the library, run the following command inside your root directory:

  ```bash
  npm install pageblox-react
  ```

## Usage

After installation, you need to wrap your application with ```PagebloxProvider``` and import the ```pageblox.css``` file.

Finally, create an environment variable named ```DISPLAY_PAGEBLOX``` with the appropriate prefix depending on your platform, and initialize it to ```false```.


#### Using NextJS
  
  Use ```_app.js``` to utilize the pageblox wrapper. You can find [more info here.](https://nextjs.org/docs/advanced-features/custom-app)

  ```jsx
  import { PagebloxProvider } from 'pageblox-react'
  import 'pageblox-react/dist/pageblox.css'

  export default function App({ Component, pageProps }) {
    return (
      <PagebloxProvider projectId="playgroundKey"
      enabled={import.meta.env.NEXT_PUBLIC_DISPLAY_PAGEBLOX === 'true'}>
        <Component {...pageProps} />
      </PagebloxProvider>
    )
  }
  ```
  
  #### Using Create React App / Vite Example

  ```jsx
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import { BrowserRouter } from 'react-router-dom'
  import { PagebloxProvider } from 'pageblox-react'
  import App from './App.jsx'
  import './index.css'
  import "pageblox-react/dist/pageblox.css"

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <PagebloxProvider projectKey="sample-key"
      enabled={import.meta.env.VITE_DISPLAY_PAGEBLOX === 'true'}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PagebloxProvider>
    </React.StrictMode>,
  )
  ```


#### Generating a preview link

Once you've imported the ```PagebloxProvider``` & CSS file, as well as created an appropriate environment variable used in the actions workflow, go ahead and push changes to a remote branch.

You can view the progress of this workflow under the Actions tab in your repository.

Once it's completed, visit ```https://<USERNAME>.github.io/<REPO>/``` and you'll see the Pageblox widget on the bottom right of your app. Click on it to start commenting!

## Where to get help

You can raise issues in this repo, or feel free to e-mail at bhavan@pageblox.io with any questions.

## Important Links

- [Use this](https://www.uuidtools.com/) to generate a unique project key
- E-mail bhavan@pageblox.io to get the latest updates & support.

## Acknowledgements
- <a href="https://github.com/JamesIves/github-pages-deploy-action">JamesIves/github-pages-deploy-action (MIT)</a>