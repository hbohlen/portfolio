import { motion } from 'framer-motion';
import React from 'react';

import { urlFor } from '../sanity';
import { Skill } from '../typings';
import { Tooltip } from '@material-tailwind/react';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex flex-row cursor-pointer">
      <img
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500  w-full filter group-hover:grayscale transition-duration-300 ease-in-out mb-10"
      />
      <div className="flex absolute w-full justify-center bottom-5 text-gray-500">
        {skill?.title}
      </div>
    </div>
  );
};

export default Skill;
