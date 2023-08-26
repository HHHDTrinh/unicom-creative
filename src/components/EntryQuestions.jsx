import { replaceWithBr } from '@utils/function';

const EntryQuestions = ({ text }) => {
  return (
    <>
      <div className='flex-between xl:w-auto xl:gap-4 5xl:w-[966px] 5xl:gap-0'>
        <p
          className='font-darker font-semibold leading-[114.6%] text-primary xl:text-[calc(100vw/50)] 5xl:text-[40px]'
          dangerouslySetInnerHTML={{ __html: replaceWithBr(text) }}
        />
        <div className='flex items-center xl:gap-2 5xl:gap-4'>
          <button
            className='flex-center box-border rounded-[100px] border-[1px] border-solid border-primary bg-white p-[10px] font-darker text-[24px] font-semibold leading-[114.6%] text-primary hover:border-transparent hover:bg-light-blue hover:text-white xl:h-[50px] xl:w-[50px] 5xl:h-[70px] 5xl:w-[70px]'
            type='button'
          >
            Yes
          </button>
          <button
            className='flex-center box-border rounded-[100px] border-[1px] border-solid border-primary bg-white p-[10px] font-darker text-[24px] font-semibold leading-[114.6%] text-primary hover:border-transparent hover:bg-light-blue hover:text-white xl:h-[50px] xl:w-[50px] 5xl:h-[70px] 5xl:w-[70px]'
            type='button'
          >
            No
          </button>
        </div>
      </div>
      <div className='my-[32px] h-[1px] w-full bg-primary/40 first:mt-0 last:mb-0'></div>
    </>
  );
};

export default EntryQuestions;
