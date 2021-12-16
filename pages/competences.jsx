import Link from 'next/link'
import Layout from "../components/layout/layout"
import styles from "../styles/accueil.module.css"

export default function Skills() {
    return(
        <>
            <Layout page='Compétences'>
                <main className={styles.main_content}>
                    <h2 className={styles.main_title}>Compétences</h2>
                </main>
            </Layout>
        </>
    )
}