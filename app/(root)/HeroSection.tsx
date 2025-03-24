import Image from "next/image";

export default async function HeroSection() {
  return (
    <div className="relative w-[100vw] flex-shrink-0 grid grid-cols-3 min-h-[600px] overflow-y-hidden">
      <div className="flex justify-end items-center">
        <div className="w-[70%]">
          <h1 className="text-7xl font-bold">developer</h1>
          <p className="hidden md:block font-light">
            Product designer specialising in UI design and design systems.
          </p>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col justify-center items-start w-[70%]">
        <h1 className="text-7xl font-bold">ai expert</h1>
        <p className="hidden md:block font-light">
          Product designer specialising in UI design and design systems.
        </p>
      </div>
      <div className="absolute -z-10 w-full bottom-0">
        <Image
          src="/pictures/anuel.png"
          alt="Anuel cover photo"
          width={800}
          height={1000}
          className="w-[60vw] mx-auto grayscale"
        />
        <div className="absolute -z-10 bottom-0 left-1/3 w-[40%] h-[20%] rounded-2xl bg-[#9c40ff] p-4 blur-[300px]"></div>
        <div className="absolute -z-10 bottom-0 left-[30%] w-[45%] h-[13%] rounded-2xl bg-[#9c40ff] p-4 blur-3xl"></div>
      </div>
    </div>
  );
}
