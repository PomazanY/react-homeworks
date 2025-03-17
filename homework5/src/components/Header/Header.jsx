import styles from "./Header.module.css";

const Header = () => {
    return (

        <nav className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <a className={styles.logo} href="/">Cooljob</a>
                    <ul className={styles.menu}>
                        <li><a className={styles.menu_link} href="#">Поиск работы</a></li>
                        <li><a className={styles.menu_link} href="#">Поиск стартапов</a></li>
                    </ul>
                    <div>
                        <a href="/register">Регистрация</a>
                        <button>Вход</button>
                    </div>
                </div>

            </div>
        </nav>


    )
}
export default Header;