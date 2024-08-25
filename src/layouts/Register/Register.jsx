import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthContext";

const Register = () => {
  const [textPassword, setTextPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    setPasswordError("");

    const uppercaseRegex = /^(?=.*[A-Z])/;
    const lowercaseRegex = /^(?=.*[a-z])/;
    const lengthRegex = /^.{6,}$/;

    if (!uppercaseRegex.test(password)) {
      setPasswordError("Password must have at least one uppercase letter.");
      return;
    }

    if (!lowercaseRegex.test(password)) {
      setPasswordError("Password must have at least one lowercase letter.");
      return;
    }

    if (!lengthRegex.test(password)) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password, name, photo, form);
  };

  return (
    <div className="flex justify-center py-24 lg:py-0 lg:min-h-screen items-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <Helmet>
        <title>StoryPaths | Register</title>
      </Helmet>
      <div className="lg:w-1/3 mt-0 md:mt-20 mb-0 md:mb-10 w-11/12 md:w-3/4 border border-gray-300 rounded-md bg-white bg-opacity-80 p-6 shadow-lg">
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              autoFocus
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2">Photo URL</label>
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              name="photo"
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
              {passwordError && (
                <p className="text-red-600 text-sm mt-1">{passwordError}</p>
              )}
            </div>
          </div>
          <label className="block text-sm text-gray-800">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </label>
          <div className="mt-5">
            <input
              type="submit"
              value="Register"
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded focus:outline-none"
            />
          </div>
          <SocialLinks />
        </form>
      </div>
    </div>
  );
};

export default Register;
