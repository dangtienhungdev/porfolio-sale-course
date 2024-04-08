
#!/bin/bash

## B1 tạo file bash script cài đặt tự động backup

# Thư mục đích để lưu trữ các bản backup
backup_dir="/path/to/backup/directory"

# Tên tệp backup, ví dụ backup_20230524_1200.sql
backup_file="backup_$(date +%Y%m%d_%H%M).sql"

# Số lượng bản backup tối đa cần giữ lại
max_backups=5

# Thực hiện backup
pg_dump -U postgres -h localhost -p 5432 -Fc -f "$backup_dir/$backup_file" database_name

# Xóa các bản backup cũ nếu vượt quá số lượng tối đa
backups=($backup_dir/backup_*.sql)
num_backups=${#backups[@]}
if [ $num_backups -gt $max_backups ]; then
    num_to_delete=$((num_backups - max_backups))
    backups_to_delete=("${backups[@]:0:$num_to_delete}")
    rm "${backups_to_delete[@]}"
fi


## B2 cấp quyền thực thi cho file script
chmod +x backup_script.sh

## B3 Sử dụng crontab để lập lịch
crontab -e
0 */5 * * * /path/to/backup_script.sh
