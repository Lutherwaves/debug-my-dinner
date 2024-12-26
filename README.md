# Debug my Dinner

This is the repository for my cooking blog. It is build using [content Ops Starter](https://assets.stackbit.com/docs/content-ops-starter-thumb.png)
and hosted on Netlify.

## Deploying to Netlify

If you click "Deploy to Netlify" button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/content-ops-starter)

## Develop with Netlify Visual Editor Locally

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory.

Run the Next.js development server:

```txt
cd content-ops-starter
npm run dev
```

Install the [Netlify Visual Editor CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify visual editor dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Netlify visual editor URL. Open this, register, or sign in, and you will be directed to Netlify's visual editor for your new project.

![Next.js Dev + Visual Editor Dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

## Building for production

To build a static site for production, run the following command

```shell
npm run build
```
