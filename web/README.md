# Anonymous Job Search - WEB

## Technologies, tools and architecture

- [Node 19.x](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V19.md#)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Vue 3 + Composition API](https://vuejs.org/guide/introduction.html)
- [Typescript + TSX](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)
- [Vue store via Pinia](https://pinia.vuejs.org/)
- [Unit test via Vitest](https://vitest.dev/)
- [E2E test via Cypress](https://www.cypress.io/)
- [Static code analysis via ESLint](https://eslint.org/)
- [Code formatter via Prettier](https://prettier.io/)
- [CSS linter via Stylelint](https://stylelint.io/)

## Development

**Docker is required.**

```shell
# Run project
make up

# Stop project
make down

# Show logs
make logs

# Build production
make build

# Run linters
make lint
make typescript
make eslint
make prettier
make stylelint

# Run tests
make test
make test-coverage
make test-unit
make test-unit-coverage
make test-unit-watch
```

## TODO

- Install Cypress
