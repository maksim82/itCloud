import { useAuth } from '../../hook/useAuth';
import { useNavigate } from 'react-router-dom';

import styles from  "./navbar.module.scss";
import logoutImg from '../../utils/logout.png';

const Navbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.logo}>It-Cloud</div>
            <div>
                <div className={styles.wrapper__img} onClick={() => logout(() => navigate('/login', {replace: true}))}>
                    <img src={logoutImg} alt="Выход" width="40px" height="40px" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;









// api и прочее

// роли

// <div className={styles.users}>Эксперт</div>