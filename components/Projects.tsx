import projects from "@/data/projects";
import Image from "next/image";
import FadeInSection from "@/components/FadeInSection";

const Projects = () => (
    <section id="projects" className="min-h-screen p-8 bg-opacity-20 backdrop-blur-md scroll-mt-16">
        <div className="container mx-auto">
            <FadeInSection>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-text">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm transition duration-300 hover:bg-opacity-10 hover:shadow-lg transform hover:-translate-y-1">
                            <Image src={project.image} alt={`${project.title} Preview`} width={500} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-md sm:text-lg md:text-xl font-display font-semibold text-blue-400 mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                            <a href={project.link} className="text-blue-300 hover:text-blue-100 transition duration-300 text-sm sm:text-base">View Project →</a>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </div>
    </section>
);

export default Projects;
