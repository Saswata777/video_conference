import { useEffect } from 'react';
import { logoutUser } from '../service/api.js';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const res = await logoutUser();
        if (res && res.status === 200) {
          Cookies.remove('token'); // Remove the token from cookies
          alert("Logout Successful");
          navigate('/'); // Redirect to home or login page
        } else {
          alert("Logout failed");
          console.error("Unexpected response:", res);
        }
      } catch (error) {
        alert("An error occurred while logging out");
        console.error("Logout error:", error);
      }
    };

    handleLogout();
  }, [navigate]);

  return null;
};

export default Logout;
