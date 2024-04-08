import { check } from 'k6';
import http from 'k6/http';
import SQL from 'sql.js';

export default function () {
  // Chuỗi kết nối đến cơ sở dữ liệu
  const dbConnectionString = 'Server=<IP_ADDRESS>;Port=5432;Database=initial;User Id=postgres;Password=postgres;';

  // Câu lệnh SQL bạn muốn thực thi
  const sqlStatement = "INSERT INTO buget (acc_year, acc_month, buget_type, amount, summary, acc_account)
VALUES (2023, 6, 'expense', 500.50, 'Expense for marketing campaign', '123e4567-e89b-12d3-a456-426655440000')";

  // Kết nối đến cơ sở dữ liệu
  const dbFileData = http.get(dbConnectionString).body;
  const db = new SQL.Database(dbFileData);

  // Thực thi câu lệnh SQL
  const resultSet = db.exec(sqlStatement);

  // Kiểm tra kết quả của câu lệnh SQL
  check(resultSet, {
    'Câu lệnh SQL thành công': (result) => result.length > 0,
  });
}
