import styles from '../studentProject.module.scss';

const TitlePage = () => {
    const data = {
        title: "КРИТЕРИИ ОЦЕНКИ ЗАЯВОК НА УЧАСТИЕ В КОНКУРСЕ И ИХ ЗНАЧИМОСТЬ",
        description: [
            {
                id: '№',
                text: "Критерии оценки заявок на участие в конкурсе",
                mark: "Максимальное значение критерия в баллах"
            },
            {
                id: '1',
                text: "Технологичность стартап-проекта",
                mark: "10"
            },
            {
                id: '2',
                text: "Перспективы коммерциализации проекта",
                mark: "10"
            },            
            {
                id: '3',
                text: "Квалификация заявителя",
                mark: "10"
            }
        ]
    }
    return (
        <>
            <h2>{data.title}</h2>
            <div className={styles.table_box}>
                {data.description.map(({id, text, mark}) => {
                    const titleStyle = id === '№' ? styles.table_head : "" ;
                    return (
                        <div className={`${styles.table_row} ${titleStyle}`}>
                            <div className={styles.table_ceil}><p>{id}</p></div>
                            <div className={styles.table_ceil}><p>{text}</p></div>
                            <div className={`${styles.table_ceil} ${styles.last_ceil}`}><p>{mark}</p></div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.info}>
            При оценке заявки может быть начислен 1 (один) дополнительный балл за участие заявителя в 
            образовательных интенсивах (например, «Архипелаг 2121») и мероприятиях Leader-IО. Факт участия должен быть 
            указан заявителем при заполнении заявки в Системе, дополнительный балл будет начислен после получения Фондом 
            подтверждения от АНО «Платформа НТИ». 2 В случае если заявка на конкурс подана от заявителя, ранее получавшего 
            поддержку Фонда по программе «УМНИК», успешно завершившего реализацию договора гранта, а тематика заявляемого 
            на конкурс проекта соответствует проекту, поддержанному по программе «УМНИК», оценка по данному критерию 
            считается максимальной. 3 Для тех проектов, в заявках которых предусматривалось создание MVP и (или) доведение 
            товара/изделия/технологии до уровня технологической готовности не ниже TRL 3. 
            </div>
        </>
    )
}

export default TitlePage;