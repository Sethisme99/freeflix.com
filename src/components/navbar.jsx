import { Link, useNavigate } from "react-router-dom";
import {UserAuth} from "../context/authentication"
import "../index.css";

const Navbar = () => {
  
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="w-full flex items-center justify-between p-3 z-[100] absolute">
      <Link className="text-red-600 text-2xl lg:text-4xl font-bold cursor-pointer" to="/">FREEFLIX</Link>
      {user?.email ? (
        <div>
          <Link className="text-white pr-4" to="/myaccount">My Account</Link>
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white" onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <div>
          <Link className="text-white pr-4 text-[14px] lg:text-[18px]" to="/signIn">Sign In</Link>
          <Link className="bg-red-600 px-4 py-2 lg:px-6 rounded cursor-pointer text-white text-[14px] lg:text-[18px]" to="/signUp">Sign Up</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar