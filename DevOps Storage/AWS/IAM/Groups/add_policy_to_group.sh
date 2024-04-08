#!/bin/bash

# Tên của group và policy
group_name="DevOps"
policy_name="DevOpsPolicy"

# Lấy ARN của policy từ tên
policy_arn=$(aws iam list-policies --query "Policies[?PolicyName=='$policy_name'].Arn" --output text)

if [[ -z $policy_arn ]]; then
  echo "Không tìm thấy policy với tên $policy_name"
  exit 1
fi

# Thêm policy vào group
aws iam attach-group-policy --group-name "$group_name" --policy-arn "$policy_arn"

# Kiểm tra policy đã được thêm vào group hay chưa
result=$(aws iam list-attached-group-policies --group-name "$group_name" --query "AttachedPolicies[?PolicyName=='$policy_name']")

if [[ -n $result ]]; then
  echo "Policy đã được thêm vào group thành công."
else
  echo "Không thể thêm policy vào group."
fi
