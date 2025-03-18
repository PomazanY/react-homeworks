import styles from "./MediaLogos.module.css";

import { AppleIcon, GoogleIcon, XIcon } from "../../assets/icons/Logo"

const MediaLogos = () => {
    return (
        <>
            <div className={styles.container_logo}>
                <AppleIcon className={styles.icon} />
                <GoogleIcon className={styles.icon} />
                <XIcon className={styles.icon} />
            </div>


        </>
    )
}
export default MediaLogos;