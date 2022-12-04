dev-env:
	@cp tools/.prettierrc.json .prettierrc.json
	@cp tools/.eslintignore .eslintignore
	@cp tools/.prettierignore .prettierignore

install:
	@npm i

start:
	@npm start -w server/dev

watch:
	@npm run watch -w server/dev

test:
	@npm test

ci:
	@npm run ci