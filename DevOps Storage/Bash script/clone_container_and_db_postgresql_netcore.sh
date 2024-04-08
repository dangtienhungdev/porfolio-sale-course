#!/bin/bash

read -p "Enter the container name: " container_name
read -p "Enter the company name: " company_name
read -p "Enter the app port: " port_app
read -p "Start now? (y/n): " check_start_now

container_id=$(docker ps -qf "name=$container_name")
port_container=80
if [ -n "$container_id" ]; then
  # Lấy tên image của container
  image_name=$(docker inspect --format='{{.Config.Image}}' "$container_id")
  container_new="$container_name-$company_name"

  # Lưu tên image vào biến
  image_variable=""

  if [ -n "$image_name" ]; then
    image_variable="$image_name"
    #echo "Container image found: $image_variable"
    new_image="$image_variable-$company_name"
    docker tag "$image_variable" "$new_image"
    #echo "New docker image: $new_image"
    if [ -n "$new_image" ] && [ "$check_start_now" == 'y' ]; then
      docker run --name "$container_new" -dp "$port_app":"$port_container" "$new_image"
      # clone database
      docker exec -it $container_new bash -c 'PGPASSWORD=postgres pg_dump -h <IP_ADDRESS> -p 5432 -U postgres -d initial -f initial.sql'
      docker exec -it $container_new bash -c "PGPASSWORD=postgres psql -h <IP_ADDRESS> -p 5432 -U postgres -c \"CREATE DATABASE \\\"initial.$company_name\\\";\""
      docker exec -it $container_new bash -c "PGPASSWORD=postgres psql -h <IP_ADDRESS> -p 5432 -U postgres -d \"initial.$company_name\" -f initial.sql"
      # Update config database new service
      docker exec -it $container_new sed -i "s/initial/initial.$company_name/g" appsettings.json
      docker restart $container_new
      echo "Clone service success!"
    else
      echo "New service created but not running immediately."
    fi
  else
    echo "Failed to retrieve container image."
  fi
else
  echo "Container $container_name is not running."
fi
