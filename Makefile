NAME=serverless-boilerplate
AWS_PROFILE=default

build:
	docker build -t $(NAME) .

# Deploys are made inside Docker containers to provide clean environment
deploy-prod: build
	docker run -v ~/.aws/:/root/.aws/ -e AWS_PROFILE=$(AWS_PROFILE) -e AWS_REGION=us-west-2 -e AWS_ENV_PATH=/prod/serverless-boilerplate/ $(NAME) make docker-deploy-prod

deploy-stage: build
	docker run -v ~/.aws/:/root/.aws/ -e AWS_PROFILE=$(AWS_PROFILE) -e AWS_REGION=us-west-2 -e SLS_DEBUG=* -e AWS_ENV_PATH=/stage/serverless-boilerplate/ $(NAME) make docker-deploy-stage

# Actual serverless deploy commands that should run inside containers
docker-deploy-prod:
	eval $$(aws-env) && serverless deploy --stage prod

docker-deploy-stage:
	eval $$(aws-env) && serverless deploy --stage stage
