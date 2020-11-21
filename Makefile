install:
		npm install

publish:
		npm publish --dry-run

do:
		node gendiff.js  __fixtures__/first.json  __fixtures__/second.json

do-big:
		node gendiff.js  __fixtures__/firstBig.json  __fixtures__/secondBig.json

doY:
		node gendiff.js  __fixtures__/first.yaml  __fixtures__/second.yaml

do-bigY:
		node gendiff.js  __fixtures__/firstBig.yaml  __fixtures__/secondBig.yaml

lint:
		npx eslint .

test:
		npm test

test-coverage:
		npm test -- --coverage --coverageProvider=v8