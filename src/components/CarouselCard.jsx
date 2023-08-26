const CarouselCard = ({ title, extra, text, avatar, name, job }) => {
  return (
    <div
      className='max_container mt-[166.44px] flex h-[42em] justify-between'
      style={{
        alignItems: 'flex-start',
      }}
    >
      <div className='flex basis-1/2 flex-col'>
        <h5 className='w-[6em] translate-y-[-2rem] font-darker text-[138px] font-semibold leading-[106.3px] text-primary'>
          {title}
          <br />
          <span className='text-[#8282FF]'>{extra}</span>
        </h5>
      </div>
      <article className='flex basis-1/2 flex-col gap-[32px]'>
        <p className='w-[84%] font-dmsans text-[32px] font-normal leading-[136%] text-[#141041] 5xl:text-[56px]'>
          {text}
        </p>
        <figure className='flex gap-[37px]'>
          <img
            className='h-[179px] w-[179px] rounded-full'
            src={avatar}
            alt={'avatar' + name}
          />
          <article className='flex flex-col items-start justify-center'>
            <p className='text-[32px] font-normal text-[#141041]'>{name}</p>
            <p className='text-[32px] font-normal text-[#141041]'>{job}</p>
          </article>
        </figure>
      </article>
    </div>
  );
};

export default CarouselCard;
