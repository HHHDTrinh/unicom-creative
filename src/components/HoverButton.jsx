import Link from 'next/link';

const HoverButton = ({ isDefault, textBlue, text, link, changeWidth }) => {
  return (
    <>
      {isDefault ? (
        <div className='flex-center w-[495.52px] gap-4'>
          <Link
            href='/entry'
            className={`c-button -primary ${isDefault ? 'default' : ''}`}
          >
            <div className='c-button_inner'>
              <span className='c-button_label'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='60'
                  height='60'
                  viewBox='0 0 57 58'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M50.6036 9.41538L3.74707 57.3245L0.131622 53.7885L46.9962 5.87108L0.576609 6.3865L0.52046 1.32966L53.036 0.74656L55.5644 0.718481L55.5925 3.24689L56.1758 55.7622L51.119 55.8184L50.6036 9.41538Z'
                    fill='#282866'
                  />
                </svg>
              </span>
            </div>
          </Link>
          <p
            className={`w-[314.89px] font-dmsans font-normal xl:text-[26px] xl:leading-none 5xl:text-[32px] 5xl:leading-[39.61px] ${
              textBlue ? 'text-primary' : 'text-white'
            }`}
          >
            Find grants, rebates and VC funding. Success fee only*
          </p>
        </div>
      ) : (
        <>
          <Link
            href={link}
            className={`c-button -primary ${
              link === '/basic-details' ? 'entry-btn' : ''
            }`}
          >
            <div
              className='c-button_inner'
              style={{
                width: changeWidth ? changeWidth : '254px',
              }}
            >
              <span className='c-button_label not-default'>
                {text}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 79 80'
                  fill='none'
                  className='-rotate-45'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M64.6629 43.4332L0 43.4332L0 36.4332L64.6803 36.4332L33.5102 5.26284L38.46 0.31311L75.5962 37.4496L78.0711 39.9245L75.5962 42.3994L38.46 79.5356L33.5102 74.5859L64.6629 43.4332Z'
                    fill='#282866'
                  />
                </svg>
              </span>
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default HoverButton;
