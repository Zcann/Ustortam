import { Image } from "antd";


export default function MovieCard(props){
    return(
        <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	border sm:rounded-3xl p-8 flex space-x-8">
          <div className=" overflow-visible w-1/2">
            <Image
              preview={false}
              className="rounded-3xl shadow-lg"
              src= {props.source}
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">
                Film Adi
              </h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Film</div>
              <div className="text-lg text-gray-800">Yil</div>
            </div>
            <p className=" text-gray-400 max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore 
            </p>
            <div className="flex text-2xl font-bold text-a">Favourite</div>
          </div>
        </div>
      </div>
    )
}