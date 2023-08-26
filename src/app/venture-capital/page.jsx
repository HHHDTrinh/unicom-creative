'use client';
import { useState } from 'react';
import EntryWrapper from '@components/EntryWrapper';
import { ventureQuestions } from '@configs/datas';
import EntryQuestions from '@components/EntryQuestions';

const VentureCapital = () => {
  const [clicked, setClicked] = useState(false);

  return !clicked ? (
    <EntryWrapper setClicked={setClicked}>
      <div
        className='max_container absolute inset-x-0 xl:top-[15%] 5xl:top-[329px]'
        style={{
          alignItems: 'flex-start',
          paddingRight: '8%',
        }}
      >
        <p className='entry-main_title'>
          Finding Venture <br className='xl:block' />
          Capital Funding
        </p>
        <div>
          {ventureQuestions.map((ven, i) => (
            <EntryQuestions text={ven} key={'venture' + i} />
          ))}
        </div>
      </div>
    </EntryWrapper>
  ) : (
    <section className='flex-center h-screen w-screen bg-white'>
      <div
        className='max_container gap-[204px]'
        style={{
          justifyContent: 'flex-start',
        }}
      >
        <p className='translate-y-[-15px] font-darker font-semibold capitalize leading-[77.03%] text-primary xl:text-[calc(100vw/20)] 5xl:text-[138px]'>
          You are
          <br className='xl:hidden 5xl:block' />
          <span className='text-[#8282ff]'> Done</span>
        </p>
        <p className='w-[1110px] font-dmsans font-normal leading-[125.03%] text-primary xl:text-[calc(100vw/50)] 5xl:text-[56px]'>
          Thank you for your information. We will assess
          <br />
          your answers and connect you with
          <br />
          the right partners if you are eligible for any
          <br />
          of the programs we have running. 
        </p>
      </div>
    </section>
  );
};

export default VentureCapital;
