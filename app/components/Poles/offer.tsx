import Image from "next/image";

export default function Offer() {
  return (
    <div className="relative flex justify-between bg-orange-500 h-[720px] text-white rounded-[4.5rem] md:rounded-tl-none">
      <h2 className="md:absolute top-3 md:left-3 px-10 py-4 z-20 md:text-7xl text-5xl font-bold uppercase">
        OFERTAS PAQUETES
      </h2>
      <div className="absolute rounded-[100%] bg-blue-400 py-10 px-8 -rotate-6 top-36 right-3 z-0">
        <span className="text-5xl leading-10 font-extrabold">
          30% <br />
          OFF
        </span>
      </div>
      <Image
        src="/images/ele_map.png"
        alt="Familia viajando"
        width={300}
        height={100}
        className="absolute bottom-0 right-0 z-10"
      />
      <Image
        src="/images/familia.png"
        alt="Familia viajando"
        width={300}
        height={100}
        className="absolute bottom-0 left-0 z-20"
      />
    </div>
  );
}
