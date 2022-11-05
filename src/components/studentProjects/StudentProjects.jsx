import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './studentProjects.module.scss';
import imgTest from '../../utils/projectStartup/image_1.png';

const StudentProjects = () => {
    const limit = 4;
    const [offset, setOffset] = useState(0);
    const [charList, setCharList] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        Request();
    }, []);

    const getProjects = async () => {
        const res = await fetch(`http://localhost:8080/main/proj/all?offset=${offset}&limit=${limit}`);
        
        const body = await res.json();
        console.log(body);
        return body.map(item => {
            return {
                id: item.id,
                description: item.description,
                rat: item.rat,
                img: item.img,
                name: item.name
            };
        });
    };


    const Request = async () => {
        setLoad(true);
        getProjects()
            .then(onCharListLoaded);
    };

    const onCharListLoaded = (newCharList) => {
        setCharList(charList => [...charList, ...newCharList]);
        setLoad(false);
        setOffset(offset => offset + limit);
    };

    return (
        <div className={styles.wrapper}>
            <h1>Проекты</h1>
            <div className={styles.filters}>
                <input type="text" placeholder='Введите название проекта' />
            </div>
            <div className={styles.yourProjects}>
                <button><Link to='/create'>Создать свой проект</Link></button>
            </div>
            <div className={styles.items}>
                {charList.map(item => (
                    <div className={styles.item} key={item.id}>
                        <h3>{item.name}</h3>
                        <div className={styles.infoBlock}>
                        <div className={styles.img__description}>
                            <img 
                                src={item.img ? item.img : imgTest} 
                                alt="Обзор проекта" 
                                width="470px" 
                                height="290px" />
                        </div>
                        <div className={styles.description}>
                            <div>
                                {item.description}
                            </div>
                            {item.rat ? <div className={styles.rat}>Рейтинг: {item.rat}</div> : null}
                            <Link to={`/${item.id}`}>Подробнее</Link>
                        </div>
                    </div>
                </div> 
                ))}
            </div>
            <div className={styles.btn__wrapper}>
                <button disabled={false} onClick={Request}>Подгрузить еще</button>
            </div>
        </div>
    )
}

export default StudentProjects;