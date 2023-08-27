const CarouselCard = ({ title, extra, text, avatar, name, job }) => {
  return (
    <div
      className='max_container flex justify-between xl:mt-[calc(100vh/10)] xl:h-auto 5xl:mt-[166.44px] 5xl:h-[42em]'
      style={{
        alignItems: 'flex-start',
      }}
    >
      <div className='flex flex-col xl:basis-1/3 5xl:basis-1/2'>
        <h5 className='w-[6em] font-darker font-semibold text-primary xl:translate-y-[-1rem] xl:text-[calc(100vw/20)] xl:leading-[1em] 5xl:translate-y-[-2rem] 5xl:text-[138px] 5xl:leading-[106.3px]'>
          {title}
          <br className='xl:hidden 5xl:block' />
          <span className='text-[#8282FF]'> {extra}</span>
        </h5>
      </div>
      <article className='flex flex-col gap-[32px] xl:basis-2/3 5xl:basis-1/2'>
        <p className='font-dmsans text-[32px] font-normal leading-[136%] text-[#141041] xl:w-full 5xl:w-[84%] 5xl:text-[56px]'>
          {text}
        </p>
        <figure className='flex gap-[37px]'>
          <img
            className='rounded-full xl:h-[100px] xl:w-[100px] 5xl:h-[179px] 5xl:w-[179px]'
            src={avatar}
            alt={'avatar' + name}
          />
          <article className='flex flex-col items-start justify-center'>
            <p className='font-normal text-[#141041] xl:text-[24px] 5xl:text-[32px]'>
              {name}
            </p>
            <p className='font-normal text-[#141041] xl:text-[24px] 5xl:text-[32px]'>
              {job}
            </p>
          </article>
        </figure>
      </article>
    </div>
  );
};

export default CarouselCard;
