image: juristr/angular-ci-build:1.0.0
stages:
  - build
  - test
  - deploy
  
before_script:
  - npm install
  - npm --prefix ./functions install
  
app-build:
  stage: build
  artifacts:
    paths:
      - dist/
  script:
    - npm run build:js-training

unit-tests:
  stage: test
  script:
    - npm run test:ci

deploy-staging:
  stage: deploy-staging
  environment:
    name: staging
  dependencies:
    - app-build
  script:
    - npm run deploy
  only:
    - master

deploy-production:
  stage: deploy
  environment:
    name: production
  dependencies:
    - app-build
  when: manual
  script:
    - npm --prefix ./functions install
    - npm run deploy
  only:
    - master