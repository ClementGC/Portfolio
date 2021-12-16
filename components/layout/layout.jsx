import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/layout.module.css'
import profilPicture from '../../public/CG_picture.jpg'
import ResponsiveNav from '../burger_menu/burger_menu'
import { useState } from 'react'

export default function Layout({ children, page }) {

    const [isActive, setActive] = useState(false)

    const ToggleMenu = () => {
        isActive ? setActive(false) : setActive(true)
    }

    return(
        <div className={styles.main_content}>
            {/* <svg className={styles.bg_polygone} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1080 900'>
                <polygon points='90 150 0 300 180 300'/><polygon points='90 150 180 0 0 0'/><polygon points='270 150 360 0 180 0'/><polygon points='450 150 360 300 540 300'/><polygon points='450 150 540 0 360 0'/><polygon points='630 150 540 300 720 300'/><polygon points='630 150 720 0 540 0'/><polygon points='810 150 720 300 900 300'/><polygon points='810 150 900 0 720 0'/><polygon points='990 150 900 300 1080 300'/><polygon points='990 150 1080 0 900 0'/><polygon points='90 450 0 600 180 600'/><polygon points='90 450 180 300 0 300'/><polygon points='270 450 180 600 360 600'/><polygon points='270 450 360 300 180 300'/><polygon points='450 450 360 600 540 600'/><polygon points='450 450 540 300 360 300'/><polygon points='630 450 540 600 720 600'/><polygon points='630 450 720 300 540 300'/><polygon points='810 450 720 600 900 600'/><polygon points='810 450 900 300 720 300'/><polygon points='990 450 900 600 1080 600'/><polygon points='990 450 1080 300 900 300'/><polygon points='90 750 0 900 180 900'/><polygon points='270 750 180 900 360 900'/><polygon points='270 750 360 600 180 600'/><polygon points='450 750 540 600 360 600'/><polygon points='630 750 540 900 720 900'/><polygon points='630 750 720 600 540 600'/><polygon points='810 750 720 900 900 900'/><polygon points='810 750 900 600 720 600'/><polygon points='990 750 900 900 1080 900'/><polygon points='180 0 90 150 270 150'/><polygon points='360 0 270 150 450 150'/><polygon points='540 0 450 150 630 150'/><polygon points='900 0 810 150 990 150'/><polygon points='0 300 -90 450 90 450'/><polygon points='0 300 90 150 -90 150'/><polygon points='180 300 90 450 270 450'/><polygon points='180 300 270 150 90 150'/><polygon points='360 300 270 450 450 450'/><polygon points='360 300 450 150 270 150'/><polygon points='540 300 450 450 630 450'/><polygon points='540 300 630 150 450 150'/><polygon points='720 300 630 450 810 450'/><polygon points='720 300 810 150 630 150'/><polygon points='900 300 810 450 990 450'/><polygon points='900 300 990 150 810 150'/><polygon points='0 600 -90 750 90 750'/><polygon points='0 600 90 450 -90 450'/><polygon points='180 600 90 750 270 750'/><polygon points='180 600 270 450 90 450'/><polygon points='360 600 270 750 450 750'/><polygon points='360 600 450 450 270 450'/><polygon points='540 600 630 450 450 450'/><polygon points='720 600 630 750 810 750'/><polygon points='900 600 810 750 990 750'/><polygon points='900 600 990 450 810 450'/><polygon points='0 900 90 750 -90 750'/><polygon points='180 900 270 750 90 750'/><polygon points='360 900 450 750 270 750'/><polygon points='540 900 630 750 450 750'/><polygon points='720 900 810 750 630 750'/><polygon points='900 900 990 750 810 750'/><polygon points='1080 300 990 450 1170 450'/><polygon points='1080 300 1170 150 990 150'/><polygon points='1080 600 990 750 1170 750'/><polygon points='1080 600 1170 450 990 450'/><polygon points='1080 900 1170 750 990 750'/>
            </svg> */}

            {/* <svg className={styles.bg_polygone} xmlns='http://www.w3.org/2000/svg'  width='9' height='9' viewBox='0 0 90 90'><rect fill='#1E1E28' width='90' height='90'/><circle fill-opacity='1' fill='#1E1E28'  cx='45' cy='45' r='20'/><g fill='#1E1E28'  fill-opacity='1'><circle  cx='0' cy='90' r='20'/><circle  cx='90' cy='90' r='20'/><circle  cx='90' cy='0' r='20'/><circle  cx='0' cy='0' r='20'/></g></svg> */}
            <Head>
                <title>{page}</title>
            </Head>
            <div className={styles.nav_container}>
                <ResponsiveNav
                    onClick={(e) => ToggleMenu(e)}
                    isActive={isActive}
                />
            </div>
                <header className={isActive ? styles.main_header_active : styles.main_header}>
                    <div className={styles.profil_picture}>
                        <Image
                            src={profilPicture}
                            alt="Clément Gatouillat Picture"
                            width={150}
                            height={150}   
                        />
                    </div>
                    <nav className={styles.main_nav}>
                        <Link href='/accueil'>
                            <a>Accueil</a>
                        </Link>
                        <Link href='/a-propos'>
                            <a>A propos</a>
                        </Link>
                        <Link href='/competences'>
                            <a>Compétences</a>
                        </Link>
                        <Link href='/realisations'>
                            <a>Réalisations</a>
                        </Link>
                        <Link href='/contact'>
                            <a>Contact</a>
                        </Link>
                    </nav>
                    <nav className={styles.social_nav}>
                        <Link href='/accueil'>
                            <a className={styles.social_items}>
                                <Image 
                                    src="/linkedin-brands.svg"
                                    height={35}
                                    width={35}
                                />
                            </a>
                        </Link>
                        <Link href='/a-propos'>
                            <a className={styles.social_items}>
                                <Image 
                                    src="/github-square-brands.svg"
                                    height={35}
                                    width={35}
                                />
                            </a>
                        </Link>
                        <Link href='/competences'>
                            <a className={styles.social_items}>
                                <Image 
                                    src="/envelope-square-solid.svg"
                                    height={35}
                                    width={35}
                                />
                            </a>
                        </Link>
                    </nav>
                </header>
            {children}
        </div>
    )
}