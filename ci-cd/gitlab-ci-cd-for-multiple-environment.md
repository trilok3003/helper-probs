Skip to content
DEV Community 👩‍💻👨‍💻
Search...

Log in
Create account

3
Like
0
Unicorn
4
Save

Cover image for Gitlab CI/CD for multiple environment
Santhosh Thomas 
Santhosh Thomas
Posted on 15 Sept 2021 • Updated on 24 Nov 2021

Gitlab CI/CD for multiple environment
#
gitlab
#
devops
#
pipeline
#
cicd
The problem arises when you want to use variables in different situations. A excellent example would be if you wanted to include the URLs of your production, staging, and development databases in the same task but didn't want to write separate jobs for each environment.

When a single procedure (deploy to s3) necessitates multiple jobs for different environments, we have a problem. As a result, managing multiple jobs for a single procedure takes time. So I came up with a solution based on a workflow job. Using a workflow job and a rule condition, we can integrate variable values based on branch. As a result, instead of writing jobs for each environment, a single job can handle multiple environment credentials.

If you have any questions about this topic, please contact me at santhoshthomas015@gmail.com.

A sample of code is provided below:
image: node:latest
variables:
  GIT_DEPTH: '0' 

stages:
  - build
  - deploy

workflow:
    rules:
      - if: $CI_COMMIT_REF_NAME ==  "develop"
        variables:
          DEVELOP: "true"
          ENVIRONMENT_NAME: Develop
          WEBSITE_URL: DEVELOP_WEBSITE_URL
          S3_BUCKET: (develop-s3-bucket-name)
          AWS_REGION: ************** develop
          AWS_ACCOUNT: ********develop

      - if: $CI_COMMIT_REF_NAME == "main" 
        variables:                                 
          PRODUCTION:  "true"
          ENVIRONMENT_NAME: PRODUCTION
          WEBSITE_URL: $PROD_WEBSITE_URL
          S3_BUCKET: $PROD-S3-BUCKET-NAME
          AWS_REGION: ************** (prod-region)
          AWS_ACCOUNT: ***********(prod-acct)
      - when: always 

build-app:
  stage: build
  script:
     #build-script
  environment: 
    name: $ENVIRONMENT_NAME

deploy-app:
  stage: deploy
  script:
     #deploy-script
  environment: 
    name: $ENVIRONMENT_NAME
NB: Please let me know if this procedure is correct. (Experts)

Discussion (0)
Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
🤔 Did you know?
 
🌚 Dark mode is available in Settings.

Read next
progrium profile image
Apptron Demo: Shell Scriptable Native APIs
Jeff Lindsay - Aug 5

adorism profile image
Migration Guide: Heroku to Render
Audrey Maldonado - Aug 25

agonzales profile image
Migration guide: Heroku to Qoddi
Alexandre Gonzales - Aug 25

martinratinaud profile image
Recreate mysql database from frm files and idb
Martin Ratinaud - Jul 22


Santhosh Thomas
Follow
A design-minded front-end software engineer focused on building beautiful interfaces & experiences.
LOCATION
Adoor, Kerala, India
JOINED
5 Jul 2020
More from Santhosh Thomas
Deploy angular docker app to own server using GitLab pipeline
#angular #devops #docker #gitlab
image: node:latest
variables:
  GIT_DEPTH: '0' 

stages:
  - build
  - deploy

workflow:
    rules:
      - if: $CI_COMMIT_REF_NAME ==  "develop"
        variables:
          DEVELOP: "true"
          ENVIRONMENT_NAME: Develop
          WEBSITE_URL: DEVELOP_WEBSITE_URL
          S3_BUCKET: (develop-s3-bucket-name)
          AWS_REGION: ************** develop
          AWS_ACCOUNT: ********develop

      - if: $CI_COMMIT_REF_NAME == "main" 
        variables:                                 
          PRODUCTION:  "true"
          ENVIRONMENT_NAME: PRODUCTION
          WEBSITE_URL: $PROD_WEBSITE_URL
          S3_BUCKET: $PROD-S3-BUCKET-NAME
          AWS_REGION: ************** (prod-region)
          AWS_ACCOUNT: ***********(prod-acct)
      - when: always 

build-app:
  stage: build
  script:
     #build-script
  environment: 
    name: $ENVIRONMENT_NAME

deploy-app:
  stage: deploy
  script:
     #deploy-script
  environment: 
    name: $ENVIRONMENT_NAME
DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.

Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2022.