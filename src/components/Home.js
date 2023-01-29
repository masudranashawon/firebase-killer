const Home = () => {
  return (
    <div className='home py-10 container mx-auto'>
      <h2 className='section-title text-center text-4xl font-bold text-sky-400'>
        Welcome to Firebase Killer
      </h2>
      <img
        className='w-[100vh] mx-auto mt-10'
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--qGkmK2Fw--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iusgzs57xxzcawbjgdgd.png'
        alt='Firebase logo'
      />
    </div>
  );
};

export default Home;
