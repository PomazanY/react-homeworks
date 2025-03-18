import styles from "./SpotifySection.module.css";

import { LogoIcon } from "../../assets/icons/logoHeader"
import MediaLogos from "../MediaLogos/MediaLogos";

const SpotifySection = () => {
    return (
        <section>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
                <h2 className={styles.text}>Sign in <br />with</h2>
                <MediaLogos/>
            </div>

        </section>
    )
}
export default SpotifySection;