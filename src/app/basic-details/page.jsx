import EntryWrapper from '@components/EntryWrapper';

const BasicDetails = () => {
  return (
    <EntryWrapper to='/grant-options'>
      <div
        className='max_container absolute inset-x-0 xl:top-[15%] 5xl:top-[329px]'
        style={{
          alignItems: 'flex-start',
          paddingRight: '8%',
        }}
      >
        <p className='entry-main_title'>
          Let’s start <br className='xl:hidden 5xl:block' />
          with
          <br className='xl:block 5xl:hidden' />
          Basic <br className='xl:hidden 5xl:block' />
          Details
        </p>
        <form className='form-subcribe form-basic_details'>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' defaultValue='McFunny Face' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter your name here' />
          </div>
          <div>
            <label htmlFor='company'>Company Name</label>
            <input type='text' id='company' placeholder='Enter company name' />
          </div>
          <div>
            <label htmlFor='adrress'>Address</label>
            <input type='text' id='adrress' placeholder='Enter company name' />
          </div>
          <div>
            <label htmlFor='web'>Website</label>
            <input type='text' id='web' placeholder='Enter website here' />
          </div>
        </form>
      </div>
    </EntryWrapper>
  );
};

export default BasicDetails;
