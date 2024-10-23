import experiences from "@/data/experiences";
import FadeInSection from "@/components/FadeInSection";

const Experiences = () => {
    return (
        <section id="experiences" className="min-h-screen p-8 bg-opacity-20 backdrop-blur-md scroll-mt-16">
            <div className="container mx-auto">
                <FadeInSection>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-text">Experiences</h2>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-white bg-opacity-5 rounded-lg p-6 backdrop-blur-sm transition duration-300 hover:bg-opacity-10 hover:shadow-lg transform hover:-translate-y-1">
                                <h3 className="text-md sm:text-lg md:text-xl font-display font-semibold text-blue-400 mb-2">{exp.title}</h3>
                                <p className="text-gray-300 mb-2 text-sm sm:text-base">
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition duration-300">
                                        {exp.company}
                                    </a>
                                </p>
                                <ul className="list-disc list-inside text-gray-200 text-sm sm:text-base space-y-1">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Experiences;
