import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo và thông tin liên hệ */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-lg">THREE O&apos;CLOCK</span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <h3 className="font-semibold text-black mb-3">
                THÔNG TIN LIÊN HỆ
              </h3>
              <p>
                <span className="font-medium">Email:</span>{" "}
                contact@threeclock.vn
              </p>
              <p>
                <span className="font-medium">Địa chỉ:</span> 771 - 773 - 775
                Trần Hưng Đạo, Phường 01, Quận 5, Thành phố Hồ Chí Minh, Việt
                Nam
              </p>
              <p>
                <span className="font-medium">Điện thoại:</span> (028) 7772 2772
              </p>
              <p>
                <span className="font-medium">
                  Giấy chứng nhận Đăng ký Doanh nghiệp số:
                </span>{" "}
                0314140463 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp
                ngày 02/12/2016
              </p>
            </div>
          </div>

          {/* THREE O'CLOCK */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">THREE O&apos;CLOCK</h3>
            <p className="text-sm text-gray-600">
              Tại gian hàng THREE O&apos;CLOCK để đặt và giao hàng
            </p>
          </div>

          {/* Đối tác giao hàng */}
          <div>
            <h3 className="font-bold text-lg mb-4">CÁC ĐỐI TÁC GIAO HÀNG</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">GrabFood</span>
                <span className="text-sm font-medium">ShopeeFood</span>
                <span className="text-sm font-medium">beFood</span>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">
                  THAM GIA MXH CỦA THREE O&apos;CLOCK
                </h4>
                <div className="flex space-x-3">
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
