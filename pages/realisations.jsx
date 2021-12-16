import Link from 'next/link'
import Layout from "../components/layout/layout"
import styles from "../styles/accueil.module.css"

export default function Work() {
    return(
        <>
            <Layout page='Réalisations'>
                <main className={styles.main_content}>
                    <h2 className={styles.main_title}>Réalisations</h2>
                </main>
            </Layout>
        </>
    )
}