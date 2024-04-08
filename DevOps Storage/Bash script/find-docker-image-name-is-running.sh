#!/bin/bash

# Tìm container đang chạy với tên là "<projectname>"
container_id=$(docker ps -qf "name=<projectname>")

if [ -n "$container_id" ]; then
  # Lấy tên image của container
  image_name=$(docker inspect --format='{{.Config.Image}}' $container_id)

  # Lưu tên image vào biến
  image_variable=""

  if [ -n "$image_name" ]; then
    image_variable=$image_name
    echo "Container image found: $image_variable"
  else
    echo "Failed to retrieve container image."
  fi
else
  echo "Container '<projectname>' is not running."
fi

--------------------------------------------
#!/bin/bash

read -p "Enter the container name: " container_name

container_id=$(docker ps -qf "name=$container_name")

if [ -n "$container_id" ]; then
  # Lấy tên image của container
  image_name=$(docker inspect --format='{{.Config.Image}}' $container_id)

  # Lưu tên image vào biến
  image_variable=""

  if [ -n "$image_name" ]; then
    image_variable=$image_name
    echo "Container image found: $image_variable"
  else
    echo "Failed to retrieve container image."
  fi
else
  echo "Container $container_name is not running."
fi