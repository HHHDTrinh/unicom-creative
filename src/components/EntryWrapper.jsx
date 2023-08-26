'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import HoverButton from './HoverButton';

const EntryWrapper = ({ children, to, setClicked }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className='relative flex h-screen w-screen overflow-hidden'>
      <figure className='h-screen xl:w-[50%] 5xl:w-[1182px]'>
        <img
          src='/assets/images/entry-bg-2.png'
          alt='entry'
          className='h-full w-full'
        />
      </figure>
      {children}
      <footer className='max_container absolute xl:bottom-[2%] 5xl:bottom-[88px]'>
        <div className='entry-navbar flex w-auto gap-3 5xl:w-[962.031px] 5xl:gap-[25.83px]'>
          <Link
            href='/basic-details'
            className={
              pathname == '/basic-details' ? 'text-[#4E4EFF]' : 'text-primary'
            }
          >
            Basic Details
          </Link>
          <Link
            href='/grant-options'
            className={
              pathname == '/grant-options' ? 'text-[#4E4EFF]' : 'text-primary'
            }
          >
            Grant Options
          </Link>
          <Link
            href='/energy-bill'
            className={
              pathname == '/energy-bill' ? 'text-[#4E4EFF]' : 'text-primary'
            }
          >
            Reduce Energy Bills
          </Link>
          <Link
            href='/venture-capital'
            className={
              pathname == '/venture-capital' ? 'text-[#4E4EFF]' : 'text-primary'
            }
          >
            Venture Capital Funding
          </Link>
        </div>
        <div className='flex-between w-[50%] xl:pl-[calc(100vw/50)] 5xl:mr-[4%] 5xl:w-[966px] 5xl:pl-0'>
          <button
            onClick={() => router.back()}
            className={`${
              pathname === '/basic-details'
                ? 'cursor-default opacity-0'
                : 'cursor-pointer opacity-100'
            } c-button -primary btn-back`}
          >
            <div
              className='c-button_inner'
              style={{
                backgroundColor: '#fff',
                border: '2.8px solid #8282FF',
                width: '184.41px',
              }}
            >
              <span className='c-button_label not-default set_white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 79 80'
                  fill='none'
                  className='rotate-45 scale-x-[-1]'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M64.6629 43.4332L0 43.4332L0 36.4332L64.6803 36.4332L33.5102 5.26284L38.46 0.31311L75.5962 37.4496L78.0711 39.9245L75.5962 42.3994L38.46 79.5356L33.5102 74.5859L64.6629 43.4332Z'
                    fill='#8282FF'
                  />
                </svg>
                Go Back
              </span>
            </div>
          </button>
          {to ? (
            <HoverButton changeWidth='153.35px' link={to} text='Next' />
          ) : (
            <button
              onClick={() => setClicked((prev) => !prev)}
              className='c-button -primary'
            >
              <div
                className='c-button_inner'
                style={{
                  width: '153.35px',
                }}
              >
                <span className='c-button_label not-default'>
                  Submit
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 79 80'
                    fill='none'
                    className='-rotate-45'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M64.6629 43.4332L0 43.4332L0 36.4332L64.6803 36.4332L33.5102 5.26284L38.46 0.31311L75.5962 37.4496L78.0711 39.9245L75.5962 42.3994L38.46 79.5356L33.5102 74.5859L64.6629 43.4332Z'
                      fill='#282866'
                    />
                  </svg>
                </span>
              </div>
            </button>
          )}
        </div>
      </footer>
    </section>
  );
};

export default EntryWrapper;
