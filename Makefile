install: npm-install db-migrate-up
build: backend

npm-install:
	npm install
	
backend:
	gulp backend-typescript

db-migrate-down:
	npx sequelize-cli db:migrate:undo
db-migrate-up:
	npx sequelize-cli db:migrate