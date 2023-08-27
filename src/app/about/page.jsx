import { abouts } from '@configs/datas';

const About = () => {
  return (
    <div className='mt-[calc(100vh/4.5)] w-screen overflow-hidden bg-white 5xl:mt-[362px]'>
      <section className='max_container relative items-start xl:h-screen 5xl:h-[1064px]'>
        <div className='absolute z-0 translate-y-[-4rem]'>
          <h5 className='text-justify font-dmsans font-medium uppercase leading-[87.03%] tracking-[12px] text-[#e6e6ff] xl:text-[calc(100vh/7)] 5xl:text-[240.963px]'>
            UNICOM was born.
          </h5>
        </div>
        <article className='flex h-full w-full items-start justify-between'>
          <p className='translate-y-[-15px] font-darker font-semibold capitalize leading-[77.03%] text-primary xl:text-[calc(100vh/10)] 5xl:text-[138px]'>
            our
            <br />
            <span className='text-[#8282ff]'>story</span>
          </p>
          <div className='item-start flex h-full w-[1019px] flex-col justify-between font-dmsans font-normal xl:text-[calc(100vh/10)] 5xl:text-[56px]'>
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
        <div className='absolute top-0 xl:left-[2%] 5xl:left-[4%]'>
          <h5 className='font-darker font-semibold leading-[77.03%] text-primary xl:text-[calc(100vh/10)] 5xl:text-[138px]'>
            Meet the
            <br className='xl:hidden 5xl:block' />
            <span className='text-[#8282ff]'> Founders</span>
          </h5>
        </div>
        <div className='flex flex-col'>
          {abouts.map((abt, i) => (
            <figure
              key={abt.name + i}
              className='flex items-center justify-between even:flex-row-reverse'
            >
              <figcaption className='self-center xl:w-[50%] xl:translate-y-[2em] 5xl:w-[964px] 5xl:translate-y-[10em]'>
                <h5 className='font-darker text-[100px] font-bold text-primary xl:mb-[10px] xl:leading-[5rem] 5xl:mb-[50px] 5xl:leading-[112.53%]'>
                  {abt.name}
                </h5>
                <article className='flex flex-col gap-[40px] font-dmsans font-normal leading-[125.03%] text-primary xl:text-[calc(100vh/30)] 5xl:text-[44px]'>
                  <p>{abt.desc}</p>
                  <p>{abt.desc2}</p>
                </article>
              </figcaption>
              <img
                className='xl:ml-[-1.5em] xl:mr-[-1.5em] xl:w-[50%] 5xl:mr-[-9.5%] 5xl:w-auto 5xl:even:ml-[-4.5%]'
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
