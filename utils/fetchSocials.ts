import { Social } from "../typings";

export const fetchSocials = async() => {
    const res = await fetch("https://qgkiang3.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%20%3D%3D%20%22social%22%5D%20%7B%0A%20%20...%2C%0A%7D");

    const data = await res.json();
    const socials: Social[] = data.socials;

    console.log("fetching", socials);

    return socials;
};