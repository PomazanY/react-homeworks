import styles from "./SpotifySection.module.css";

import { LogoIcon } from "../../assets/icons/logoHeader"
import {AppleIcon, GoogleIcon, XIcon} from "../../assets/icons/Logo"

const SpotifySection = () => {
    return (
        <section>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
                <h2 className={styles.text}>Sign in <br />with</h2>
                <div className={styles.container_logo}>
                <AppleIcon /> 
                <GoogleIcon />
                <XIcon />
                </div>
            </div>

        </section>
    )
}
export default SpotifySection;