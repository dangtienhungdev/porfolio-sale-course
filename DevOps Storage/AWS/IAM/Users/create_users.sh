#!/bin/bash

while IFS=',' read -r username email; do
    password="#FromElroyDevOpsWithLove" # Giá trị mật khẩu cụ thể

    # Kiểm tra sự tồn tại của người dùng
    existing_user=$(aws iam get-user --user-name "$username" 2>/dev/null)
    if [ -n "$existing_user" ]; then
        echo "Người dùng $username đã tồn tại. Bỏ qua..."
        continue
    fi

    # Tạo người dùng mới nếu chưa tồn tại
    aws iam create-user --user-name "$username" --tags Key=Email,Value="$email"
    aws iam create-login-profile --user-name "$username" --password "$password" --password-reset-required
    echo "Người dùng $username đã được tạo với mật khẩu: $password"
done < userlist.txt
