import React from 'react'
import  Link  from 'next/link';

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {

    const [text, count] = useTypewriter({
        words: [
            `Hi, My name is ${pageInfo?.name}`,
            "Developer",
            "Designer",
            "Student"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

            <BackgroundCircles />

            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://cdn.sanity.io/images/qic8yuc5/production/568658a3673728dba97defa51a013dfa814600f8-360x360.png"
                alt=""
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    {pageInfo?.role}

                 </h2>


                <h1 className="text-5xl lg:6xl font-semibold px-10">
                    <span className="mr-3">
                        {text}
                    </span>

                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    {/*
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>

                     
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    */}

                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            

            </div>

        </div>
    )
}

export default Hero