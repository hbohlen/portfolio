import { Social } from '../typings';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "social"]`;

type Data = {
  socials: Social[];
};

export const fetchSocials = async () => {
  const res = await sanityClient.fetch(query);

  const socials: Social[] = res;

  console.log('fetching', socials);

  return socials;
};
