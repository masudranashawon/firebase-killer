import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logoutHadler = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        navigate("/login");
        setUser("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='profile container mx-auto py-10'>
      <h2 className='section-title text-center text-4xl'>Profile</h2>
      {user.email && (
        <div className='profile-card flex flex-col gap-3 items-center mt-10 shadow-xl w-2/3 p-10 mx-auto rounded-3xl'>
          <div className='img w-28 h-28 rounded-full border-2 flex border-orange-400 relative shadow-lg p-1'>
            <img
              className='w-full object-cover border-orange-200 border-2 rounded-full '
              src={user.photoURL}
              alt='user dp'
            />
            <span className='w-5 h-5 bg-sky-500 absolute top-1 -right-2 rounded-full p-4 flex items-center justify-center font-bold text-white text-2xl rotate-12'>
              √
            </span>
          </div>
          <h3 className='disply-name text-5xl text-sky-700 font-bold capitalize'>
            {user.displayName}
          </h3>
          <p className='text-xl font-semibold'>
            Email: <span className=' text-green-600'>{user.email}</span>
          </p>
          <p className=' font-bold'>
            Uniqe ID:
            <span className='text-red-400 font-medium'> {user.uid}</span>
          </p>
          <button
            onClick={logoutHadler}
            className='google-sign-in bg-gradient-to-r from-rose-500 to-rose-700 w-48 h-14 rounded-full text-white font-medium text-lg hover:from-rose-700 hover:to-rose-500 hover:shadow-xl duration-300 uppercase'
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
