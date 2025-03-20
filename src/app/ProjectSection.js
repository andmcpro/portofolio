import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="p-16 bg-stone-50 max-sm:px-4 max-sm:py-8">
      <header className="text-center">
        <h2 className="text-2xl font-bold text-stone-900">
          Project yang pernah dibuat
        </h2>
        <p className="mt-2 text-xl text-neutral-500">latihan</p>
      </header>
      <div className="flex flex-col gap-6 mt-12">
        {[...Array(3)].map((_, index) => (
          <ProjectCard
            key={index}
            image="https://placehold.co/160x160/d9d9d9/d9d9d9"
            title="Title"
            description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
