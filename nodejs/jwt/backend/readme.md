1. authentication
  - so sánh dữ liệu mà mình nhập với dữ liệu mà db của mình đã có
2. authorization
  - bạn là ai, bạn có quyền làm gì -> phân quyền
3. json-webtoken
  - giúp cho mình mỗi khi có người đăng nhập vào sẽ cho mình 1 cái token.Token này rất là dài với mã hóa khác nhau. trong mã này sẽ incript những thông tin mà mình muốn
  => gọi là json web token
  - muốn tạo jwt -> sign
  - muốn chứng nhận jwt -> verify
4. các cách lưu trữ
  1. local storage
  2. cookie storage
  3. redux storage -> access token
    httponly cookie -> refresh token
  => tóm lại
    - access token -> gắn vào header khi ta muốn verify token
    - refresh token -> refresh token lưu trữ ở đâu đó khi nào access token hết hạn thì lấy refresh token ra để tạo 1 access token mới => nếu không có refresh token thì người dùng phải đăng nhập lại thì rất là phiền