# Serverless Boilerplate

A starter boilerplate for nodeJS serverless applications.

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/levinunnink/serverless-boilerplate/master/LICENSE)
[![Stars](https://img.shields.io/github/stars/levinunnink/serverless-boilerplate.svg?style=social&label=Star&maxAge=3600)](https://github.com/levinunnink/serverless-boilerplate/stargazers)

The boilerplate provides simple examples of

- HTTP / REST functions (synchronous application logic)
- SNS functions (asynchronous or deferred application logic)
- Scheduled functions

It is meant merely as a launching point that contains some common libraries for building a serverless app on AWS. 

## Prerequisites

- **nodeJS:** This boilerplate is written in nodeJS 8.10 and many of the plugins we're using are only available for node.
- **AWS Lambda:** This boilerplate assumes that you're going to deploy your serverless functions to AWS and not another cloud provider.
- **Docker & Make:** For building and deploying serverless functions.

## Getting started

**Installing the project**

```bash
git clone https://github.com/levinunnink/serverless-boilerplate.git
npm install
```

I recommend familiarizing yourself with the [serverless.yml](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml) file. 

## Running the project locally

**HTTP functions**

```bash
npm run start # Starts a local http server that you can access directly in your browser to test your http serverless functions
```

**Triggering SNS functions**

```bash
npm run sns -- functionName --data '{"a":"bar"}' # Please note the space before and after the double-dash "--"
```

**Developing and testing AWS services locally:**

If you want to use AWS services locally, you'll need to use [localstack](https://github.com/localstack/localstack). I recommend only running the services you actually need instead of booting up the whole AWS suite. Docker runs out of memory very quickly that way. In the example `docker-compose.yml` you'll see that we are only running S3 and Dynamodb locally. You can modify this as you need.

```bash
docker-compose up # Boots localstack and associated services
```

To use these services when running your serverless app locally, you need to override the `endpoint` variable to point it to localstack. 

```javascript
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  endpoint: 'http://localhost:4572', // localstack s3 endpoint
});
```

## Building and deploying

The boilerplate includes two stages for deployment `stage` and `prod`. Feel free to modify these as you like but remember that serverless functions go live instantly so staged deployment and good testing are really important.

Builds are run and deployed in Docker for consistency using a [special build image](https://github.com/Droplr/docker-serverless) that mimics the Lambda nodeJS environment.

Deploy to staging:

```bash
make deploy-stage
```

Deploy to production:

```bash
make deploy-prod
```

**A note about environment variables:**

You'll notice references to `AWS_ENV_PATH` in the Makefile. This is so the [aws-env](https://github.com/droplr/aws-env) library knows where to find the environment variables. These env variables map to the `environment` vars in the `serverless.yml` file. 

## Included libraries

| Library  | Description
|:--------------------------- |:-----|
| [serverless-api-cloudfront](https://github.com/droplr/serverless-api-cloudfront) | Automatically creates properly configured AWS CloudFront distribution that routes traffic to API Gateway.
| [serverless-apigw-binary](https://github.com/maciejtreder/serverless-apigw-binary) | Automates the process of adding binary files support in API Gateway. Useful for serving static assets.
| [aws-env](https://github.com/droplr/aws-env) | Secure way to handle environment variables in Docker. Used when building and deploying serverless functions.
| [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) | Run serverless applications and REST APIs using the express framework.
| [localstack](https://github.com/localstack/localstack) | A fully functional local AWS cloud stack. Useful for development and testing.
| [docker-serverless](https://github.com/Droplr/docker-serverless)| Docker image that can be used for Serverless nodeJS deployment.

===

Author: Levi Nunnink - [@levinunnink](https://github.com/levinunnink)
