import HoverButton from '@components/HoverButton';

const Entry = () => {
  return (
    <section className='flex h-screen w-screen overflow-hidden'>
      <figure className='relative h-screen xl:w-[50%] 5xl:w-[1182px]'>
        <img
          src='/assets/images/entry-bg.png'
          alt='entry'
          className='h-full w-full'
        />
        <figcaption className='flex-center absolute inset-0 translate-y-[-4%] font-darker text-[calc(100vh/10)] font-semibold leading-[86.53%] tracking-[-3.45px] text-primary 5xl:text-[138px]'>
          Welcome
        </figcaption>
      </figure>
      <div className='flex flex-col items-start justify-center xl:ml-[5%] xl:w-[50%] 5xl:ml-[202px] 5xl:w-fit'>
        <p className='mb-[32.39px] font-dmsans font-normal leading-[118.2%] text-primary xl:w-auto xl:text-[calc(100vw/50)] 5xl:w-[894.563px] 5xl:text-[56px]'>
          You are on your journey to finding funding options and helping
          stabilise your business.
        </p>
        <HoverButton text='Get Started' link='/basic-details' />
      </div>
    </section>
  );
};

export default Entry;
