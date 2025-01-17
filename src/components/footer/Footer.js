import logoiStore from "../../assets/logo/logoiStore2.png";
import logoFacebook from "../../assets/logo/logoFacebook.png";
import logoTiktok from "../../assets/logo/logoTiktok.png";
import logoYoutube from "../../assets/logo/logoYoutube.png";

export default function Footer() {
  return (
    <div className="bg-[#000000] px-[120px] py-[80px]">
      <div className="flex justify-between">
        {/* Cột thông tin công ty */}
        <div className="w-[632px]">
          <img src={logoiStore} className="pb-5" alt="Logo iStore"></img>
          <p className="text-white">
            CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ ISTONE
          </p>
          <p className="text-white mt-3">
            Qua một thập kỷ tạo dựng uy tín, Istone được 30 công ty công nghệ nổi
            tiếng thế giới lựa chọn làm đối tác, cung cấp các dịch vụ phát triển
            thị trường (MES) tại Việt Nam.
          </p>
          <div className="flex gap-4 mt-5">
            <img src={logoFacebook} alt="Facebook" className="w-6 h-6"></img>
            <img src={logoTiktok} alt="Tiktok" className="w-6 h-6"></img>
            <img src={logoYoutube} alt="Youtube" className="w-6 h-6"></img>
          </div>
        </div>

        {/* Các cột chia nội dung */}
        <div className="grid grid-cols-3 gap-12">
          {/* Cột Thông tin */}
          <div className="text-white">
            <p className="font-bold pb-5">Thông tin</p>
            <ul className="space-y-2">
              <li>Tin tức</li>
              <li>Giới thiệu</li>
              <li>Phương thức thanh toán</li>
            </ul>
          </div>

          {/* Cột Chính sách */}
          <div className="text-white">
            <p className="font-bold pb-5">Chính sách</p>
            <ul className="space-y-2">
              <li>Giao hàng</li>
              <li>Bảo mật</li>
              <li>Đổi trả</li>
              <li>Bảo hành</li>
            </ul>
          </div>

          {/* Cột Địa chỉ & Liên hệ */}
          <div className="text-white">
            <p className="font-bold pb-5">Địa chỉ & Liên hệ</p>
            <ul className="space-y-2">
              <li>Tài khoản của tôi</li>
              <li>Đơn đặt hàng</li>
              <li className="flex gap-2">
                Mua hàng: <span className="text-[#0085FF]">123.456.7890</span>
              </li>
            </ul>
            <div className="mt-3">
              <ul className="space-y-2">
                <li>Nhánh 1: Khu vực Hà Nội và các tỉnh phía Bắc</li>
                <li>Nhánh 2: Khu vực Hồ Chí Minh và các tỉnh phía Nam</li>
              </ul>
            </div>
            <p className="flex gap-2 mt-3">
              Doanh nghiệp: <span className="text-[#0085FF]">036.636.xxx</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
