import React from 'react';
import { Project } from '../typings';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-rowmax-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="w-85[vw] justify-center absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img className="w-[85vh]" src={urlFor(project?.image).url()} alt="" />

            <div className="w-[85vw] space-y-10 px-8 md:px-10 max-w-5xl">
              <h4 className="text-4xl font-semi-bold text-center">
                <span className="text-center text-gray-500 text-bold ml-10">{project?.title}</span>
              </h4>

              <p className="text-lg text-gray-500 text-center">{project?.summary}</p>
              <p className="text-lg text-center text-gray-500">Technologies: </p>
              <div className="flex gap-5 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-8 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
