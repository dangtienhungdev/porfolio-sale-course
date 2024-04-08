#!/bin/bash

# Developer
while IFS= read -r username; do
    # Kiểm tra xem người dùng đã có trong nhóm Developer hay chưa
    groups=$(aws iam list-groups-for-user --user-name "$username" --query "Groups[].GroupName" --output text)
    if [[ $groups =~ Developer ]]; then
        echo "Người dùng $username đã có trong nhóm Developer, bỏ qua"
    else
        aws iam add-user-to-group --group-name Developer --user-name "$username"
        echo "Người dùng $username đã được thêm vào nhóm Developer"
    fi
done < devUserList.txt

# Devops Engineer
while IFS= read -r username; do
    # Kiểm tra xem người dùng đã có trong nhóm DevOps hay chưa
    groups=$(aws iam list-groups-for-user --user-name "$username" --query "Groups[].GroupName" --output text)
    if [[ $groups =~ DevOps ]]; then
        echo "Người dùng $username đã có trong nhóm DevOps, bỏ qua"
    else
        aws iam add-user-to-group --group-name DevOps --user-name "$username"
        echo "Người dùng $username đã được thêm vào nhóm DevOps"
    fi
done < devopsUserList.txt
