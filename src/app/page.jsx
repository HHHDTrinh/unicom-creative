import HoverButton from '@components/HoverButton';

const Home = () => {
  return (
    <>
      <section>
        <div
          className='relative h-[2094.73px] w-screen'
          style={{
            backgroundImage: 'url("/assets/images/home-bg.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
          }}
        >
          <div className='max_container absolute bottom-[10%]'>
            <div className='flex basis-5/6 flex-col text-[#282866]'>
              <h1 className='font-darker text-[190px] font-semibold leading-[73.53%]'>
                Find funding you
                <br className='hidden xl:block' />
                didn’t know existed.
              </h1>
              <div className='mt-[111.82px] flex items-end justify-between'>
                <p className='font-dmsans text-[40px] font-bold leading-[98.53%]'>
                  How it works?
                </p>
                <div className='flex flex-col gap-8 font-dmsans text-[56px] font-normal leading-[125.03%]'>
                  <p>
                    Cash flow is a major issue for companies.
                    <br className='hidden xl:block' />
                    However 90%* of businesses are unaware
                    <br className='hidden xl:block' />
                    of the funding or grant options available to them.
                  </p>
                  <p>
                    We have found three major groups of funding
                    <br className='hidden xl:block' />
                    and the right specialists to help you apply so
                    <br className='hidden xl:block' />
                    you don’t miss out on opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-[7%] self-start'>
              <HoverButton isDefault textBlue />
            </div>
          </div>
        </div>
        <div
          className='h-[1441.18px] w-screen'
          style={{
            backgroundImage: 'url("/assets/images/home-man.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundSize: '100%',
          }}
        ></div>
      </section>
    </>
  );
};

export default Home;
