import Image from 'next/image';
import Link from 'next/link';

const HoverButton = ({ isDefault, textBlue, text, link }) => {
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
            className={`w-[314.89px] font-dmsans text-[32px] font-normal leading-[39.61px] ${
              textBlue ? 'text-[#282866]' : 'text-white'
            }`}
          >
            Find grants, rebates and VC funding. Success fee only*
          </p>
        </div>
      ) : (
        <>
          <Link href={link} className='c-button -primary'>
            <div className='c-button_inner'>
              <span className='c-button_label'>
                {text}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
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
        </>
      )}
    </>
  );
};

export default HoverButton;
