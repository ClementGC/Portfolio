import Link from 'next/link'
import Layout from "../components/layout/layout"
import styles from "../styles/accueil.module.css"
import BtnStyle from "../styles/button.module.css"
import Typewriter from 'typewriter-effect';

export default function HomePage() {
    return(
        <>
            <Layout page='Accueil'>
                <main className={styles.main_content}>
                    <h2 className={styles.main_title}>
                        <Typewriter
                            className={styles.typewriter}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString('Clément Gatouillat')
                                .start();
                            }}
                            options={{
                                cursor: ' ',
                                delay: 50,
                                autoStart: true,
                            }}
                        />
                    </h2>
                    <p className={styles.main_text}>Front-End Développeur / Spécialisé Javascript</p>
                    <Link href="/contact">
                        <a className={BtnStyle.button}>
                            <span>Prendre contact</span>
                            <svg className={BtnStyle.logo} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="reply" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"></path></svg>
                        </a>
                    </Link>
                </main>
            </Layout>
        </>
    )
}