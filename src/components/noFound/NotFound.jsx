import { Link } from 'react-router-dom';

import styles from "./notFound.module.scss";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <div>Страница не найдена</div>
            <Link to='/'>Главная страница</Link>
        </div>
    );
};

export default NotFound;