1. authentication
  - so sánh dữ liệu mà mình nhập với dữ liệu mà db của mình đã có
2. authorization
  - bạn là ai, bạn có quyền làm gì -> phân quyền
3. json-webtoken
  - giúp cho mình mỗi khi có người đăng nhập vào sẽ cho mình 1 cái token.Token này rất là dài với mã hóa khác nhau. trong mã này sẽ incript những thông tin mà mình muốn
  => gọi là json web token
  - muốn tạo jwt -> sign
  - muốn chứng nhận jwt -> verify