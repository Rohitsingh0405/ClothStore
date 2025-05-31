"use client"
import Components from "./_components/page";

export default function App(){
  const render=()=>{
    <Components/>
  }
  return (
    
    <div className="">
      {/* Nav bar  */}
        <div className="flex bg-white items-center justify-between h-20 w-full fixed cursor-pointer ">

          <div className=""> LOGO</div>
          <div className="flex gap-5">
            <div>All</div>
            <div>Men</div>
            <div>Women</div>
            <div>Kid</div>
            <div>Accessories</div>
            <div>Sale</div>
          </div>
          <div className="flex">

          {/* Search BOx */}
          <div className="w-50 h-6 border-2 cursor-text"></div>
          <div>
            <img src="data:image/jpeg;base64,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" alt="cart" className=" h-5"/>
          </div>
          </div>
        </div>
        {/* For the big image with gradient */}
        <div className="w-full h-80 bg-amber-400 flex flex-col items-center justify-center ">
            <div className="flex  flex-col items-center font-bold text-white">
                <div className="text-4xl gap-y-5">Fashion Forward</div>
                <div className="mt-4">Discover the latest trends and timeless classics in our</div>
                <div>Currateed collection </div>
                <div className="bg-white rounded-3xl h-8 w-30 text-black flex items-center justify-center mt-4 cursor-pointer">Shop now</div>
            </div>
        </div>
        {/* Components of images */}
        <Components/>
        <Components/>
        <Components/>
        <Components/>
        <div onScroll={render}>
          
        </div>
    </div>
  )
}