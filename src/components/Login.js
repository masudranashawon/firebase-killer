import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();

const Login = () => {
  const naviget = useNavigate();

  // Goole login system
  const handleGoogleLogin = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        naviget("/profile");
      })
      .catch((error) => console.log(error));
  };

  // Github login system
  const handleGithubLogin = () => {
    signInWithPopup(auth, providerGithub)
      .then((data) => {
        naviget("/profile");
      })
      .catch((error) => console.log(error));
  };

  // Facebook login system
  const handleFacebookLogin = () => {
    signInWithPopup(auth, providerFacebook)
      .then((data) => {
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
          className='google-sign-in bg-gradient-to-r from-sky-500 via-rose-500 to-yellow-500  w-96 h-14 rounded-full text-white font-medium text-lg hover:from-rose-700 hover:via-yellow-500 hover:to-green-500 hover:shadow-xl duration-300 uppercase'
        >
          Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className='google-sign-in bg-gradient-to-r from-gray-500 to-gray-700 w-96 h-14 rounded-full text-white font-medium text-lg hover:from-gray-700 hover:to-gray-500 hover:shadow-xl duration-300 uppercase'
        >
          Login with Github
        </button>
        <button
          onClick={handleFacebookLogin}
          className='google-sign-in bg-gradient-to-r from-sky-500 to-sky-700 w-96 h-14 rounded-full text-white font-medium text-lg hover:from-sky-700 hover:to-sky-500 hover:shadow-xl duration-300 uppercase'
        >
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
