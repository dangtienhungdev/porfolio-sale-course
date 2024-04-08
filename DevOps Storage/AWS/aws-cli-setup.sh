#!/bin/bash

# Cập nhật hệ thống
sudo apt-get update

# Tải xuống và giải nén AWS CLI v2 
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip

# Cài đặt AWS CLI v2
sudo ./aws/install

echo "AWS CLI v2 đã được cài đặt thành công!"
