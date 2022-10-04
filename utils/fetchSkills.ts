import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { Skill as SkillType } from '../typings';

const query = groq`
    *[_type == "skill"]
`;

type Data = {
  skills: SkillType[];
};

export const fetchSkills = async () => {
  const res = await sanityClient.fetch(query);

  const skills: SkillType[] = res;

  console.log('fetching', skills);

  return skills;
};
