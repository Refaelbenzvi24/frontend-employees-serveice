# frontend-employees-service

![tests badge](https://github.com/refaelbenzvi24/frontend-employees-serveice/actions/workflows/test.yml/badge.svg)
![codeQl badge](https://github.com/refaelbenzvi24/frontend-employees-serveice/actions/workflows/codeql-analysis.yml/badge.svg)

## Description

This is the frontend for the employees service. <br/>
It's a single page application built with React, Vite, Tailwind, Formik for form <br/>
state management combined with yup for validation, React-query for cache <br/>
state management. <br/>
[Go and check out the backend repo!](https://github.com/Refaelbenzvi24/backend-employees-service)

## Getting Started

> requires Node >= 14

clone the repo `git clone git@github.com:Refaelbenzvi24/frontend-employees-service`
\ `npx degit refaelbenzvi24/frontend-employees-service`

then

```bash
cd frontend-employees-service
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

And, enjoy :)

## Scripts

- `pnpm start` - build and start production server
- `pnpm start:test` - build and start production server in test mode.
- `pnpm build` - build for production. The generated files will be on the `dist` folder.
- `pnpm build:test` - build for testing. The generated files will be on the `tests/dist` folder.
- `pnpm serve` - locally start the production build.
- `pnpm serve:test` - locally start the testing build.
- `pnpm clean` - clean build directory
- `pnpm commit` - commit using commitizen
- `pnpm dev` - start a development server with hot reload.
- `pnpm dev:test` - start a development server with hot reload in test mode - used for running cypress tests with
  coverage.
- `pnpm lint` - runs TypeScript and ESLint.
- `pnpm lint:eslint` - runs ESLint.
- `pnpm lint:tsc` - runs TypeScript.
- `pnpm test` - run unit tests.
- `pnpm test:ci` - run all unit and integration tests in CI mode.
- `pnpm test:e2e` - run all e2e tests with the Cypress Test Runner.
- `pnpm test:e2e:headless` - run all e2e tests headlessly.
- `pnpm coverage:jest` - open the coverage report in the browser for jest.
- `pnpm coverage:cypress` - open the coverage report in the browser for cypress.
- `pnpm validate` - runs `lint`, `test:ci` and `test:e2e:ci`.

## Deploy to GCloud

### Setup

Generate a [service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) copy the
whole file object content to the [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
with the key PROJECT_GCP_KEY and the project id to PROJECT_GCP_ID,

### Deployment

Every push to the master/main branch will trigger a deployment to GCloud.
