import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage } from '../storage/storage';
import { AuthenticationConstants } from '../constants/authentication-contants';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getStorage(AuthenticationConstants.ACCESS_TOKEN);
      
      if (token) {
        // const isValid = await verifyToken(token);
        const isValid = false;
        setIsAuthenticated(isValid);
        
        if (!isValid) {
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, [navigate]);

  return { isAuthenticated, isLoading };
};