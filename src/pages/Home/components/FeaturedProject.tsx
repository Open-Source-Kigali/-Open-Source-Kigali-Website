import { NavLink } from "react-router";
import EyebrowLabel from "@/components/UI/EyebrowLabel";
import {  useProjects } from "@/hooks";
import youthImg from "@/assets/images/Youth meetup.jpg";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";
import { Loader} from "@/components/UI";

const FeaturedProject = () => {
    const { projects,loading: projectsLoading,error: projectsError} = useProjects();
    const homeProjects = projects.slice(0, 4);
    const featuredProject = homeProjects[0];
    const PROJECT_IMAGES: Record<string, string> = {};
    return (
        <section className="py-20 px-4 md:px-20 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <EyebrowLabel text="Open Source Project" align="left" />
                <div className="flex justify-between flex-wrap items-center mb-8 gap-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        Featured Open Source Projects
                    </h2>
                    <NavLink
                        to="/projects"
                        className="text-blue-500 hover:underline text-base md:text-lg"
                    >
                        View All Projects
                    </NavLink>
                </div>

                {/* Projects content */}
                {projectsLoading ? (
                    <Loader />
                ) : projectsError ? (
                    <p className="text-center text-sm text-gray-500 py-12">
                        Failed to load projects: {projectsError}
                    </p>
                ) : null}

                {/* Featured — first project */}
                {!projectsLoading && !projectsError && featuredProject && (
                    <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-lg mb-12 md:flex md:items-stretch border border-gray-100">
                        <div className="md:w-1/2 h-64 sm:h-80 md:h-auto relative">
                            <img
                                src={
                                    featuredProject.image ||
                                    PROJECT_IMAGES[featuredProject.slug] ||
                                    youthImg
                                }
                                alt={featuredProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 md:hidden bg-black opacity-25" />
                        </div>
                        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-white z-10">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-brand-950">
                                {featuredProject.title}
                            </h3>
                            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                                {featuredProject.description || featuredProject.tagline}
                            </p>
                            <div className="flex gap-3 sm:gap-4 flex-wrap">
                                <PrimaryButton
                                    to={featuredProject.repoUrl}
                                    className="w-full md:w-auto"
                                >
                                    Contribute
                                </PrimaryButton>
                                <SecondaryButton
                                    to={featuredProject.liveUrl || featuredProject.repoUrl}
                                    className="w-full md:w-auto"
                                >
                                    View Project
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                )}  

                {/* Other projects grid — remaining 3 */}
                {!projectsLoading && !projectsError && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {homeProjects.slice(1).map((project, idx) => (
                            <ScrollAnimatedItem
                                key={project.id}
                                delay={idx * 0.15}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={
                                            project.image ||
                                            PROJECT_IMAGES[project.slug] ||
                                            youthImg
                                        }
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <h4 className="font-semibold mb-3 text-base sm:text-lg text-gray-900">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-2.5 sm:gap-3 flex-wrap my-3">
                                        <PrimaryButton to={project.repoUrl} className="w-full">
                                            Contribute
                                        </PrimaryButton>
                                        <SecondaryButton
                                            to={project.liveUrl || project.repoUrl}
                                            className="w-full"
                                        >
                                            View Project
                                        </SecondaryButton>
                                    </div>
                                </div>
                            </ScrollAnimatedItem>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturedProject