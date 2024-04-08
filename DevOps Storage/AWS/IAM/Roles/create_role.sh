#!/bin/bash

role_name="DevOpsRoles"

# Kiểm tra sự tồn tại của vai trò
aws iam get-role --role-name "$role_name" >/dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "$role_name đã tồn tại."
else
    aws iam create-role --role-name DevOpsRoles --assume-role-policy-document file://devops-roles-policy.json
    echo "Tạo $role_name thành công."
fi
