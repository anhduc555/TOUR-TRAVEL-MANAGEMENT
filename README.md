# Dự án Website Quản lý Tour Du lịch (Tour & Travel Management)

Dự án Website Quản lý Tour Du lịch là sản phẩm Bài tập lớn dành cho môn học Lập trình Javascript (Vanilla JS). Hệ thống được phát triển hoàn toàn ở phía máy khách (Client-side), áp dụng kiến trúc phân lớp hướng đối tượng và module hóa rõ ràng nhằm phân tách độc lập giữa giao diện hiển thị (UI), điều hướng sự kiện (Modules/Controllers), nghiệp vụ hệ thống (Services) và quản lý dữ liệu (Storage).

---

## Kiến trúc Phân lớp Hệ thống

Dự án được cấu trúc hóa theo các thư mục chức năng chính nhằm nâng cao tính tái sử dụng và khả năng bảo trì mã nguồn:

- **HTML/**: Chứa mã nguồn cấu trúc các trang chức năng như Trang chủ, Đặt tour, Tìm kiếm tour, Quản lý khách hàng và Đăng nhập.
- **CSS/**: Giao diện kiểu dáng đồng nhất toàn trang, thiết kế tối ưu hóa hiển thị trên nhiều thiết bị.
- **DATA/**: Lưu trữ dữ liệu cấu hình và tập dữ liệu khởi tạo ban đầu cho các danh mục tour du lịch, tài khoản hệ thống và thông tin mặc định.
- **STORAGE/**: Lớp trung gian đảm nhận nhiệm vụ giao tiếp với bộ nhớ trình duyệt (localStorage), đóng vai trò như một cơ sở dữ liệu tạm thời nhằm duy trì dữ liệu liên tục sau mỗi lần tải trang.
- **SERVICES/**: Tầng xử lý nghiệp vụ chính bao gồm kiểm tra dữ liệu đầu vào (validation), tính toán chi phí, phân tích cấu trúc vé đặt và định tuyến tài khoản.
- **UI/**: Thực hiện nhiệm vụ kết xuất (rendering) thông tin động lên giao diện HTML dựa trên cấu trúc DOM của trình duyệt.
- **MODULES/**: Đóng vai trò bộ lắng nghe và kiểm soát sự kiện tương tác từ người dùng (Event Listeners), điều phối luồng nghiệp vụ giữa giao diện và dịch vụ tương ứng.
- **UTILS/**: Các thư viện bổ trợ tiện ích dùng chung như định dạng tiền tệ, xử lý chuỗi ngày tháng năm.

---

## Các Tính năng Chính

- **Duyệt và Lọc Tour**: Hỗ trợ tìm kiếm nhanh theo từ khóa địa lý, lọc theo địa danh cụ thể hoặc khoảng giá được định cấu hình trước.
- **Đặt Tour Trực tuyến**: Form điền thông tin đặt tour tự động tính toán tổng tiền thanh toán theo thời gian thực dựa trên đơn giá và số lượng đăng ký.
- **Đăng ký và Đăng nhập**: Quản lý phiên truy cập của thành viên và lưu trữ thông tin khách hàng trực tiếp vào hệ thống lưu trữ trình duyệt.
- **Quản lý Thông tin Khách hàng & Vé**: Theo dõi danh sách hóa đơn đặt tour, liên kết thông tin khách hàng và mã số vé tương ứng.

---

## Quy trình Xử lý Dữ liệu (Data Flow)

Ứng dụng thực hiện tuần tự việc truyền dữ liệu qua các lớp nghiệp vụ chuyên biệt:

1. **Gửi yêu cầu**: Người dùng thực hiện tương tác trên giao diện HTML thông qua các phần tử nhập liệu hoặc nút bấm.
2. **Tiếp nhận sự kiện**: Tầng `MODULES` phát hiện sự kiện, thu thập dữ liệu và chuyển tiếp cho tầng `SERVICES`.
3. **Thực thi nghiệp vụ**: Tầng `SERVICES` kiểm duyệt tính hợp lệ của dữ liệu đầu vào và thực hiện tính toán giá trị nghiệp vụ cần thiết.
4. **Lưu trữ**: Dữ liệu sau khi xử lý thành công được chuyển qua tầng `STORAGE` để lưu trực tiếp vào `localStorage`.
5. **Cập nhật giao diện**: Tầng `UI` nhận kết quả xử lý thành công để tái cấu trúc lại tài liệu HTML DOM hiển thị cho người dùng.

---

## Hướng dẫn Khởi chạy Dự án

Để chạy thử nghiệm dự án này trên môi trường cục bộ:

### Cách 1: Khởi chạy trực tiếp từ tệp tin
1. Giải nén thư mục dự án trên thiết bị cá nhân.
2. Truy cập vào thư mục `HTML/`.
3. Nhấp đúp chuột hoặc kéo thả tệp tin `home.html` vào các trình duyệt web phổ biến hiện nay như Google Chrome, Microsoft Edge hoặc Mozilla Firefox.

### Cách 2: Khởi chạy qua Live Server (Khuyên dùng)
Để tránh các vấn đề xung đột đường dẫn tương đối khi liên kết giữa các tài nguyên:
1. Mở thư mục gốc của dự án bằng trình soạn thảo Visual Studio Code.
2. Khởi chạy tiện ích mở rộng Live Server từ tệp tin `HTML/home.html` để khởi động máy chủ ảo kiểm thử tại cổng mạng nội bộ của trình duyệt.

---

## Các Quy định Kiểm tra Tính Hợp lệ Đầu vào

- **Thông tin số điện thoại**: Phải là dãy số gồm đúng 10 ký tự số thuộc các đầu số hợp quy của nhà mạng Việt Nam bao gồm 03, 05, 07, 08, 09.
- **Số lượng vé đặt**: Bắt buộc là giá trị số nguyên dương lớn hơn hoặc bằng 1.
- **Định dạng thư điện tử (Email)**: Phải thuộc các miền dịch vụ thư điện tử tiêu chuẩn bao gồm @gmail.com, @yahoo.com hoặc @outlook.com.
