'use client';

import { usePathname } from 'next/navigation';

import HoverButton from './HoverButton';

const Footer = () => {
  const pathname = usePathname();

  const haveWrapper =
    pathname === '/' ||
    pathname === '/about' ||
    pathname === '/funding-options' ||
    pathname === '/referral-engine';

  return haveWrapper ? (
    <footer
      className='relative mt-[175px] h-[1440px] w-screen'
      style={{
        backgroundImage: 'url("/assets/images/footer.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
      }}
    >
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <p className='font-dmsans text-[40px] font-medium leading-[93.53%] text-primary'>
          We are here to help.
        </p>
        <h5 className='mb-[97px] mt-[24px] max-w-[1590px] text-center font-darker text-[138px] font-semibold leading-[85.5%] text-primary'>
          {pathname === '/'
            ? 'Keep your business stable during uncertain times.'
            : 'If you are struggling with the stress of cash flow and don’t know where to turn'}
        </h5>
        <HoverButton isDefault textBlue />
      </div>
      <article className='max_container item-center absolute bottom-[5em] flex justify-between'>
        <div className='flex items-center gap-[29px]'>
          <a
            href='#'
            className='font-dmsans text-[20.343px] font-normal leading-[50.368px] text-primary'
          >
            © 2023 UNICOM
          </a>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5'
              height='5'
              viewBox='0 0 5 5'
              fill='none'
            >
              <circle cx='2.8496' cy='2.1162' r='1.96679' fill='#282866' />
            </svg>
          </span>
          <a
            href='#'
            className='font-dmsans text-[20.343px] font-normal leading-[50.368px] text-primary'
          >
            Terms & Conditions
          </a>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='5'
              height='5'
              viewBox='0 0 5 5'
              fill='none'
            >
              <circle cx='2.8496' cy='2.1162' r='1.96679' fill='#282866' />
            </svg>
          </span>
          <a
            href='#'
            className='font-dmsans text-[20.343px] font-normal leading-[50.368px] text-primary'
          >
            Legal
          </a>
        </div>
        <a
          href='#'
          className='font-dmsans text-[20.343px] font-normal leading-[50.368px] text-primary'
        >
          Design by Artillery
        </a>
      </article>
    </footer>
  ) : (
    <></>
  );
};

export default Footer;
