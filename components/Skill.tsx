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
    <div className="group relative flex cursor-pointer">
      <img
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:32 xl:h-32 filter group-hover:grayscale transition-duration-300 ease-in-out"
      />
    </div>
  );
};

export default Skill;
