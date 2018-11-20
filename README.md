# Let's Bundle and still use ES modules!

## Browsersync
[Browsersync](https://www.browsersync.io) is magic, let's serve our dev env with it so we get all it's goodies, but ignore css/js that isn't a bundle, because we have plans for those.

## Javascript
[Rollup](https://rollupjs.org) is minimal (I like minimal) and fast as ⚡️, let's use it to bundle our ES modules (currently recommended strategy) and also easily import packages from NPM.

## CSS
[PostCSS](https://postcss.org) is going to let us import NPM modules too, with an added bonus of a [CSSNext plugin](http://cssnext.io), enabling future CSS features today. 

## Results
This script runs those 3 tasks [concurrently](https://www.npmjs.com/package/concurrently), and now you're rocking and rolling with a small footprint set of tools that will help you keep your bundles small for modern app delivery. 

# Getting Started
1. Install dependencies `npm i`
2. Spin it up `npm start`

> note: there's currently no production build steps
