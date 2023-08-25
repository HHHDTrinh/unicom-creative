'use client';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const AccordItem = ({
  isDefault,
  text,
  idx,
  expanded,
  setExpanded,
  isFunding,
}) => {
  const isOpen = idx === expanded;
  const ref = useRef();

  useLayoutEffect(() => {
    gsap.to(ref.current.children[1], {
      height: isOpen ? 'auto' : 0,
      marginBottom: isOpen ? 'calc(100vh / 10)' : 0,
      duration: 0.8,
      ease: 'power1.inOut',
    });
  }, [isOpen]);

  return (
    <div
      className={`${
        idx === 4 ? 'border-y-[0.5px]' : 'border-t-[0.5px]'
      } flex flex-col border-light-blue`}
      ref={ref}
    >
      <div className='max_container' style={{ padding: 0 }}>
        <p
          className={`${
            isDefault ? 'my-[71px]' : 'my-[74px]'
          } font-darker text-[81px] font-semibold leading-[105.63%] text-primary`}
        >
          {text}
        </p>
        {isDefault ? (
          <span
            onClick={() => setExpanded(idx === expanded ? -1 : idx)}
            className='cursor-pointer font-darker text-[139px] font-normal leading-[77.03%] text-primary'
          >
            {idx === expanded ? '-' : '+'}
          </span>
        ) : (
          <Image
            onClick={() => handleAccordionClick(idx)}
            src={
              idx === expanded
                ? '/assets/icons/accordion-active-arrow.svg'
                : '/assets/icons/accordion-arrow.svg'
            }
            width={115}
            height={115}
            alt='accordion-arrow'
            className='cursor-pointer'
          />
        )}
      </div>
      <div className='accordion_details h-0 w-full overflow-hidden'>
        <p className='font-dmsans text-[40px] font-normal leading-[136%] text-[#141041]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default AccordItem;
