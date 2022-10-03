import { createClient } from "next-sanity";

export const config = {
    dataset: "production",
    projectId: "qgkiang3",
    useCdn: true,
};

export const sanityClient = createClient(config);