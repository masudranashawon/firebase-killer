import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Login = () => {
  const naviget = useNavigate();
  // Goole login system
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
        naviget("/profile");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='login container mx-auto py-10'>
      <h2 className='section-title text-center text-4xl'>Login</h2>
      <div className='login-platform flex flex-col gap-5 items-center mt-10'>
        <button
          onClick={handleGoogleLogin}
          className='google-sign-in bg-gradient-to-r from-sky-500 to-sky-700 w-96 h-14 rounded-full text-white font-medium text-lg hover:from-sky-700 hover:to-sky-500 hover:shadow-xl duration-300 uppercase'
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
