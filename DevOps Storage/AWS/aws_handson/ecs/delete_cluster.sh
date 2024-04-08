#!/bin/bash

read -p "Enter the name of the cluster to delete: " cluster_name

# Kiểm tra nếu tên cluster không được cung cấp
if [ -z "$cluster_name" ]; then
  echo "Cluster name is required."
  exit 1
fi

# Xác nhận xóa cluster
read -p "Are you sure you want to delete cluster '$cluster_name'? This will delete all associated resources. (y/n): " confirm

if [ "$confirm" != "y" ]; then
  echo "Cluster deletion canceled."
  exit 1
fi

# Lấy danh sách service trong cluster
services=$(aws ecs list-services --cluster "$cluster_name" --output text --query "serviceArns[]")

# Xóa các service trong cluster
for service in $services; do
  echo "Deleting service: $service"
  aws ecs delete-service --cluster "$cluster_name" --service "$service" --force
done

# Đợi cho tất cả các service được xóa hoàn toàn
aws ecs wait services-inactive --cluster "$cluster_name"

# Lấy danh sách task trong cluster
tasks=$(aws ecs list-tasks --cluster "$cluster_name" --output text --query "taskArns[]")

# Xóa các task trong cluster
for task in $tasks; do
  echo "Stopping task: $task"
  aws ecs stop-task --cluster "$cluster_name" --task "$task"
done

# Lấy danh sách container instances trong cluster
container_instances=$(aws ecs list-container-instances --cluster "$cluster_name" --output text --query "containerInstanceArns[]")

# Xóa các container instances trong cluster
for instance in $container_instances; do
  echo "Deregistering container instance: $instance"
  aws ecs deregister-container-instance --cluster "$cluster_name" --container-instance "$instance" --force
done

# Xóa cluster
echo "Deleting cluster: $cluster_name"
aws ecs delete-cluster --cluster "$cluster_name"

echo "Cluster deletion completed."
