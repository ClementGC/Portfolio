import Link from 'next/link'
import Layout from "../components/layout/layout"
import styles from "../styles/accueil.module.css"

export default function Contact() {
    return(
        <>
            <Layout page='Contact'>
                <main className={styles.main_content}>
                    <h2 className={styles.main_title}>Contact</h2>
                </main>
            </Layout>
        </>
    )
}