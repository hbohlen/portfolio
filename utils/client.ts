import sanityClient from '@sanity/client';

const client = sanityClient({
  dataset: 'production',
  projectId: 'qgkiang3',
  useCdn: true
});

export default client;
