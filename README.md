# Serverless Boilerplate

A starter boilerplate for building serverless applications.

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/levinunnink/serverless-boilerplate/master/LICENSE)
[![Stars](https://img.shields.io/github/stars/levinunnink/serverless-boilerplate.svg?style=social&label=Star&maxAge=3600)](https://github.com/serverless-boilerplate/stargazers)

The boilerplate provides simple examples of

- HTTP / REST functions (synchronous application logic)
- SNS functions (asynchronous or deferred application logic)
- Scheduled functions

It is meant merely as a launching point that contains some common libraries for building a serverless app on AWS. 

## Prerequisites

- **nodeJS:** This boilerplate is written in nodeJS 8.10 and many of the plugins we're using are only available for node.
- **AWS Lambda:** This boilerplate assumes that you're going to deploy your serverless functions to AWS and not another cloud provider.
- **Docker & Make:** For building and deploying serverless functions.
- **AWS CLI:** For testing SNS-triggered functions.

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
npm run sns -- functionName --data '{"a":"bar"}' 
```

## Building and deploying

Once you are ready to deploy 

## Included libraries

| Library  | Description
|:--------------------------- |:-----|
| [serverless-api-cloudfront](https://github.com/droplr/serverless-api-cloudfront) | Automatically creates properly configured AWS CloudFront distribution that routes traffic to API Gateway.
| [serverless-apigw-binary](https://github.com/maciejtreder/serverless-apigw-binary) | Automates the process of adding binary files support in API Gateway. Useful for serving static assets.
| [aws-env](https://github.com/droplr/aws-env) | Secure way to handle environment variables in Docker. Used when building and deploying serverless functions.
| [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) | Run serverless applications and REST APIs using the express framework.
| [localstack](https://github.com/localstack/localstack) | A fully functional local AWS cloud stack. Useful for development and testing.

Author: Levi Nunnink - [@levinunnink](https://github.com/levinunnink)