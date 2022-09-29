import React from 'react'

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words: [
            "Hi, My name is Hayden Bohlen",
            "Developer",
            "Designer",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

            <BackgroundCircles />

            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
            />

            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                Web Developer

            </h2>


            <h1 className="text-5xl lg:6xl font-semibold px-10">
                <span className="mr-3">
                    {text}
                </span>

                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className="pt-5">
                <button className="heroButton">About</button>
                <button className="heroButton">Experience</button>
                <button className="heroButton">Skills</button>
                <button className="heroButton">Projects</button>

            </div>

        </div>
    )
}

export default Hero