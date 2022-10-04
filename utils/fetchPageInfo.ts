import { PageInfo } from '../typings';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "pageInfo"][0]`;

type Data = {
  pageInfo: PageInfo;
};

export const fetchPageInfo = async () => {
  const res = await sanityClient.fetch(query);

  const pageInfo: PageInfo = res;

  console.log('fetching', pageInfo);

  return pageInfo;
};
