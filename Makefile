install:
		npm install

publish:
		npm publish --dry-run

do:
		node gendiff.js  ../frontend-project-lvl2/path/first.json  ../frontend-project-lvl2/path/second.json