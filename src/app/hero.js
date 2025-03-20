import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex gap-12 justify-center items-center px-44 py-24 bg-stone-50 max-md:flex-col max-md:px-8 max-md:py-16 max-md:text-center max-sm:px-4 max-sm:py-10">
      <Image
        src="/20101152630160.jpg"
        alt="Andreasnovky Ramadani"
        width={279}
        height={279}
        layout="intrinsic"
        className="rounded-full bg-zinc-300 h-[500px] w-[500px] max-md:h-[200px] max-md:w-[200px] max-sm:h-[150px] max-sm:w-[150px]"
      />
      {/* <Image
          src="/20101152630160.jpg"
          style={{ width: "100%", height: "auto" }}
          width={500}
          height={500}
        /> */}
      {/* </div> */}
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-bold tracking-normal underline text-stone-900 max-md:text-5xl max-sm:text-4xl">
          Andreasnovky
        </h1>
        <p className="mt-6 text-3xl text-stone-900 max-md:text-2xl max-sm:text-xl">
          Welcome to my portofolio
        </p>
      </div>
    </section>
  );
};

export default Hero;
