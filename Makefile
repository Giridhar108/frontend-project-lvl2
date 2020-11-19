install:
		npm install

publish:
		npm publish --dry-run

do:
		node gendiff.js  ../frontend-project-lvl2/path/first.json  ../frontend-project-lvl2/path/second.json

lint:
		npx eslint .
test:
		npm test

test-coverage:
		npm test -- --coverage --coverageProvider=v8