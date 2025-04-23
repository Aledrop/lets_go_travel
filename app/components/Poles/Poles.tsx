import Image from "next/image";
import Offer from "./offer";

export default function Poles() {
  return (
    <section className="flex md:flex-row flex-col gap-6">
      <div className="flex flex-col gap-6 md:w-5/12 w-full">
        <Offer />
        <div className="relative">
          <span className="absolute uppercase md:text-6xl text-4xl font-bold text-white top-6 left-7">
            excursiones
          </span>
          <Image
            src="/images/excursiones.jpg"
            alt="Excursiones"
            width={620}
            height={320}
            className="rounded-[4.5rem] md:rounded-br-none"
          />
        </div>
        <div className="relative md:inline hidden">
          <span className="big-title text-orange-500 block">Aventuras</span>
          <span className="uppercase text-orange-500 font-bold px-10">que aventura prefieres</span>
          <Image src="/images/icoaventuras.png" alt="caribe" width={400} height={100} />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 md:w-7/12 w-full">
        <Image
          src="/images/caribe.png"
          alt="caribe"
          width={1000}
          height={100}
          className="rounded-[4.5rem] md:rounded-bl-none"
        />
        <Image
          src="/images/europa.png"
          alt="europa"
          width={1000}
          height={100}
          className="rounded-[4.5rem] md:rounded-bl-none"
        />
        <Image
          src="/images/asia.png"
          alt="asia"
          width={1000}
          height={100}
          className="rounded-[4.5rem] md:rounded-bl-none"
        />
        <Image
          src="/images/africa.png"
          alt="africa"
          width={1000}
          height={100}
          className="rounded-[4.5rem] md:rounded-bl-none"
        />
      </div>
    </section>
  );
}
