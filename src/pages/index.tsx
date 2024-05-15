import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@radix-ui/themes/styles.css";
import { Button, Theme } from "@radix-ui/themes";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Preview1 from "@/assets/preview/1.png";
import Preview2 from "@/assets/preview/2.png";
import Preview3 from "@/assets/preview/3.png";
import Feature from "@/components/Home/Feature";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Theme appearance="dark" style={{ background: "inherit" }}>
      <main className={`${inter.className}`}>
        {/* <Navbar /> */}
        <div className="w-[90%] md:w-[60%] m-auto flex flex-col items-center">
          <h1 className="text-5xl mt-24 mx-12 text-center">
            最簡單上手、功能強大的「幻獸帕魯」全圖形化伺服器架設工具
          </h1>
          <h2 className="mt-12 text-text1 text-center text-xl">
            palserver GUI
            提供一鍵式啟動支援、全圖形化介面、零門檻架設專用伺服器。除此之外，palserver
            GUI
            提供了一系列完整功能涵蓋效能監測、最佳化、日誌及備份系統以及更豐富的管理員權限等。
          </h2>
          <div className="flex mt-8 gap-4">
            <Button size="3">安裝穩定版 v0.4.2</Button>
            <Button size="3" color="gray">
              查看完整功能
            </Button>
          </div>
          <img className="w-full mt-8" src={Preview1.src} />
          {/* <div className="w-screen sm:w-[1000px] mt-16">
            <Swiper pagination={true} modules={[Pagination]}>
              <SwiperSlide>
                <div className="mb-8">
                  <img src={Preview1.src} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Preview2.src} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Preview3.src} />
              </SwiperSlide>
            </Swiper>
          </div> */}
          <Feature />
        </div>
      </main>
    </Theme>
  );
}
