const Profile = ({ user }) => {
  return (
    <div className='profile container mx-auto py-10'>
      <h2 className='section-title text-center text-4xl'>Profile</h2>
      {user.email && (
        <div className='profile-card flex flex-col gap-3 items-center mt-10'>
          <img
            className='w-30 h-30 rounded-full border'
            src={user.photoURL}
            alt='profile picture'
          />
          <h3 className='disply-name text-5xl'>{user.displayName}</h3>
          <p>Email: {user.email}</p>
          <p>Uniqe ID: {user.uid}</p>
          <button className='google-sign-in bg-gradient-to-r from-sky-500 to-sky-700 w-48 h-14 rounded-full text-white font-medium text-lg hover:from-sky-700 hover:to-sky-500 hover:shadow-xl duration-300 uppercase'>
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
