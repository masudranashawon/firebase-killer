import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import app from "../firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  //Regular login system
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });

    naviget("/profile");
    //Reset form
    setEmail("");
    setPassword("");
  };

  return (
    <div className='login container mx-auto py-10'>
      <h2 className='section-title text-center text-4xl'>Login</h2>
      <div className='login-platform flex flex-col gap-5 items-center mt-5'>
        <form
          onSubmit={handleLogin}
          className='form flex flex-col gap-3 items-start'
        >
          <div className='form-control flex flex-col gap-1 w-96'>
            <label
              htmlFor='email'
              className='text-gray-500 text-lg font-semibold'
            >
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-gray-300
              border py-3 px-5 rounded outline-none focus:border-sky-500 focus:shadow-sky-300 focus:shadow duration-300'
              type='email'
              id='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-control flex flex-col gap-1 w-96'>
            <label
              htmlFor='password'
              className='text-gray-500 text-lg font-semibold'
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border-gray-300
              border py-3 px-5 rounded outline-none focus:border-sky-500 focus:shadow-sky-300 focus:shadow duration-300'
              type='password'
              id='password'
              placeholder='Enter your password'
              required
            />
          </div>
          <input
            className='w-full cursor-pointer mt-2 bg-sky-400 text-lg text-sky-50 font-medium py-2 border border-sky-400 rounded outline-none focus:border-sky-600 focus:shadow-md duration-300'
            type='submit'
            value='Login'
          />
          <p className='text-gray-500 font-semibold'>
            Don't hanve an account?
            <Link className='text-sky-500 hover:underline' to='/register'>
              Register
            </Link>
          </p>
        </form>
        <p className='text-gray-600 font-semibold text-xl'>-- Login with --</p>
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
