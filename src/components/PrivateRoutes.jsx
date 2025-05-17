import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export const RefreshRoute = ({children}) =>{
  const {isAuthenticated} = useAuthContext();
  return isAuthenticated && children;
}

export default PrivateRoute;
