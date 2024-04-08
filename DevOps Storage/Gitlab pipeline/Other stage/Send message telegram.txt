Step 1: Search BotFather
Step 2: /start
Step 3: /newbot
Step 4: <Bot name> => ex: Gitlab notification pipeline
Step 5: <User name> => ex: gitlab_test_26_bot (unique)
Step 6: Info send for you
    Link message: 
    Token:
Step 7: 
    Click Link message ex: t.me/gitlab_test_26_bot
    /start
Step 8: 
    access api link: https://api.telegram.org/bot<Token>/getUpdates
    copy: Chat => id ex: chatid

Step 9: 
    Setup
stages:
  - build
  - print

build_check:
  stage: build
  script:
    - docker build -t build-project . > build.log 2>&1 || echo "Build failed"
  artifacts:
    paths:
      - build.log

build_noti:
  stage: print
  script:
    - build_content=$(cat build.log)
    - |
      project_info=$(cat <<EOF
      ===Notification from the system===
      Project ID: $CI_PROJECT_ID
      Project name: $CI_PROJECT_NAME
      Project URL: $CI_PROJECT_URL
      Branch: $CI_COMMIT_REF_NAME
      Commit: $CI_COMMIT_SHA  
      EOF
      )
    - message="$build_content"$'\n\n'"$project_info"
    - echo $build_content
    - if grep -q "ERROR" build.log; then curl -X POST
      "https://api.telegram.org/bottoken/sendMessage" -d "chat_id=chatid&text=$message"; exit 1; fi
      
    #- if [[ "$build_content" != *"Job succeeded"* ]] || [[ "$build_content" != *"DONE"* ]]; then curl -X POST 
    #  "https://api.teletgram.org/bottoken/sendMessage" -d "chat_id=chatid&text=$message"; exit 1; fi


    #- echo $build_content | tail -n 1 | grep -E 'Job succeeded|DONE' || 
    #  curl -X POST "https://api.telegram.org/bottoken/sendMessage" -d "chat_id=chatid&text=$message"


######### one stage
# stages:
#   - build

# build:
#   stage: build
#   script:
#     - docker build -t build-project . > build.log 2>&1 || echo "Build failed"
#     - build_content=$(cat build.log)
#     - |
#       project_info=$(cat <<EOF
#       ===Notification from the system===
#       Project ID: $CI_PROJECT_ID
#       Project name: $CI_PROJECT_NAME
#       Project URL: $CI_PROJECT_URL
#       Branch: $CI_COMMIT_REF_NAME
#       Commit: $CI_COMMIT_SHA  
#       EOF
#       )
#     - message="$build_content"$'\n\n'"$project_info"
#     - echo $build_content
#     - if grep -q "ERROR" build.log; then curl -X POST
#       "https://api.telegram.org/bottoken/sendMessage" -d "chat_id=chatid&text=$message"; exit 1; fi
#   artifacts:
#     paths:
#       - build.log