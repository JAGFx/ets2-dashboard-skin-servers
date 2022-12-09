dev-env:
	@cp tools/.prettierrc.json .prettierrc.json
	@cp tools/.eslintignore .eslintignore
	@cp tools/.prettierignore .prettierignore
	@cp tools/tsconfig.json tsconfig.json
	@sed -i '/baseUrl/d' tsconfig.json

install:
	@npm i

start:
	@npm start -w servers/dev

watch:
	@npm run watch -w servers/dev

test:
	@npm test

ci:
	@npm run ci