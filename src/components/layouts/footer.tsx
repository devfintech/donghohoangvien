import { openLinkInNewTab } from "@/utils/common"
import { FC } from "react"
import { Container } from "./container"

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-[#1e1e1e]">
      <Container>
        <div className="grid grid-cols-3 gap-6 py-6">
          <div className="">
            <h1 className="font-bold text-[#fb9200]">THÔNG TIN BẢN QUYỀN</h1>
            Quyền sở hữu và bản quyền website này thuộc:
            <h1 className="font-bold">CÔNG TY CỔ PHẦN ĐỒNG HỒ HOÀNG VIÊN</h1>
            Trụ sở chính: Số 19 Hàng Khay, Phường Tràng Tiền, Quận Hoàn Kiếm, Thành phố Hà Nội, Việt Nam. <br />
            Mã số doanh nghiệp: ######## do Sở kế hoạch và đầu tư thành phố Hà Nội cấp ngày 27/02/2017
          </div>
          <div className="">
            <h1 className="font-bold text-[#fb9200]">TRUNG TÂM BẢO HÀNH</h1>
            Liên hệ Hotline: <h1>0376595888</h1>
          </div>

          <div
            className="cursor-pointer bg-[url('/clock/donghonam.jpg')] bg-contain bg-no-repeat"
            onClick={() => openLinkInNewTab("https://www.facebook.com/vien.hoang.5680")}
          >
            FACEBOOK
          </div>
        </div>
      </Container>
    </footer>
  )
}
