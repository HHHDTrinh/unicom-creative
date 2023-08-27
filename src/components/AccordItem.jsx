'use client';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { replaceWithBr } from '@utils/function';

const AccordItem = ({ isDefault, text, idx, expanded, setExpanded, data }) => {
  const isOpen = idx === expanded;
  const ref = useRef();

  const isHome = isDefault && idx === 4;
  const isFunding = !isDefault && idx === 6;

  useLayoutEffect(() => {
    gsap.to(ref.current.children[1], {
      height: isOpen ? 'auto' : 0,
      marginBottom: isOpen ? `calc(100vh / ${isHome ? 10 : 12})` : 0,
      duration: 0.8,
      ease: 'power1.inOut',
    });
  }, [isOpen]);

  return (
    <div
      className={`${isHome ? 'border-y-[0.5px]' : 'border-t-[0.5px]'} ${
        isFunding ? 'border-y-[0.5px]' : 'border-t-[0.5px]'
      } flex w-full flex-col border-light-blue`}
      ref={ref}
    >
      <div
        className='max_container xl:gap-[40px] 5xl:gap-0'
        style={{ padding: '0  !important' }}
        onClick={() => setExpanded(idx === expanded ? -1 : idx)}
      >
        {isDefault ? (
          <>
            <p className='font-darker font-semibold leading-[105.63%] text-primary xl:my-[calc(100vh/15)] xl:text-[calc(100vw/40)] 5xl:my-[71px] 5xl:text-[81px]'>
              {text}
            </p>
            <span className='cursor-pointer font-darker font-normal leading-[77.03%] text-primary xl:text-[calc(100vw/20)] 5xl:text-[139px]'>
              {idx === expanded ? '-' : '+'}
            </span>
          </>
        ) : (
          <>
            <p
              className={`${
                idx === expanded ? 'text-[#8282FF]' : 'text-primary'
              } font-darker font-semibold leading-[105.63%] xl:my-[2rem] xl:text-[calc(100vh/15)] 5xl:my-[74px] 5xl:text-[81px]`}
            >
              0{idx + 1}
            </p>
            <p
              className={`${
                idx === expanded ? 'text-[#8282FF]' : 'text-primary'
              }  display-br w-[1110px] font-darker font-semibold leading-[105.63%] xl:my-[2rem] xl:text-[calc(100vh/15)] 5xl:my-[74px] 5xl:translate-x-[-3rem] 5xl:text-[81px]`}
              dangerouslySetInnerHTML={{ __html: replaceWithBr(text) }}
            />
            <Image
              src={
                idx === expanded
                  ? '/assets/icons/accordion-active-arrow.svg'
                  : '/assets/icons/accordion-arrow.svg'
              }
              width={115}
              height={115}
              // style={{
              //   width: 115,
              //   height: 115,
              // }}
              alt='accordion-arrow'
              className='cursor-pointer xl:h-[70px] xl:w-[70px] 5xl:h-[115px] 5xl:w-[115px]'
            />
          </>
        )}
      </div>
      {isDefault ? (
        <div className='accordion_details h-0 w-full overflow-hidden xl:pl-[2%] 5xl:pl-0'>
          <p className='font-dmsans font-normal leading-[136%] text-[#141041] xl:text-[calc(100vw/60)] 5xl:text-[40px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      ) : (
        <div
          className='accordion_details flex h-0 w-full items-center justify-center overflow-hidden'
          dangerouslySetInnerHTML={{
            __html: data,
          }}
        />
      )}
    </div>
  );
};

export default AccordItem;
