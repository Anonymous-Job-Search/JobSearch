up:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose restart web

logs:
	docker-compose logs -f web

sh:
	docker-compose exec web sh

build:
	docker-compose run web pnpm run build

lint:
	docker-compose exec web pnpm lint:fix

typecheck:
	docker-compose exec web pnpm typecheck

eslint:
	docker-compose exec web pnpm eslint:fix

prettier:
	docker-compose exec web pnpm prettier:fix

stylelint:
	docker-compose exec web pnpm stylelint:fix

tests:
	docker-compose exec web pnpm test

tests-unit:
	docker-compose exec web pnpm test:unit

tests-unit-watch:
	docker-compose exec web pnpm test:unit:watch

tests-unit-coverage:
	docker-compose exec web pnpm test:unit:coverage
