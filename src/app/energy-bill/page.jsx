import EntryQuestions from '@components/EntryQuestions';
import EntryWrapper from '@components/EntryWrapper';
import { energyQuestions } from '@configs/datas';

const EnergyBills = () => {
  return (
    <EntryWrapper to='/venture-capital'>
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
          Reduce
          <br />
          Energy Bills
        </p>
        <div>
          {energyQuestions.map((eng, i) => (
            <EntryQuestions text={eng} key={'energy' + i} />
          ))}
        </div>
      </div>
    </EntryWrapper>
  );
};

export default EnergyBills;
