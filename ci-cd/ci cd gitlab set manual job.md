rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
      when: always
    - if: $CI_COMMIT_BRANCH != $CI_DEFAULT_BRANCH
      when: manual


 rules:
    - if: $CI_COMMIT_BRANCH == 'master'
      when: always
    - if: $CI_MERGE_REQUEST_ID
      when: never