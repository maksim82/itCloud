import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

import styles from  './register.module.scss';

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {sign} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const [value, setValue] = useState({
        login: '',
        name: '',
        mid_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const onRegistr = async () => {
        sign(value, () => navigate(fromPage, {replace: true}), 'auth/reg');
    };

    const handleValue = e => {
        setValue(() => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    };

    const { login, email, password, name, last_name, mid_name } = value;
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.authorization}>
                <h2>Зарегистрируйся на сайте!</h2>
                <input type="text" name="login" value={login} placeholder="Логин" onChange={handleValue} />
                <input type="text" name="email" value={email} placeholder="Почта" onChange={handleValue} />
                <input type="text" name="name" value={name} placeholder="Имя" onChange={handleValue} />
                <input type="text" name="last_name" value={last_name} placeholder="Фамилия" onChange={handleValue} />
                <input type="text" name="mid_name" value={mid_name} placeholder="Отчество" onChange={handleValue} />
                <input type="password" name="password" value={password} placeholder="Пароль" onChange={handleValue} />
                <div className={styles.link}><Link to="/login">Авторизация</Link></div>
                <button className={styles.button} onClick={onRegistr}>Создать</button>
            </div>
        </div>
    )
}

export default Registration;

















// api and прочее

    //Получение ролей

    // const handleRole = e => {
    //     setValue(() => ({
    //         ...value,
    //         role: e.target.name
    //     }));
    // }

    // <div className={styles.checkRole}>
    //     <h3>Кем вы хотите быть?</h3>
    //     <div>
    //         <button name="user" onClick={handleRole} >Пользователем</button>
    //         <button name="expert" onClick={handleRole} >Экспертом</button>
    //     </div>
    // </div> 