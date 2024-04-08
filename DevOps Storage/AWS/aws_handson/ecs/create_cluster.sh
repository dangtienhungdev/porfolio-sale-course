#!/bin/bash

# Nhập tên cluster từ bàn phím
read -p "Nhập tên cluster: " cluster_name

# Kiểm tra xem cluster đã tồn tại hay chưa
existing_cluster=$(aws ecs describe-clusters --clusters $cluster_name --query 'clusters[0].clusterArn' --output text 2>/dev/null)

if [[ $existing_cluster == "None" ]]; then
  echo "Cluster chưa tồn tại."
else
  echo "Cluster đã tồn tại: $existing_cluster"
  exit 1
fi

# Tạo cluster
aws ecs create-cluster --cluster-name $cluster_name

echo "Cluster $cluster_name đã được tạo thành công."
