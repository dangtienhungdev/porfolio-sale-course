export function total(a: number, b: number): number {
	return a + b;
}

total(4, 5);

/*
string[] -> ['dang', 'tien', 'hung']
tuple -> [number, string] = [12345, 'dang tien hung']
enum -> là tập hợp các hằng số
  ex: const permision {
    ADMIN, EDITOR, MODERATOR
  }
literal -> chỉ được sử dụng dữ liệu cố định
  ex: type Age = 18 | 40 | 22; -> chỉ được sử dụng 1 trong 3 số 18, 40, 22 không được sử dụng số khác
function
  1. có return trả về giá trị
  ex: function total(a: number, b: number): number {}
  2. hàm xử lí công việc không trả về gì cả
  ex: function total(a: number, b: number): void {}
*/
