import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="p-16 bg-stone-50 max-sm:px-4 max-sm:py-8">
      <header className="text-center">
        <h2 className="text-2xl font-bold text-stone-900">
          Project yang pernah dibuat
        </h2>
        <p className="mt-2 text-xl text-neutral-500"></p>
      </header>
      <div className="flex flex-col gap-6 mt-12">
        {/* {[...Array(3)].map((_, index) => (
          <ProjectCard
            key={index}
            image=""
            title="Title"
            description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
          />
        ))} */}
        <ProjectCard
          key={1}
          image="/kanker.png"
          title="Aplikasi diagnosa penyakit kanker mulut menggunakan metode BACKWARD CAHINING dan CERTAINTY FACTOR"
          description="sistem pakar menggunakan metode backward chaining dan certainty factor sistem pakar ini digunkaan unutk diagnosa penyakit kanker mulut namun belum sempurna karena tidak adanya otomatisasi jika ada yang dapat menambahkan mungkin bisa langsung kontak linkedin saya terimakasih"
          link="https://github.com/andmcpro/sistem-pakar-BW-CF"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
