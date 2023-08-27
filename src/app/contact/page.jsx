import React from 'react';

const Contact = () => {
  return (
    <div className='h-screen w-screen overflow-hidden bg-white pt-[calc(100vh/4.5)] 5xl:pt-[362px]'>
      <section className='max_container'>
        <article className='flex h-full w-full items-start justify-between'>
          <p className='translate-y-[-15px] font-darker  font-semibold capitalize leading-[77.03%] text-primary xl:text-[calc(100vh/10)] 5xl:text-[138px]'>
            Get in
            <br />
            <span className='text-[#8282ff]'>Touch</span>
          </p>
          <div className='item-start flex h-full flex-col font-dmsans font-normal text-primary xl:w-[50vw] xl:gap-[calc(100vh/20)] xl:text-[calc(100vh/20)] 5xl:w-[937px] 5xl:gap-[80px] 5xl:text-[56px]'>
            <div className='flex flex-col gap-[10px]'>
              <a
                href='mailto:mia@unicom.au'
                className='flex-start gap-[30px] leading-[70.02px] text-[#8282FF]'
              >
                mia@unicom.au
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='60'
                  height='60'
                  viewBox='0 0 41 41'
                  fill='none'
                  className='translate-y-[-15px]'
                >
                  <path
                    d='M10.0176 9.98242H29.9824V29.6646'
                    stroke='#8282FF'
                    stroke-width='3'
                  />
                  <path
                    d='M29.9824 9.98546L10.0176 30.0193'
                    stroke='#8282FF'
                    stroke-width='3'
                  />
                </svg>
              </a>
              <a className='leading-[70.02px]' href='tel:+61 410 540 040'>
                +61 410 540 040
              </a>
            </div>
            <div className='flex flex-col gap-[30px] leading-[36.7px]'>
              <p>2/222 Kings Way</p>
              <p>South Melbourne 3205</p>
              <p>Victoria Australia</p>
            </div>
            <a href='#' className='flex-start gap-[5px] leading-[36.7px]'>
              Map
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='60'
                height='60'
                viewBox='0 0 41 41'
                fill='none'
                className='translate-y-[-15px]'
              >
                <path
                  d='M10.0176 9.98242H29.9824V29.6646'
                  stroke='#282866'
                  stroke-width='3'
                />
                <path
                  d='M29.9824 9.98546L10.0176 30.0193'
                  stroke='#282866'
                  stroke-width='3'
                />
              </svg>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Contact;
