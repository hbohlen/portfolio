import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

import { Social } from '../typings';
import { PageInfo } from '../typings';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchPageInfo } from '../utils/fetchPageInfo';

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const Home = ({ pageInfo, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,35,35)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Head>Portfolio</Head>

      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ChevronDoubleUpIcon className="h-10 w-10 rounded-full filter grayscale hover-grayscale-0 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Social[] = await fetchSocials();
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
      socials
    },
    revalidate: 10
  };
};
