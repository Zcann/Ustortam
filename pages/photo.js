import { Button, Carousel, Image } from "antd";
import landscape from "../image/landscape.jpg";
import mountain from "../image/mountain.jpg";

export default function Photo() {
  return (
    <div className=" bg-gradient-to-b from-slate-50 to-slate-700 h-full">
      <div className="h-screen ">
        <Carousel autoplay dotPosition="top" >
          <div className=" text-center mt-20 drop-shadow-2xl ">
            <Image
              style={{borderRadius: "0.75rem" }}
              width={1000}
              alt="me"
              src={landscape.src}
              preview={false}
            />
          </div>
          <div className="text-center mt-20 drop-shadow-2xl">
            <Image
              style={{ borderRadius: "0.75rem" }}
              width={1000}
              alt="me"
              src={mountain.src}
              preview={false}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
