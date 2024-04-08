import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const url = 'http://<IP_ADDRESS>/Account/Login';  // Thay thế bằng URL đăng nhập của API bạn muốn kiểm tra

  // Định nghĩa dữ liệu đăng nhập
  const payload = JSON.stringify({
    username: '<username>',
    password: '<password>',
  });

  // Định nghĩa các tiêu đề yêu cầu nếu cần thiết
  const headers = {
    'Content-Type': 'application/json',
  };

  // Gửi yêu cầu POST để đăng nhập
  const response = http.post(url, payload, { headers });

  // Kiểm tra mã trạng thái của phản hồi để xác định quá trình đăng nhập thành công hay không
  if (response.status === 200) {
    console.log('Đăng nhập thành công!');
    // Lưu trữ thông tin đăng nhập hoặc token truy cập (nếu có) để sử dụng trong các yêu cầu tiếp theo
    // Ví dụ: const accessToken = response.json('access_token');
  } else {
    console.error('Đăng nhập không thành công.');
  }

  // Tạm dừng một khoảng thời gian giữa các yêu cầu
  sleep(1);
}