import { Button, Carousel, Image } from "antd";
import Link from "next/link";
import mejpg from "../image/me.jpg";

export default function Home() {
  return (
    <div className=" bg-gradient-to-b from-slate-50 to-slate-700 h-screen">
      <div className="ml-20 ">
        <div className="flex ">
          <div>
            <Image
              alt="me"
              style={{ borderRadius: "0.75rem" }}
              width={1000}
              preview={false}
              src={mejpg.src}
            />
          </div>
          <div className="ml-10 mt-40">
            <h1 className="text-8xl">Zulfikar Ozturk 05170000066</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
