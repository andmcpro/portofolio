import FooterSection from "./FooterSection";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const sections = [
    {
      title: "Bahasa Pemograman",
      links: [
        "HTML",
        "PHP",
        "JavaScript",
        "CSS",
        "Python (learning)",
        "Online whiteboard",
        "Team collaboration",
      ],
    },
    {
      title: "Explore",
      links: [
        "Design",
        "Prototyping",
        "Development features",
        "Design systems",
        "Collaboration features",
        "Design process",
        "FigJam",
      ],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Best practices",
        "Colors",
        "Color wheel",
        "Support",
        "Developers",
        "Resource library",
      ],
    },
  ];

  return (
    <footer className="flex flex-wrap gap-4 p-8 border-t border-solid bg-stone-50 border-t-stone-900 border-t-opacity-10 max-sm:flex-col max-sm:px-4 max-sm:py-8">
      <div className="flex flex-col gap-3 w-[262px] max-sm:w-full">
        <SocialIcons />
      </div>
      {sections.map((section, index) => (
        <FooterSection
          key={index}
          title={section.title}
          links={section.links}
        />
      ))}
    </footer>
  );
};

export default Footer;
