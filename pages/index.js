import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loader from '../components/loader/loader'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clément Gatouillat Portfolio</title>
        <meta name="description" content="My name is Clément Gatouillat and this website is my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Loader/>
      </main>
    </div>
  )
}
