# Operation: Lightning ⚡

Introducing a new challenge: _Operation: Lightning_!

[![Build Status](https://travis-ci.org/SPRIT-DEV/operation-lightning.svg?branch=master)](https://travis-ci.org/SPRIT-DEV/operation-lightning)

## Mission Statement
Build a lightning-fast, static version of our current webpage that can be deployed to S3/Cloudfront in a matter of seconds.

## Goals
- `.css` and `.js` combined must be smaller than `100kb`
- `.css` and `.js` must be compressed
- images must be compressed as good as possible
- a simple version of the page must work without javascript
- javascript files must all be loaded async and must not block initial page rendering
- lighthouse scores must be above 95% in each category
- page must be served via https
- page must be fully responsive
- Support latest desktop and mobile browser versions
- Support IE11 and greater
- document must contain relevant opengraph meta tags
- page must not load external resources (except google analytics)
- page must be dsgvo-compliant
- all text must be machine readable

## Bonus Goals
- AMP version of the page
- Automate S3 deployment
- Show recruiting infos in dev tools
- Contact form with conversion tracking

## Setup
- `npm install` will install all necessary components to get you up and running.

## Usage
- `npm start`: Starts your development environment with hot module replacement
- `npm run build`: Builds all files needed for deployment and puts them in `./dist`
