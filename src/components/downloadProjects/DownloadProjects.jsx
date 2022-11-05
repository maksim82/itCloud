import { useState } from 'react';

import avatarImg from "../../utils/avatar.png";

import styles from './downloadProjects.module.scss';

const DownloadProjects = () => {
    const [data, setData] = useState({
        name: "",
        participants: "",
        ref: "",
        university: "",
        course: "",
        description: "",
        city: ""
    });

    const [message, setMessage] = useState("");

    const handleValue = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        }); 
    };

    const handleBlur = e => {
        const parseStr = e.target.value.split('\n');
        setData({
            ...data,
            participants: parseStr
        });
    };

    const sendForm = async () => {
        console.log(data);
        const res = await fetch('http://localhost:8080/main/proj', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            });
        const answer = await res.json();
        setMessage(answer);
    };

    const {name, participants, ref, university, course, description, city} = data;

    const btnMessage = message ? "Пользователь сохранен" : "Отправить";

    return (
        <div className={styles.wrapper}>
            <h2>Паспорт проекта</h2>
            <div className={styles.passportProject}>
                <div className={styles.personal}>
                    <div className={styles.wrapper__avatar}>
                        <img src={avatarImg} alt="Аватар" width="260px" height="240px" />
                    </div>
                    {/* <div className={styles.leader}>
                        <div className={`${styles.contact} ${styles.inputBox}`}>
                            <input type="text" name="contact" value={contact} onChange={handleValue} />
                            <span>Контакты</span>
                        </div>
                    </div> */}
                </div>
                <div className={styles.work}>
                    <div className={`${styles.team} ${styles.inputBox}`}>
                        <textarea name="participants" cols="20" rows="7" value={participants} onChange={handleValue} onBlur={handleBlur} />
                        <span>Команда</span>
                    </div>
                    <div className={`${styles.university} ${styles.inputBox}`}>
                        <input type="text" name="university" value={university} onChange={handleValue} />
                        <span>Университет</span>
                    </div>
                    <div className={`${styles.course} ${styles.inputBox}`}>
                        <input type="text" name="course" value={course} onChange={handleValue} />
                        <span>Курс</span>
                    </div>
                    <div className={`${styles.city} ${styles.inputBox}`}>
                        <input type="text" name="city" value={city} onChange={handleValue} />
                        <span>Город</span>
                    </div>
                </div>
                <div className={styles.project}>
                    <div className={`${styles.title} ${styles.inputBox}`}>
                        <input type="text" name="name" value={name} onChange={handleValue} />
                        <span>Название проекта</span>
                    </div>
                    <div className={`${styles.description} ${styles.inputBox}`}>
                        <textarea name="description" cols="30" rows="10" value={description} onChange={handleValue} />
                        <span>Описание проекта</span>
                    </div>
                    <div className={`${styles.downloadProject} ${styles.inputBox}`}>
                        <input type="text" name="ref" value={ref} onChange={handleValue} />
                        <span>Ссылка на проект</span>
                    </div>
                </div>
            </div>
            <div className={styles.btn}>
                <button onClick={sendForm}>{btnMessage}</button>
            </div>
        </div>
    )
}

export default DownloadProjects;