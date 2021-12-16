import Link from 'next/link'
import Layout from "../components/layout/layout"
import styles from "../styles/accueil.module.css"

export default function About() {
    return(
        <>
            <Layout page='A propos'>
                <main className={styles.main_content}>
                    <h2 className={styles.main_title}>A propos</h2>
                </main>
            </Layout>
        </>
    )
}