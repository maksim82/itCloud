import styles from './ratstartup.module.scss';

import imgTest from "../../utils/projectStartup/image_1.png";

const RatStartup = () => {
    return (
        <div className={styles.ratStartup}>
            <h2>Рейтинг проектов</h2>
            <div className={`${styles.items} ${styles.horizontal_scroll_wrapper} ${styles.squares}`}>
                <div className={styles.item}>
                    <h3>Облачный сервис для открытых студенческих стартапов</h3>
                    <div>
                        <div className={styles.img__description}>
                            <img src={imgTest} alt="Обзор проекта" width="260px" height="160px" />
                        </div>
                        <div className={styles.rat}>Рейтинг: 4</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Облачный сервис для открытых студенческих стартапов</h3>
                    <div>
                        <div className={styles.img__description}>
                            <img src={imgTest} alt="Обзор проекта" width="260px" height="160px" />
                        </div>
                        <div className={styles.rat}>Рейтинг: 4</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Облачный сервис для открытых студенческих стартапов</h3>
                    <div>
                        <div className={styles.img__description}>
                            <img src={imgTest} alt="Обзор проекта" width="260px" height="160px" />
                        </div>
                        <div className={styles.rat}>Рейтинг: 4</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3>Облачный сервис для открытых студенческих стартапов</h3>
                    <div>
                        <div className={styles.img__description}>
                            <img src={imgTest} alt="Обзор проекта" width="260px" height="160px" />
                        </div>
                        <div className={styles.rat}>Рейтинг: 4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatStartup;