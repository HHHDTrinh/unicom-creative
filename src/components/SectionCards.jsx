const SectionCards = ({ title, desc, paragraph, index }) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(97.19deg, #4646F5 1.13%, #8F8FF9 88.99%, #FFFFFF 145.31%)',
      }}
      className='card-item h-auto w-screen px-[108px] pb-[121px] pt-[60.1px]'
    >
      <article
        className='max_container'
        style={{
          padding: '0 !important',
          alignItems: 'flex-start',
        }}
      >
        <div className='flex basis-1/2 flex-col gap-[152.42px]'>
          <h1 className='font-darker text-[138px] font-semibold leading-[112.53%] text-[#74FFFE]'>
            {title}
          </h1>
          <p className='font-dmsans text-[40px] font-bold leading-[98.53%] text-white'>
            {desc}
          </p>
        </div>
        <div className='flex basis-1/2 flex-col gap-[120.27px]'>
          <p className='self-end font-darker text-[138px] font-bold leading-[112.53%] text-[#EDF82D]'>
            0{index}
          </p>
          <p className='font-dmsans text-[56px] font-normal leading-[108.53%] text-white'>
            {paragraph}
          </p>
        </div>
      </article>
    </div>
  );
};

export default SectionCards;
