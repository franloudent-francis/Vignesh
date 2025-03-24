import { useState, useEffect } from "react";
import {useNavigate} from 'react-router'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constant";

const useAuth = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser){
        setUser(JSON.parse(storedUser));
        setIsAuthorized(true);
    } 
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setUser({ });
    setIsAuthorized(false);
    navigate('/login')
  };

  return { user, logout,isAuthorized };
};

export default useAuth;
