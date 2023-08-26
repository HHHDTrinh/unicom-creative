'use client';
import { useState } from 'react';

import AccordItem from '@components/AccordItem';
import HoverButton from '@components/HoverButton';
import { accordionFundings } from '@configs/datas';

const FundingOptions = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className='mt-[calc(100vh/4.5)] w-screen overflow-hidden bg-white 5xl:mt-[362px]'>
      <section className='max_container relative h-fit items-start'>
        <article className='flex h-full w-full items-start justify-between'>
          <p className='translate-y-[-15px] font-darker text-[138px] font-semibold capitalize leading-[77.03%] text-primary'>
            Funding
            <br />
            <span className='text-[#8282ff]'>Options</span>
          </p>
          <div className='item-start flex h-full w-[1019px] flex-col gap-[40px] font-dmsans text-[56px] font-normal text-primary'>
            <p className='leading-[125.03%]'>
              You know there is funding out there, but you don’t know who to
              talk to or where to find it
            </p>
            <p className='leading-[125.03%]'>
              So we have done the hard work for you and united the best funding
              experts. We selected three primary sectors including grants,
              renewable energy rebates and venture capital funding.
            </p>
            <p className='leading-[125.03%]'>
              Our partners often work on a success fee only so this service is
              at little or no cost to you.
            </p>
          </div>
        </article>
        <span className='absolute bottom-0 left-[4%]'>
          <HoverButton isDefault textBlue />
        </span>
      </section>
      <section
        id='section-grants'
        className='max_container mb-[44px] mt-[198.18px] flex-col'
      >
        {accordionFundings.map((accor, i) => (
          <AccordItem
            key={'accordion-funding-' + i}
            idx={i}
            text={accor.title}
            data={accor.data}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </section>
    </div>
  );
};

export default FundingOptions;
