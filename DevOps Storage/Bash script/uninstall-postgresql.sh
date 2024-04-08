#!/bin/bash

# Dừng các dịch vụ PostgreSQL
sudo systemctl stop postgresql

# Gỡ cài đặt các gói PostgreSQL
sudo apt-get purge -y postgresql-14 postgresql-client-14 postgresql-contrib-14 postgresql-common postgresql-client-common
# Xóa các thư mục và tệp liên quan đến PostgreSQL
sudo rm -rf /etc/postgresql/14/
sudo rm -rf /var/lib/postgresql/14/
sudo rm -rf /var/log/postgresql/

# Xóa người dùng và nhóm PostgreSQL
sudo deluser postgres
sudo delgroup postgres

# Kiểm tra xem PostgreSQL đã được gỡ bỏ thành công
dpkg -l | grep postgresql