import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import styles from './layout.module.scss';

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <Outlet />
        </div>
    )
}

export default Layout;