import darkSaasLandingPage from "@/assets/images/dl.png";
import lightSaasLandingPage from "@/assets/images/el.png";
import aiStartupLandingPage from "@/assets/images/ab.png";
import mpStartupLandingPage from "@/assets/images/mp.png";
import miroStartupLandingPage from "@/assets/images/miro.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Lingo",
    year: "2024",
    title: "Lingo Landing Page",
    results: [
      { title: "Enhanced User Engagement" },
      { title: "Modern Tech Stack" },
      { title: "Efficient Development" },
    ],
    link: "https://duolingo-clone-next-14.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Equilearn",
    year: "2024",
    title: "Equilearn Landing Page",
    results: [
      { title: "AI-Powered Resource Curation" },
      { title: "Personalized Recommendations" },
      { title: "Accessible Learning Solutions" },
    ],
    link: "https://ai-learning-recommender-main.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Alienbird",
    year: "2024",
    title: "Alienbird Landing Page",
    results: [
      { title: "Interactive Gameplay" },
      { title: "Fully Responsive Design" },
      { title: "Creative Twist" },
    ],
    link: "https://emmaeng680.github.io/Alienbird/",
    image: aiStartupLandingPage,
  },
  {
    company: "Music Player - Django",
    year: "2025",
    title: "Music App Landing Page",
    results: [
      { title: "Instant Lyrics Sync" },
      { title: "Seamless Music Playback" },
      { title: "User-Friendly Interface" },
    ],
    link: "https://music-player-djang.vercel.app/",
    image: mpStartupLandingPage,
  },
   {
    company: "Miro Clone",
    year: "2024",
    title: "Miro Clone Landing Page",
    results: [
      { title: "Collaborative Whiteboard" },
      { title: "Intuitive Interface" },
      { title: "Customizable Workspace" },
    ],
    link: "https://miro-hazel.vercel.app//",
    image: miroStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
      <section id="projects" className='pb-16 lg:py-24'>
        <div className='container'>
          <SectionHeader title='Featured Projects' eyebrow='Real-world
              Results' description="Welcome to my world where I transform concepts into engaging digital experiences."/>
          <div className='flex flex-col mt-10 gap-20 md:mt-20 '>
            {portfolioProjects.map((project, projectIndex) => (
                <Card
                    key={project.title}
                     className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                    style = {{
                       top: `calc(64px + ${projectIndex * 40 }px`,
                }} >
                  <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                    <div className='lg:pb-16'>
                    <div
                        className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text '>
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">
                      {project.title}
                    </h3>
                    <hr className='border-t-2 border-white/5 mt-4 md:mt-5'/>
                    <ul className='flex flex-col gap-4 mt-4 md:mt-5'>
                      {project.results.map(result => (
                          <li className='flex gap-2 text-sm md:text-base text-white/80' key={result.title}>
                            <CheckCircleIcon className='size-5 md:size-6'/>
                            <span>{result.title}</span>
                          </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button
                          className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className='size-4'/>
                      </button>
                    </a>
                    </div>
                    <div className='relative'>
                    <Image src={project.image} alt={project.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none' priority={true}/>
                    </div>
                  </div>
                </Card>
            ))}
          </div>
        </div>
      </section>
  )
};
