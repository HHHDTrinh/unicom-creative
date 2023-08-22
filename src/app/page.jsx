const Home = () => {
  return (
    <>
      <section className='flex flex-col'>
        <div
          className='h-[2094.73px] w-screen'
          style={{
            backgroundImage: 'url("/assets/images/home-bg.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        ></div>
        <div
          className='h-[1441.18px] w-screen'
          style={{
            backgroundImage: 'url("/assets/images/home-man.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        ></div>
      </section>
    </>
  );
};

export default Home;
