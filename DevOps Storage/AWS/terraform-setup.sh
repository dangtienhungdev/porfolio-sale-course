#!/bin/bash

# Cập nhật hệ thống
sudo apt-get update

# Tải xuống Terraform và xác minh chữ ký
wget https://releases.hashicorp.com/terraform/1.0.2/terraform_1.0.2_linux_amd64.zip
wget https://releases.hashicorp.com/terraform/1.0.2/terraform_1.0.2_SHA256SUMS
wget https://releases.hashicorp.com/terraform/1.0.2/terraform_1.0.2_SHA256SUMS.sig

gpg --keyserver keyserver.ubuntu.com --recv-key 51852D87348FFC4C
gpg --verify terraform_1.0.2_SHA256SUMS.sig terraform_1.0.2_SHA256SUMS

# Xác minh kiểm tra SHA256 của Terraform.
shasum -a 256 -c terraform_1.0.2_SHA256SUMS 2>&1 | grep terraform_1.0.2_linux_amd64.zip | grep OK

# Giải nén và sao chép tệp Terraform vào thư mục /usr/local/bin
unzip terraform_1.0.2_linux_amd64.zip
sudo mv terraform /usr/local/bin/

echo "Terraform đã được cài đặt thành công!"
