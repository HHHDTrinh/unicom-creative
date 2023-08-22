import Image from 'next/image';
import Link from 'next/link';

const HoverButton = ({ isDefault, text, classes, link }) => {
  return (
    <>
      {isDefault ? (
        <div className='flex-center w-[495.52px] gap-4'>
          <Link href='/entry' className='group'>
            <div className='flex-center h-[147.2px] w-[147.2px] rounded-full bg-[#EDF82D]'>
              <Image
                src='/assets/icons/button.svg'
                className='group-hover:fill-[#EDF82D] group-hover:text-[#EDF82D]'
                width={77}
                height={77}
                alt='default-btn'
              />
            </div>
          </Link>
          <p className='font-dmsans text-[32px] font-normal leading-[39.61px] text-white'>
            Find grants, rebates and VC funding. Success fee only*
          </p>
        </div>
      ) : (
        <>
          <button type='button'>Click</button>
        </>
      )}
    </>
  );
};

export default HoverButton;
