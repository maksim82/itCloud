import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({children}) => {
    const location = useLocation();
    // const {user} = useAuth();

    if (!localStorage.getItem('token')) {
        return <Navigate to='/login' state={{from: location.pathname}} />
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default RequireAuth;