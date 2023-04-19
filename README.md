<div align="center">
  <br>
  <img alt="Pageblox" src="https://i.postimg.cc/jdwrK6w6/pageblox-github-logo.png" width="300px">
<br/>
</div>
<br/>
<p align="center">
<a href="https://289qfe92z29.typeform.com/to/LJNGDV6f">
    <img src="https://img.shields.io/badge/We're%20open%20for%20alpha!-Join-%2322c55e" />
  </a>
<a href='http://makeapullrequest.com'><img alt='PRs Welcome' src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields'/></a>
<a href='https://join.slack.com/t/pagebloxworkspace/shared_invite/zt-1tdckdevn-3GmY2amkNY2ZpdD6iuIZmQ'><img alt="Join Slack Community" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" height="20"/></a>
<img src="https://img.shields.io/badge/license-MIT-green" />
</p>

# Pageblox
[Pageblox](https://www.pageblox.io) is the easiest way to iterate on UX/UI with a simplified review workflow. Current features include:

- <b>Create review threads</b> for a given UI element, with replies/comments/screenshots, and the ability to resolve/unresolve.
- <b>Includes powerful interaction handling</b> such as drag & drop, sticking to elements, and hover states.
- <b>Built with routing in mind</b>. Regardless of whether you're using React Router DOM or Next.js, it handles comments for each page in the app.

Contributions are welcome! You can [try out the alpha today.](https://289qfe92z29.typeform.com/to/LJNGDV6f)

## Installation

#### Setup

You'll first need to obtain a project key, which can be obtained by [signing up here.](https://289qfe92z29.typeform.com/to/LJNGDV6f)

Run the following command in the root of your React application using your terminal:

  ```bash
  npm install pageblox-react
  ```

After installation, you need to wrap your application with ```PagebloxProvider```.

  #### Using NextJS
  
  Use ```_app.js``` to utilize the pageblox wrapper. You can find [more info here.](https://nextjs.org/docs/advanced-features/custom-app)

  ```jsx
  import { PagebloxProvider } from 'pageblox-react'
  import 'pageblox-react/dist/index.css'

  export default function App({ Component, pageProps }) {
    return (
      <PagebloxProvider projectId="playgroundKey">
        <Component {...pageProps} />
      </PagebloxProvider>
    )
  }
  ```
  
  #### Create React App Example

  We can use the default ```index.js``` file to wrap our app with Pageblox.

  ```jsx
  import App from './App';
  import { PagebloxProvider } from 'pageblox-react';
  import 'pageblox-react/dist/index.css';

  export default function App({ Component, pageProps }) {
    return (
      <PagebloxProvider projectId="playgroundKey">
        <App />
      </PagebloxProvider>
    )
  }
  ```

## Usage

#### Enabling & Disabling Review Mode

To enable Pageblox, append ```?enable_pageblox=true``` to your site's URL. This will persist the enabled state throughout your application by saving the flag into local storage.

To disable Pageblox, append ```?enable_pageblox=false``` to your site's URL. This will persist the disabled state.

## Where to get help

Feel free to e-mail at bhavan@pageblox.io with any questions, or [join our slack channel](https://join.slack.com/t/pagebloxworkspace/shared_invite/zt-1tdckdevn-3GmY2amkNY2ZpdD6iuIZmQ) to get support & latest updates.

## Important Links


- [Signup here](https://289qfe92z29.typeform.com/to/LJNGDV6f) to get your project key
- Join us on [Slack](https://join.slack.com/t/pagebloxworkspace/shared_invite/zt-1tdckdevn-3GmY2amkNY2ZpdD6iuIZmQ) to get the latest updates & support.
- You can also e-mail me at bhavan@pageblox.io