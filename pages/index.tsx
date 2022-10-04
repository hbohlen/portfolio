import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

import { PageInfo, Project, Skill, Social } from '../typings';

import { fetchSocials } from '../utils/fetchSocials';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, socials, skills, projects }: Props) => {
  return (
    <div className="bg-[rgb(36,35,35)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Head>Portfolio</Head>

      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
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
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects
    },
    revalidate: 10
  };
};
