#!/bin/bash

# Hàm kiểm tra xem ECR đã tồn tại hay chưa
check_ecr_existence() {
  local repository_name=$1
  aws ecr describe-repositories --repository-names "$repository_name" >/dev/null 2>&1
}

# Hàm công khai ECR
make_ecr_public() {
  local repository_name=$1
  aws ecr set-repository-policy --repository-name "$repository_name" --policy-text '{"Version":"2008-10-17","Statement":[{"Sid":"PublicAccess","Effect":"Allow","Principal":"*","Action":["ecr:GetDownloadUrlForLayer","ecr:BatchGetImage","ecr:BatchCheckLayerAvailability","ecr:PutImage","ecr:InitiateLayerUpload","ecr:UploadLayerPart","ecr:CompleteLayerUpload"],"Condition":{}}]}'
}

# Hàm in ra URL của repository
print_repository_url() {
  local repository_name=$1
  aws ecr describe-repositories --repository-names "$repository_name" --query 'repositories[].repositoryUri' --output text
}

# Nhập tên repository từ bàn phím
read -p "Nhập tên repository: " repository_name

# Nhập quyền truy cập từ bàn phím (private hoặc public)
read -p "Nhập quyền truy cập (private/public): " access_type

# Kiểm tra xem ECR đã tồn tại hay chưa
if check_ecr_existence "$repository_name"; then
  echo "Repository '$repository_name' đã tồn tại."
else
  echo "Repository '$repository_name' chưa tồn tại. Đang tạo mới..."
  # Tạo repository
  aws ecr create-repository --repository-name "$repository_name"
  echo "Đã tạo repository '$repository_name' thành công."

  # Cấu hình quyền truy cập
  if [[ "$access_type" == "public" ]]; then
    make_ecr_public "$repository_name"
    echo "Repository '$repository_name' đã được công khai."
  else
    echo "Repository '$repository_name' sẽ được giữ là private."
  fi

  # In ra URL của repository
  repository_url=$(print_repository_url "$repository_name")
  echo "URL của repository '$repository_name': $repository_url"
fi
