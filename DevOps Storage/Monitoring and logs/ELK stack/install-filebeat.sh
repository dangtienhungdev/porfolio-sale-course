#!/bin/bash

# Cập nhật hệ thống
sudo apt update

# Cài đặt các gói cần thiết
sudo apt install -y apt-transport-https wget

# Tải xuống và cài đặt GPG key của Elastic
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

# Thêm kho lưu trữ Elastic vào danh sách nguồn
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list

# Cập nhật hệ thống để áp dụng thay đổi mới
sudo apt update

# Cài đặt Filebeat
sudo apt install -y filebeat

# Sao chép file cấu hình mẫu
sudo cp /etc/filebeat/filebeat.yml /etc/filebeat/filebeat.yml.bak

# Cấu hình Filebeat để gửi log đến Elasticsearch hoặc Logstash
#sudo sed -i 's/#output.elasticsearch:/output.elasticsearch:/g' /etc/filebeat/filebeat.yml
#sudo sed -i 's/hosts: \["localhost:9200"\]/hosts: \["your_elasticsearch_server:9200"\]/g' /etc/filebeat/filebeat.yml
# Nếu bạn muốn gửi log đến Logstash, hãy sử dụng các dòng sau:
sudo sed -i 's/#output.logstash:/output.logstash:/g' /etc/filebeat/filebeat.yml
sudo sed -i 's/hosts: \["localhost:5044"\]/hosts: \["10.32.3.110:5044"\]/g' /etc/filebeat/filebeat.yml

# Bật dịch vụ Filebeat
sudo systemctl enable filebeat
sudo systemctl start filebeat
