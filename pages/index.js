import {  Image } from "antd";
import mejpg from "../image/me.jpg";

export default function Home() {
  return (
    <div className=" bg-gradient-to-b from-slate-50 to-slate-700 h-screen">
      <div className=" w-3/4 m-auto  ">
        <div className="inline  sm:flex ">
          <div className="max-w-xl ">
            <Image
              alt="me"
              style={{ borderRadius: "0.75rem" }}
              preview={false}
              src={mejpg.src}
            />
          </div>
          <div className="w-1/4 mx-auto my-auto text-xl">
            <p className="break-words"> 
            Zulfikar Ozturk 05170000066
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
