# Anonymous Job Search

[![Api](https://github.com/Anonymous-Job-Search/JobSearch/actions/workflows/api.yml/badge.svg)](https://github.com/Anonymous-Job-Search/JobSearch/actions/workflows/api.yml)
[![Web](https://github.com/Anonymous-Job-Search/JobSearch/actions/workflows/web.yml/badge.svg)](https://github.com/Anonymous-Job-Search/JobSearch/actions/workflows/web.yml)
[![CodeQL](https://github.com/Anonymous-Job-Search/JobSearch/actions/workflows/codeql.yml/badge.svg)](https://github.com/Anonymous-Job-Search/JobSearch/actions/workflows/codeql.yml)

> Pet project to explore new technologies.

## Endpoints

- WEB: [jobs.localhost](https://jobs.localhost)
- API: [api.jobs.localhost](https://api.jobs.localhost) ([swagger](https://api.jobs.localhost/swagger))

## Installation

- Install [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) tool.
- Install [mkcert](https://github.com/FiloSottile/mkcert)

```shell
# Only for Manjaro
# sudo trust anchor $(mkcert -CAROOT)/rootCA.pem

mkcert -install
mkcert -cert-file ./.docker/nginx/ssl/ca.crt -key-file ./.docker/nginx/ssl/ca-key.key jobs.localhost
```

## Development

```shell
# Run project
make up

# Stop project
make down

# Show logs
make logs
```

## Technologies

**Common**

- [Docker + docker-compose](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions)

**API**

- TODO

**WEB**

- [Node 19.x](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V19.md)
- [Nuxt.js 3.x](https://github.com/nuxt/nuxt)
- [Vue 3 + Composition API](https://github.com/vuejs/core)
- [BEM Methodology](https://en.bem.info/methodology/quick-start/)
- [Typescript](https://www.typescriptlang.org/)
- [Pinia - Vue Store](https://pinia.vuejs.org/)
- [Vitest - Unit tests](https://vitest.dev/)
- [ESLint - Static code analyzer](https://eslint.org/)
- [Prettier - Code style analyzer](https://prettier.io/)
- [Stylelint - CSS style analyzer](https://stylelint.io/)

**E2E**

- [Playwright](https://playwright.dev/)
