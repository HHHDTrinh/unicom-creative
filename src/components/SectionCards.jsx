const SectionCards = ({ title, desc, paragraph, index }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(97.19deg, #4646F5 1.13%, #8F8FF9 88.99%, #FFFFFF 145.31%)',
      }}
      className='card-item h-auto w-screen xl:p-[40px] 5xl:px-[108px] 5xl:pb-[121px] 5xl:pt-[60.1px]'
    >
      <article
        className='max_container'
        style={{
          padding: '0 !important',
          alignItems: 'flex-start',
        }}
      >
        <div className='flex basis-1/2 flex-col xl:gap-[calc(100vh/25)] 5xl:gap-[152.42px]'>
          <h1 className='font-darker font-semibold leading-[112.53%] text-[#74FFFE] xl:text-[calc(100vw/20)] 5xl:text-[138px]'>
            {title}
          </h1>
          <p className='font-dmsans font-bold leading-[98.53%] text-white xl:text-[calc(100vw/30)] 5xl:text-[40px]'>
            {desc}
          </p>
        </div>
        <div className='flex basis-1/2 flex-col xl:gap-[calc(100vh/25)] 5xl:gap-[120.27px]'>
          <p className='self-end font-darker font-bold leading-[112.53%] text-[#EDF82D] xl:text-[calc(100vw/20)] 5xl:text-[138px]'>
            0{index}
          </p>
          <p className='font-dmsans font-normal leading-[108.53%] text-white xl:text-[calc(100vw/30)] 5xl:text-[56px]'>
            {paragraph}
          </p>
        </div>
      </article>
    </div>
  );
};

export default SectionCards;
