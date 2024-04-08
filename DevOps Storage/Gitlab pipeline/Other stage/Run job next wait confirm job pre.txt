# chạy job 2 trước và chờ xác nhập chạy job 1
# variables:
#   SKIP_JOB1: "false"

# stages:
#   - stage1
#   - stage2

# job1:
#   stage: stage1
#   script:
#     - echo "Chạy stage 1"
#   rules:
#     - exists:
#         - $CI_COMMIT_MESSAGE_FILE
#     - if: '$CI_COMMIT_REF_NAME == "master"'
#       when: manual
#       allow_failure: true
#     - if: '$SKIP_JOB1 == "true"'
#       when: never

# job2:
#   stage: stage2
#   script:
#     - echo "Chạy stage 2"
