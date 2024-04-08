#!/bin/bash

TOKEN="<token telegram>"

# Danh sách các thông tin xác thực
declare -A USER_TOKENS
USER_TOKENS["Username gitlab 1"]="<token gitlab 1>"
USER_TOKENS["Username gitlab 2"]="<token gitlab 2>"

# Hàm xử lý khi nhận tin nhắn /build
function handle_build() {
    chat_id="$1"
    user_and_branch="$2"
    IFS=' ' read -ra user_and_branch_array <<< "$user_and_branch"

    branch="${user_and_branch_array[0]}"
    user="${user_and_branch_array[1]}"

    user_token="${USER_TOKENS[$user]}"

    if [ -z "$user_token" ]; then
        message="Người dùng $user không được phép thực hiện lệnh build."
        curl -X POST "https://api.telegram.org/bot$TOKEN/sendMessage" -d "chat_id=$chat_id" -d "text=$message"
        return
    fi

    curl -X POST "https://api.telegram.org/bot$TOKEN/sendMessage" -d "chat_id=$chat_id" -d "text=Thực hiện lệnh build trên nhánh $branch bởi người dùng $user..."

    response=$(curl -X POST "https://<git_link>/api/v4/projects/1139/pipeline" -H "PRIVATE-TOKEN: $user_token" -F "ref=$branch")

    status=$(echo "$response" | jq -r ".status")

    if [ "$status" == "failed" ]; then
        message="Không thể thực hiện lệnh build trên nhánh $branch vì nhánh không tồn tại."
    elif [ "$status" == "created" ]; then
        message="Đã thực hiện lệnh build trên nhánh $branch bởi người dùng $user!"
    else
        message="Không thể thực hiện lệnh build trên nhánh $branch."
    fi

    curl -X POST "https://api.telegram.org/bot$TOKEN/sendMessage" -d "chat_id=$chat_id" -d "text=$message"
}

# Lấy tin nhắn mới
function get_updates() {
    offset="$1"
    response=$(curl -s "https://api.telegram.org/bot$TOKEN/getUpdates?offset=$offset")
    echo "$response"
}

offset=0

while true; do
    updates=$(get_updates $offset)
    message_count=$(echo "$updates" | jq '.result | length')

    if [ "$message_count" -gt 0 ]; then
        for (( i = 0; i < $message_count; i++ )); do
            chat_id=$(echo "$updates" | jq -r ".result[$i].message.chat.id")
            text=$(echo "$updates" | jq -r ".result[$i].message.text")

            if [[ "$text" == "/build "* ]]; then
                user_and_branch="${text#/build }"
                handle_build "$chat_id" "$user_and_branch"
            fi

            update_id=$(echo "$updates" | jq -r ".result[$i].update_id")
            offset=$((update_id + 1))
        done
    fi

    sleep 1
done