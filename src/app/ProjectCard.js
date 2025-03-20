const ProjectCard = ({ image, title, description }) => {
  return (
    <article className="flex gap-6 p-6 rounded border border-solid bg-stone-50 border-stone-900 border-opacity-10 max-md:flex-col max-md:items-center max-md:text-center">
      <img
        src={image}
        alt="Project"
        className="object-cover w-40 h-40 max-md:w-full max-md:h-auto max-md:max-w-[300px]"
      />
      <div className="flex flex-col flex-1 gap-4">
        <h3 className="text-2xl font-bold text-stone-900">{title}</h3>
        <p className="text-base text-neutral-500">{description}</p>
        <button className="p-3 text-base rounded border border-solid cursor-pointer bg-stone-900 bg-opacity-10 border-stone-900 border-opacity-20 text-stone-900 w-fit max-md:w-full">
          Button
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
