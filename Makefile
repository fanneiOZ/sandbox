install: npm-install
build: backend

npm-install:
	npm install
	
backend:
	gulp backend-typescript