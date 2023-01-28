import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar flex justify-between container mx-auto p-5 items-center border-b'>
      <div className='logo text-orange-500 font-semibold text-xl'>
        <Link to='/'>Firebase Killer</Link>
      </div>
      <ul className='menus flex gap-10'>
        <li>
          <Link to='/' className='hover:text-orange-500 duration-300'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='hover:text-orange-500 duration-300'>
            About
          </Link>
        </li>
        <li>
          <Link to='/profile' className='hover:text-orange-500 duration-300'>
            Profile
          </Link>
        </li>
        <li>
          <Link to='/login' className='hover:text-orange-500 duration-300'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
