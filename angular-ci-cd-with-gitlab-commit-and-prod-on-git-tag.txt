image: trion/ng-cli-karma

cache:
  paths:
    - node_modules/

deploy_stage:
  stage: deploy
  environment: Stage
  only:
    - master
  script:
    - rm ./package-lock.json
    - npm install
    - ./node_modules/@angular/cli/bin/ng test --watch=false
    - ./node_modules/@angular/cli/bin/ng e2e  --watch=false
    - ./node_modules/@angular/cli/bin/ng build --prod 

deploy_production:
  stage: deploy
  environment: Production
  only:
    - tags
  script:
    - rm ./package-lock.json
    - npm install
    - ./node_modules/@angular/cli/bin/ng test --watch=false
    - ./node_modules/@angular/cli/bin/ng e2e  --watch=false
    - ./node_modules/@angular/cli/bin/ng build --prod 



git add .gitlab-ci.yml
git commit -m 'adds prod to gitlab-ci'
git tag v1.0.23 -am 'quick to the golden submarine'
git push origin v1.0.23