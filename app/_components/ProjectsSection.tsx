import Link from "next/link";
import { portfolioProjects } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div className="py-4 sm:py-8 mb-5" id="work"> {/* Increased bottom margin to mb-12 */}
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My Contributions / Projects
        </h2>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://github.com/acozy03" target="_blank">
            All Projects
          </Link>
        </ShinyButton>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
