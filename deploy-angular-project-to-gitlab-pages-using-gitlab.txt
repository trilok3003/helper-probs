// step 1 (Create .gitlab-ci.yml)
image: node:12.19.0
pages:
  cache:
    paths:
      - node_modules/
  script:
    - npm install -g @angular/cli@10.1.3
    - npm install
    - npm run buildProd
  artifacts:
    paths:
      - public
  only:
    - master
    - pages

// step 2 (package.json)
"buildProd": "ng build --base-href=/your-repo-name/"
// step 3 (angular.json)
"outputPath": "public"
// without step 3 
"buildProd": "ng build --output-path public --base-href=/your-repo-name/"