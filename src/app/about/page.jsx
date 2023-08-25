import { abouts } from '@configs/datas';

const About = () => {
  return (
    <div className='mt-[calc(100vh/4.5)] w-screen bg-white 5xl:mt-[362px]'>
      <section className='max_container relative h-[1064px] items-start'>
        <div className='absolute z-0 translate-y-[-4rem]'>
          <h5 className='text-justify font-dmsans text-[240.963px] font-medium uppercase leading-[87.03%] tracking-[12px] text-[#e6e6ff]'>
            UNICOM was born.
          </h5>
        </div>
        <article className='flex h-full w-full items-start justify-between'>
          <p className='translate-y-[-15px] font-darker text-[138px] font-semibold capitalize leading-[77.03%] text-primary'>
            our
            <br />
            <span className='text-[#8282ff]'>story</span>
          </p>
          <div className='item-start flex h-full w-[1019px] flex-col justify-between font-dmsans text-[56px] font-normal'>
            <p className='leading-[125.03%] text-primary'>
              Our story began when our founders
              <br className='hidden xl:block' />
              <span className='text-[#8282ff]'>Mia Bowyer </span>
              and{' '}
              <span className='text-[#8282ff]'>
                Stevie Kimonides
                <br className='hidden xl:block' />
              </span>
              united the best funding experts to help
              <br className='hidden xl:block' />
              companies survive uncertain times. 
            </p>
            <p className='leading-[136%]] text-[#141041]'>
              Many companies knew funding was available, but they had no idea
              how to access it. They would browse the
              <br className='hidden xl:block' />
              internet, fill out complicated forms or
              <br className='hidden xl:block' />
              miss out on funding altogether. 
            </p>
          </div>
        </article>
      </section>
      <section className='max_container relative mt-[174px] items-start'>
        <div className='absolute left-[4%] top-0'>
          <h5 className='font-darker text-[138px] font-semibold leading-[77.03%] text-primary'>
            Meet the
            <br />
            <span className='text-[#8282ff]'>Founders</span>
          </h5>
        </div>
        <div className='flex flex-col'>
          {abouts.map((abt, i) => (
            <figure
              key={abt.name + i}
              className='flex items-center justify-between even:flex-row-reverse'
            >
              <figcaption className='w-[964px] translate-y-[10em] self-center'>
                <h5 className='mb-[50px] font-darker text-[100px] font-bold leading-[112.53%] text-primary'>
                  {abt.name}
                </h5>
                <article className='flex flex-col gap-[40px] font-dmsans text-[44px] font-normal leading-[125.03%] text-primary'>
                  <p>{abt.desc}</p>
                  <p>{abt.desc2}</p>
                </article>
              </figcaption>
              <img
                className='mr-[-9.5%] even:ml-[-4.5%]'
                src={abt.avatar}
                alt={abt.name}
              />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
