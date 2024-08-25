import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthContext";

const Login = () => {
  const [textPassword, setTextPassword] = useState(false);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        toast.success("Signed in!");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center py-24 lg:py-0 lg:min-h-screen items-center bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-400">
      <Helmet>
        <title>StoryPaths | Login</title>
      </Helmet>
      <div className="lg:w-1/3 w-11/12 md:w-3/4 border border-gray-300 rounded-md bg-white bg-opacity-80 p-6 shadow-lg">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              autoFocus
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Password</label>
            <div className="relative">
              <input
                type={textPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                name="password"
              />
              <div
                onClick={() => setTextPassword(!textPassword)}
                className="absolute top-2/4 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {textPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <Link to="/register" className="text-gray-500 text-sm ">
              Don&apos;t have an account?{" "}
              <span className="text-blue-600 hover:underline">Register</span>
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded focus:outline-none"
            >
              Login
            </button>
          </div>
          <SocialLinks />
        </form>
      </div>
    </div>
  );
};

export default Login;
