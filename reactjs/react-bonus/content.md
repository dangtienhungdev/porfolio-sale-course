# interview question
1. sự khác nhau giữ useState & useRef ?
2. dùng useRef & querySelector khác gì nhau
  -> về cơ bản cái DOM chúng ta làm nằm sẵn bên trong component rồi sẽ là như nhau
  -> tuy nhiên trong 1 số trường hợp như là: data trả database về nó trả về HTML luôn ví dụ như có thẻ span, div... thì mình k thể dùng useRef được vì nó nằm trong database trả ra, đucợ sinh ra ở bên ngoài web nên k thể truyền ref vào bên trong được -> dể xử lí được việc đó thì ta phải dùng đến querySelector

3. useEffect hoạt động như nào? và dùng để làm gì?
- khi component mounted -> useEffect mới chạy
- khi chạy chạy vào useEffect rồi sẽ chạy clean up trước -> chạy đến Effect chính -> lúc mà thoát khỏi component đi thì sẽ chạy vào clean up
4. sự khác nhau giữa useEffect & useLayoutEffect
5. khi làm việc với dropdown nằm trong div có thuộc tích overflow hidden thì sẽ bị cắt mất phần dropdown khi sổ xuống
-> dùng portal để xử lí
  -> portal là 1 cái xử lí nó sẽ đưa phần dom đó ra ngoài body và nó sẽ k bị phụ thuộc vào phần tử cha chứa nó
  -> khi đó ta sẽ căn vị trí bằng cách sử dụng js để sử lí. Dùng getBoundingClientRect để lấy ra vị trí của dropdown -> từ đó sẽ tính toàn sao cho phù hợp ở vị trí ta nhần vào
6. Compound Component
ex: 1 component có quá nhiều props mà các thành phần bên trong nó liên kết chặt chẽ với nhau
-> chia nhỏ nó ra thành các phần nhỏ và chúng ta sẽ dụng nó khi nào cần thôi
-> sử dụng context or redux
7. truyền dữ liệu giữa 2 component không liên quan đến nhau(3 cách phổ biến)
  c1. để chung 2 component này nào 1 component cha dùng state để truyền props xuống 2 component đó
  c2. sử dụng context
  c3. redux
  ngoài ra có thể sử dụng zustand
8. hàm map, filter, reduce, forEach, some, every
  -> sự khác nhau map, forEarch
  -> map & filter có giống nhau trong trường hợp nào hay không
    -> có giống nhau trong 1 vài trường hợp
    nếu mà filter không có điều kiện gì cả thì map và filter giống nhau luôn
  -> hàm some, every hoạt động như nào?
    -> some: trả về true or false
      nó sẽ trả về true khi chỉ cần 1 điều kiện đúng là được
    -> every: cũng trả về true và false
      nó sẽ trả về true khi tất cả các điều kiện là đúng không thì nó sẽ trả về false
  -> reduce: sẽ gom giá trị thành 1
9. sử dụng useReducer khi nào
-> thường dùng khi mà state của nó phức tạp
ex: như là object thì ta sẽ sử dụng useReducer