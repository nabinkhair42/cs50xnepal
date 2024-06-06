import React from 'react';
import Image from 'next/image';
import TU from '@/assets/sponsers/TU-Logo.png'
import Github from '@/assets/sponsers/github-education.png'
import Dharan from '@/assets/sponsers/dharan.png'
import MLSA from '@/assets/sponsers/MLSA.png'
import LeapFrog from '@/assets/sponsers/lf-logo.svg'
import BGEffect from "@/assets/homepage/bg-effect.svg"


const sponsered = () => {
  return (
    <main className='bg-dot-white/[0.2] mb-14 h-fit bg-gray-800'  style={{ backgroundImage: `url(${BGEffect.src})` }}>
      <div className="bg-dot-white/[0.2] h-full py-14 px-6 lg:px-8 float">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-4xl font-bold leading-8 text-white">
          We are Supported by
        </h1>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={TU}
            alt="IOE Purwancahl Campus"
            width={170}
            height={60}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Github}
            alt="Github Education"
            width={170}
            height={60}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Dharan}
            alt="Dharan Municapality"
            width={170}
            height={60}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={MLSA}
            alt="Microsoft Learning Student Ambasador"
            width={170}
            height={60}
          />
          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={LeapFrog}
            alt="Leap Frog"
            width={170}
            height={60}
          />
        </div>
      </div>
    </div>
    </main>
  )
}

export default sponsered