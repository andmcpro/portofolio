"use client";
import Image from "next/image";

const ProjectCard = ({ image, title, description, link }) => {
  const handleClick = () => {
    window.open(link);
  };
  return (
    <article className="flex gap-6 p-6 rounded border border-solid bg-stone-50 border-stone-900 border-opacity-10 max-md:flex-col max-md:items-center max-md:text-center">
      <Image
        src={image}
        alt="Project"
        width={100}
        height={100}
        className="object-cover w-40 h-40 max-md:w-full max-md:h-auto max-md:max-w-[300px]"
      />
      <div className="flex flex-col flex-1 gap-4">
        <h3 className="text-2xl font-bold text-stone-900">{title}</h3>
        <p className="text-base text-neutral-500">{description}</p>
        <button
          className="p-3 text-base rounded border border-solid cursor-pointer bg-stone-200 bg-opacity-10 border-stone-400 border-opacity-20 text-stone-600 w-fit max-md:w-full"
          onClick={handleClick}
        >
          Lihat
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
