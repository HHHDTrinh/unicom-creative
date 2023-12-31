'use client';

import HoverButton from '@components/HoverButton';

const ReferralEngine = () => {
  return (
    <div className='mt-[calc(100vh/4.5)] w-screen overflow-hidden bg-white 5xl:mt-[362px]'>
      <section className='max_container relative h-fit items-start'>
        <article className='flex h-full w-full items-start justify-between'>
          <p className='translate-y-[-15px] font-darker font-semibold capitalize leading-[77.03%] text-primary xl:text-[calc(100vh/10)] 5xl:text-[138px]'>
            Refferal Engine
            <br />
            <span className='text-[#8282ff]'>Options</span>
          </p>
          <div className='item-start flex h-full flex-col gap-[40px] font-dmsans font-normal text-primary xl:w-[50vw] xl:text-[calc(100vh/20)] 5xl:w-[937px] 5xl:text-[56px]'>
            <p className='leading-[125.03%]'>
              You know there is funding out there, but you don’t know who to
              talk to or where to find it
            </p>
            <p className='leading-[125.03%]'>
              You have your funding, now what? We find once companies are
              stabilised and supported with their bills and cash flow, it is a
              time to think of sustainable growth. 
            </p>
            <p className='leading-[125.03%]'>
              That’s why we have a specialist referral engine. We connect you
              with the best specialist to grow your business.
            </p>
          </div>
        </article>
        <span className='absolute bottom-0 xl:left-0 5xl:left-[4%]'>
          <HoverButton isDefault textBlue />
        </span>
      </section>
      <section className='max_container referral-secondary-section flex-start mb-[156px] mt-[175px] flex-col'>
        <p>
          We have <span>over 110+</span> marketing,lead gen, website, app
          development, legal and branding experts that will{' '}
          <span>ensure your brand can withstand the test of time.</span>
        </p>
        <figure className='relative mt-[112px] w-full'>
          <img
            className='absolute bottom-0 left-0'
            src='/assets/icons/logo-circle.svg'
            alt='logo-circle'
          />
          <figcaption className='float-right mr-[1em] w-[982px] pr-[1em]'>
            <p>
              This is a nimble model, so instead of hiring a whole team, you can
              slot in and out services when you need it.
            </p>
            <p>
              By creating an agile time, you mitigate your risk of redundancies,
              while accessing the best talent.
            </p>
          </figcaption>
        </figure>
      </section>
      <section
        className='flex-center w-screen xl:h-[80vh] 5xl:h-[750px]'
        style={{
          background: 'url("/assets/images/reffer-bg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
        }}
      >
        <div
          className='max_container 5xl:gap-[692px]'
          style={{
            justifyContent: 'unset',
          }}
        >
          <article className='xl:basis-1/2 5xl:basis-auto'>
            <h5 className='font-darker font-semibold leading-[81.1%] text-secondary xl:text-[calc(100vh/10)] 5xl:text-[138px]'>
              Keep
              <br /> Updated
            </h5>
            <p className='mt-[58px] font-dmsans text-[32px] font-normal leading-[125.03%] text-white xl:w-auto 5xl:w-[481px]'>
              We send regular emails to share ideas on who you should know or be
              connected with.
            </p>
          </article>
          <form className='form-subcribe xl:basis-1/2 5xl:basis-auto'>
            <h5 className='mb-[36px] font-dmsans text-[40px] font-normal leading-[125.03%] text-white'>
              Subscribe to our publications
            </h5>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' defaultValue='McFunny Face' />
            </div>
            <div className='mb-[32px]'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter your name here'
              />
            </div>
            <HoverButton text='Subscribe' link='#' />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReferralEngine;
