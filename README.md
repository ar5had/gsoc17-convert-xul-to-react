# gsoc-convert-xul-to-html
Dialog-boxes development area for GSoC-2017 project - `convert xul to html`

## Project Description
Lightning(Thunderbird calendar addon) has traditionally been using XUL for its user interface. To modernize, **I will be converting User Interface of some dialogs into React.** The new components will be using web standards as much as possible, avoiding extensive use of third party libraries. I will be using React.js for developing HTML. React.js is very good for making reusable web components and it is quite efficient as well. Unlike XUL, debugging is very easy with react.js. More about this project can be found in my [proposal](https://goo.gl/Eothqj).

## Get Started
**NOTE:** Open app in Firefox browser only so that `-moz` styles can work.
1. **Clone the repository:** `https://github.com/arshdkhn1/gsoc17-convert-xul-to-html.git`
2. **Install Yarn globally:** `npm install -g yarn`
3. **Install dependencies:** `yarn install`
4. **Start server:** `yarn start`
5. **Convert components to vanilla js(no-jsx):** `yarn build`. 
All the components following `src` directory structure will be present in `dist` directory. These components will be using vanilla js instead of jsx.
6. **Write/Change Code:** Install prettier and eslint extentions in your code editor to make sure you don't have lint errors. Currently there is one bash script which runs on `build` command so make sure you use bash terminal for that.

## Thanks

Thanks to [BrowserStack](https://www.browserstack.com/) for providing free open source plans.

![BrowserStack](bslogo.png?raw=true=50x)
