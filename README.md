# AWS Lambda with NestJS

## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

```
curl http://localhost:3000/languages
```

## AWS Lambda

```
npm run build
mkdir deploy
zip -r deploy/nest-lambda.zip dist/ node_modules

aws cloudformation package --template-file nest-lambda.yaml --s3-bucket cloudformation-5-4 --output-template-file deploy/nest-lambda.out.yaml

aws cloudformation deploy --template-file deploy/nest-lambda.out.yaml --stack-name nest-lambda --capabilities CAPABILITY_IAM
```