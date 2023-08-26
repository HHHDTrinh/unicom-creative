import EntryQuestions from '@components/EntryQuestions';
import EntryWrapper from '@components/EntryWrapper';
import { grantQuestions } from '@configs/datas';

const GrantOptions = () => {
  return (
    <EntryWrapper to='/energy-bill'>
      <div
        className='max_container absolute inset-x-0 xl:top-[15%] 5xl:top-[329px]'
        style={{
          alignItems: 'flex-start',
          paddingRight: '8%',
        }}
      >
        <p className='entry-main_title'>
          Helping You
          <br />
          Find Grant
          <br />
          Options.
        </p>
        <div>
          {grantQuestions.map((grt, i) => (
            <EntryQuestions text={grt} key={'grant' + i} />
          ))}
        </div>
      </div>
    </EntryWrapper>
  );
};

export default GrantOptions;
