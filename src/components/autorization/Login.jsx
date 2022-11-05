import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hook/useAuth';

import styles from './login.module.scss';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {sign} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const [value, setValue] = useState({
        login: '',
        password: ''
    });

    const onLogin = () => {
        sign(value, () => navigate(fromPage, {replace: true}), 'auth/log');
    };

    const handleValue = (e) => {
        setValue(() => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    };

    const { login, password } = value;
    return (
        <div className={styles.wrapper}>
            <div className={styles.authorization}>
                <h2>Авторизируйся на сайте!</h2>
                <input type="text" name="login" value={login} placeholder="Логин" onChange={handleValue} />
                <input type="password" name="password" value={password} placeholder="Пароль" onChange={handleValue} />
                <div className={styles.link}><Link to="/registration">Регистрация</Link></div>
                <button className={styles.button} onClick={onLogin}>Войти</button>
            </div>
        </div>
    )
}

export default Login;