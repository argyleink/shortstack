[![Netlify Status](https://api.netlify.com/api/v1/badges/59a03ed4-bf70-4441-b65c-200bcd61c013/deploy-status)](https://app.netlify.com/sites/shortstax/deploys)

### Javascript ›
[Rollup](https://rollupjs.org) to **bundle**, **treeshake**, **import from NPM, local or remote URLs**, and **import CSS**. 

### CSS ›
[PostCSS](https://postcss.org) to  **bundle**, **import from NPM, local or URLs**, [postcss-preset-env](https://preset-env.cssdb.org/) for **CSS features from the spec**, and handy [easings](https://easings.net). 

### Dev Server ›
[Browsersync](https://www.browsersync.io) with all the goodies: **live reload**, **hot swap CSS**, **scroll syncing**, **remote debugging**, [etc](https://www.browsersync.io).

<br>

> Watch me break it down on [YouTube!](https://links.argyle.ink/shortstack)

<br><br>

## Getting Started
1. `mkdir new-project-name && cd $_`
1. `git clone --depth=1 https://github.com/argyleink/shortstack.git . && rm -rf ./.git`
1. `npm i`
1. `npm start`

## Development
Running `npm start` runs Browsersync, which watches changes to your files in `./app` and refreshes connected browsers.

## Production
Running `npm run build` compiles and minifies your code in `app` and outputs the optimised result to a folder called `dist` that's ready for static hosting.

Running `npm run production` will build your project and start a server at `dist`. Useful for continuous delivery.
