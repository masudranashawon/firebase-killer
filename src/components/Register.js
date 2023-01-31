import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const Register = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    //Register a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        if (data.user) {
          updateUserProfile();
        }

        navigate("/login");
        setUser({ ...user, displayName: name });
      })
      .catch((error) => console.log(error));

    //reset inputs
    setName("");
    setEmail("");
    setPassword("");
  };

  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL:
        "https://cdn-icons-png.flaticon.com/512/1177/1177568.png?w=740&t=st=1675165906~exp=1675166506~hmac=603e62cf82b876663d5f397745432114a40d465468c17cb11f90e14fcd204f98",
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='register container mx-auto py-10'>
      <h2 className='section-title text-center text-4xl'>Register</h2>
      <div className='form-section flex justify-center mt-10'>
        <form
          onSubmit={handleRegister}
          className='form flex flex-col gap-3 items-start'
        >
          <div className='form-control flex flex-col gap-1 w-96'>
            <label
              htmlFor='full-name'
              className='text-gray-500 text-lg font-semibold'
            >
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-gray-300
              border py-3 px-5 rounded outline-none capitalize focus:border-sky-500 focus:shadow-sky-300 focus:shadow duration-300'
              type='text'
              id='full-name'
              placeholder='Enter your full name'
              required
            />
          </div>
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
              className='lowercase border-gray-300
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
            value='Register'
          />
          <p className='text-gray-500 font-semibold'>
            Already hanve an account?
            <Link className='text-sky-500 hover:underline' to='/login'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
