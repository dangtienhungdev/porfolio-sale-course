import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const url = 'http://<IP_ADDRESS>:<port>/api/<api>';  // Thay thế bằng URL của API bạn muốn kiểm tra

  // Định nghĩa dữ liệu bạn muốn gửi đi trong yêu cầu POST
  const payload = JSON.stringify({
    "tranfer_date": "2023-06-14",
    "to_acc": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "amount": 123123123,
    "summary": "123123",
    "from_acc": "00000000-0000-0000-0000-000000000000",
    "tranfer_type": "1"
  });

  // Định nghĩa các tiêu đề yêu cầu nếu cần thiết
  const headers = {
    'Content-Type': 'application/json',
  };

  // Số lần lặp lại (200 yêu cầu)
  const iterations = 200;

  // Thời gian bắt đầu
  const startTime = new Date().getTime();

  // Gửi 500 yêu cầu POST trong 30 giây
  for (let i = 0; i < iterations; i++) {
    const response = http.post(url, payload, { headers });

    // Kiểm tra mã trạng thái của phản hồi
    if (response.status === 200) {
      console.log('Yêu cầu POST thành công!');
    } else {
      console.error('Yêu cầu POST không thành công.');
    }

    // Tính toán thời gian kết thúc hiện tại
    const currentTime = new Date().getTime();

    // Tính toán thời gian cần để hoàn thành 200 yêu cầu
    const elapsedTime = currentTime - startTime;

    // Nếu đã vượt quá 30 giây, thoát khỏi vòng lặp
    if (elapsedTime >= 30000) {
      break;
    }
  }
}

