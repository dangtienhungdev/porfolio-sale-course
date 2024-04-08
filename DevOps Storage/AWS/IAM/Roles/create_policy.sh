#!/bin/bash

policy_arn=$(aws iam create-policy --policy-name DevOpsPolicy --policy-document file://devops-policy.json \
    --query 'Policy.Arn' --output text)

if [ $? -eq 0 ]; then
    echo "Successfully created policy with ARN: $policy_arn"
else
    echo "Failed to create policy"
fi
