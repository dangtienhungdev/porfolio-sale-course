!#/bin/bash

# cài đặt java 11
apt install openjdk-11-jdk -y

# kiểm tra version java
java -version

# tải xuống tệp khóa gốc của Jenkins từ URL và sau đó thêm khóa này vào hệ thống để xác thực các gói phần mềm Jenkins trước khi cài đặt chúng
wget -p -O - https://pkg.jenkins.io/debian/jenkins.io.key | apt-key add -
sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
apt-get update
apt install jenkins -y
systemctl start jenkins
ufw allow 8080
ufw enable