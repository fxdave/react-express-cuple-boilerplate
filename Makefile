# Setup project for dev in docker
install:
	cd frontend && cp .env.sample .env
	docker-compose run frontend npm i
	docker-compose run backend npm i
start:
	docker-compose up -d
stop:
	docker-compose down