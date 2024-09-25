import notf from "../assets/notf.png";

export default function Notfound() {
  return (
    <div className="bg-white flex px-10 justify-between h-screen w-full">
      <div className="flex w-1/2 justify-center items-center">
        <img src={notf} alt="" className="w-[700px]" />
      </div>
      <div className="w-1/2 flex justify-center items-center flex-col">
        <h1 className="text-8xl font-Gagalin text-[#1b2c64]">4 0 4</h1>
        <h2 className="font-Robotomono text-4xl font-semibold">
          Oops,you&apos;re Lost
        </h2>
        
      </div>
    </div>
  );
}
