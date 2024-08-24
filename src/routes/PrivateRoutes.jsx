import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="flex justify-center">
        <span className="w-16 min-h-screen bg-blue-600 flex justify-center items-center loading loading-ring "></span>
      </div>
    );

  if (user) return children;

  return <Navigate state={location.pathname} to="/login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
