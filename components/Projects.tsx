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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img className="w-[85vh]" src={urlFor(project?.image).url()} alt="" />

            <div className="w-[85vw] space-y-10 px-8 md:px-10 max-w-5xl">
              <h4 className="text-4xl font-semi-bold text-center">
                <span className="ml-10">{project?.title}</span>
              </h4>

              <p className="text-lg text-center md:text-left">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-8 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
