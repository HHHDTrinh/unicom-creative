import { replaceWithBr } from '@utils/function';

const CircularCard = ({ isActive, text }) => {
  return (
    <div
      className={`circular-wrapper absolute left-0 top-0 box-border flex h-[845px] w-[609px] shrink-0 cursor-grabbing flex-col rounded-[48px] bg-white px-[77.4px] py-[10px] ${
        isActive ? 'active-card' : ''
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='125'
        height='183'
        viewBox='0 0 125 183'
        fill='none'
        className='circular-icon basis-1/4'
      >
        <path
          d='M65.9911 57.1242C69.5653 57.0144 72.4039 54.0529 72.3314 50.5095C72.2589 46.9661 69.3027 44.1827 65.7285 44.2926C62.1543 44.4024 59.3156 47.3639 59.3881 50.9073C59.4606 54.4507 62.4169 57.2341 65.9911 57.1242Z'
          fill='#4E4EFF'
        />
        <path
          d='M51.4236 57.4509C53.7466 57.3795 55.5916 55.4547 55.5444 53.1518C55.4973 50.8488 53.576 49.0398 51.253 49.1112C48.93 49.1826 47.0851 51.1074 47.1322 53.4103C47.1793 55.7133 49.1007 57.5223 51.4236 57.4509Z'
          fill='#4E4EFF'
        />
        <path
          d='M80.4715 137.423C82.7945 137.351 84.6394 135.427 84.5923 133.124C84.5452 130.821 82.6238 129.012 80.3008 129.083C77.9779 129.155 76.1329 131.079 76.1801 133.382C76.2272 135.685 78.1485 137.494 80.4715 137.423Z'
          fill='#4E4EFF'
        />
        <path
          d='M93.2977 132.277C96.8719 132.167 99.7106 129.206 99.6381 125.663C99.5656 122.119 96.6093 119.336 93.0351 119.446C89.4609 119.555 86.6223 122.517 86.6948 126.06C86.7673 129.604 89.7235 132.387 93.2977 132.277Z'
          fill='#4E4EFF'
        />
        <path
          d='M102.727 118.714C105.05 118.643 106.895 116.718 106.848 114.415C106.801 112.112 104.88 110.303 102.557 110.374C100.234 110.446 98.3888 112.371 98.4359 114.674C98.483 116.976 100.404 118.785 102.727 118.714Z'
          fill='#4E4EFF'
        />
        <path
          d='M24.1082 90.0419C26.4312 89.9706 28.2761 88.0458 28.229 85.7428C28.1819 83.4399 26.2605 81.6309 23.9376 81.7023C21.6146 81.7737 19.7696 83.6984 19.8168 86.0014C19.8639 88.3043 21.7852 90.1133 24.1082 90.0419Z'
          fill='#4E4EFF'
        />
        <path
          d='M24.1551 107.072C27.7293 106.962 30.568 104.001 30.4955 100.457C30.423 96.9139 27.4668 94.1305 23.8926 94.2403C20.3184 94.3502 17.4797 97.3117 17.5522 100.855C17.6247 104.398 20.5809 107.182 24.1551 107.072Z'
          fill='#4E4EFF'
        />
        <path
          d='M29.159 118.714C31.482 118.643 33.3269 116.718 33.2798 114.415C33.2327 112.112 31.3113 110.303 28.9883 110.375C26.6654 110.446 24.8204 112.371 24.8676 114.674C24.9147 116.977 26.836 118.786 29.159 118.714Z'
          fill='#4E4EFF'
        />
        <path
          d='M102.727 76.1594C105.05 76.088 106.895 74.1632 106.848 71.8603C106.801 69.5573 104.88 67.7483 102.557 67.8197C100.234 67.8911 98.3888 69.8159 98.4359 72.1188C98.483 74.4218 100.404 76.2308 102.727 76.1594Z'
          fill='#4E4EFF'
        />
        <path
          d='M51.4236 137.423C53.7466 137.351 55.5916 135.427 55.5444 133.124C55.4973 130.821 53.576 129.012 51.253 129.083C48.93 129.155 47.0851 131.079 47.1322 133.382C47.1793 135.685 49.1007 137.494 51.4236 137.423Z'
          fill='#4E4EFF'
        />
        <path
          d='M80.4715 57.4506C82.7945 57.3792 84.6394 55.4545 84.5923 53.1515C84.5452 50.8486 82.6238 49.0396 80.3008 49.111C77.9779 49.1824 76.1329 51.1071 76.1801 53.4101C76.2272 55.713 78.1485 57.522 80.4715 57.4506Z'
          fill='#4E4EFF'
        />
      </svg>
      <p
        className={`${
          isActive ? 'active-card' : ''
        } text-light-blue mt-[0.6em] basis-2/4 font-darker text-[100px] font-semibold leading-[78.53%]`}
        dangerouslySetInnerHTML={{
          __html: replaceWithBr(text),
        }}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='108'
        height='111'
        viewBox='0 0 108 111'
        fill='none'
        className='circular-arrow basis-1/4 self-end'
      >
        <path
          className='fill-[#4E4EFF]'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M96.5264 91.7398L0.667749 17.2588L4.31499 12.1753L100.175 86.6574L87.7429 0.885678L93.8154 0.00550961L107.351 93.3915L107.808 96.546L104.772 96.9861L14.8874 110.015L13.9729 103.706L96.5264 91.7398Z'
        />
      </svg>
    </div>
  );
};

export default CircularCard;
