#!/bin/bash

# Các thông số kết nối tới PostgreSQL server nguồn
SRC_HOST="localhost"
SRC_PORT="5432"
SRC_USER="username"
SRC_PASSWORD="password"

# Các thông số kết nối tới PostgreSQL server đích
DEST_HOST="remote_host"
DEST_PORT="5432"
DEST_USER="username"
DEST_PASSWORD="password"

# Tạo thư mục backup
BACKUP_DIR="/path/to/backup/directory"
mkdir -p $BACKUP_DIR

# Lấy danh sách tất cả các database trong PostgreSQL server nguồn
databases=$(PGPASSWORD=$SRC_PASSWORD psql -h $SRC_HOST -p $SRC_PORT -U $SRC_USER -Atc "SELECT datname FROM pg_database WHERE datistemplate = false")

# Backup từng database và khôi phục vào PostgreSQL server đích
for db in $databases
do
    # Tạo tên file backup dựa trên tên database và thời gian
    timestamp=$(date +%Y%m%d%H%M%S)
    backup_file="$BACKUP_DIR/${db}_${timestamp}.sql"

    # Tạo bản sao lưu của database
    PGPASSWORD=$SRC_PASSWORD pg_dump -h $SRC_HOST -p $SRC_PORT -U $SRC_USER -F p -f $backup_file $db

    # Khôi phục bản sao lưu vào PostgreSQL server đích
    PGPASSWORD=$DEST_PASSWORD psql -h $DEST_HOST -p $DEST_PORT -U $DEST_USER -d postgres -c "CREATE DATABASE $db"
    PGPASSWORD=$DEST_PASSWORD psql -h $DEST_HOST -p $DEST_PORT -U $DEST_USER -d $db -f $backup_file

    echo "Đã backup và khôi phục database $db"
done