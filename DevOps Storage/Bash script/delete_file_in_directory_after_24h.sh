#!/bin/bash

# Đường dẫn tới thư mục cần kiểm tra và xóa các tệp tin
directory="/datas/<projectname>"

# Tính toán thời gian hiện tại trừ đi 24h trước đó
time_threshold=$(date -d "24 hours ago" +%s)

# Sử dụng lệnh find để tìm và xóa các tệp tin cũ hơn 24 giờ trước
find "$directory" -type f -mmin +1440 -print0 | while read -d $'\0' file; do
    # Kiểm tra thời gian tạo/sửa đổi cuối cùng của tệp tin
    file_time=$(stat -c %Y "$file")

    # So sánh thời gian với ngưỡng 24 giờ
    if (( file_time < time_threshold )); then
        # Xóa tệp tin
        rm "$file"
        echo "Đã xóa $file"
    fi

done