up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f web

sh:
	docker-compose exec web sh

build:
	docker-compose run web pnpm run build

lint:
	docker-compose exec web pnpm lint:fix

typescript:
	docker-compose exec web pnpm typescript

eslint:
	docker-compose exec web pnpm eslint:fix

prettier:
	docker-compose exec web pnpm prettier:fix

stylelint:
	docker-compose exec web pnpm stylelint:fix

test:
	docker-compose exec web pnpm test

test-coverage:
	docker-compose exec web pnpm test:coverage

test-unit:
	docker-compose exec web pnpm test:unit

test-unit-coverage:
	docker-compose exec web pnpm test:unit:coverage

test-unit-watch:
	docker-compose exec web pnpm test:unit:watch
