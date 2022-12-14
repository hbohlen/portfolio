import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:bohlenhayden@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left- md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 w-[85vw] uppercase tracking-[20px] text-gray-500 ">
        Contact me
      </h3>

      <div className="flex flex-col w-[85vw] space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex w-[85vw] items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>402.350.0711</p>
          </div>

          <div className="flex w-[85vw] items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>bohlenhayden@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-[85vw] mx-auto">
          <div className="flex justify-between space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="w-[50%] contactInput"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="w-[50%] contactInput"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea {...register('message')} placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
