"use client"
import React from 'react';

 
import { HeroParallaxDemo } from '@/components/ui/slider';
import {InfiniteMovingCardsDemo} from '@/components/ui/testimonial';
import {CardHoverEffectDemo} from '../components/ui/instructor';
import Faqs from'../components/ui/faqs';
import { StickyScrollRevealDemo } from "../components/ui/about";
import Sponser from '../components/ui/sponsered';
import Teams from  '../components/ui/team'


const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <HeroParallaxDemo />
      <div id="About">
        <StickyScrollRevealDemo/>
      </div>
      <div id="OurInstructor">
        <CardHoverEffectDemo/>
      </div>
      <Sponser/>
      <div id="FAQs">
        <Faqs/>
      </div>
      <div id="OurTeam">
        <Teams/>
      </div>
      <div id='Testimonial'>
        <InfiniteMovingCardsDemo/>   
      </div>
       
    </div>
  )
}

export default page