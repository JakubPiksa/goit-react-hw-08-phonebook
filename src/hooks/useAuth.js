import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserInfo,
} from '../redux/auth/selectors'; 

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserInfo);

  return {
    isLoggedIn,
    user,
  };
};
