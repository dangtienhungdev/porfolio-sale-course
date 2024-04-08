# Thêm SQL Server package repository vào danh sách các nguồn
sudo su
curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
curl https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/prod.list > /etc/apt/sources.list.d/mssql-release.list
exit

# Cập nhật danh sách các gói
sudo apt-get update

# Cài đặt SQL Server Command Line Tools (sqlcmd)
sudo apt-get install -y mssql-tools unixodbc-dev

# Thêm đường dẫn của sqlcmd vào biến PATH
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
sqlcmd -v