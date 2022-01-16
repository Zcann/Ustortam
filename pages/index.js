import {  Image } from "antd";
import mejpg from "../image/me.jpg";

export default function Home() {
  return (
    <div className=" bg-gradient-to-b from-slate-50 to-slate-700 h-screen">
      <div className=" w-3/4 m-auto   ">
        <div className="inline lg:flex  ">
          <div className="max-w-xl mx-auto  ">
            <div className="h-20">

            </div>
            <Image
              alt="me"
              style={{ borderRadius: "0.75rem" }}
              preview={false}
              src={mejpg.src}
            />
          </div>
          <div className=" mx-auto my-auto text-4xl font-bold text-sky-600 px-5">
            <p className="text-center"> 
            Zulfikar Ozturk 05170000066
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
