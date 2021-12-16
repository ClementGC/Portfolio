import styles from "../burger_menu/burger_menu.module.css"

export default function ResponsiveNav(props) {

    const {onClick, isActive} = props
    
    return (
        <div className={styles.nav} onClick={(e) => onClick(e)}>
            <span className={isActive ? styles.nav_item_active : styles.nav_item}></span>
            <span className={isActive ? styles.nav_item_active : styles.nav_item}></span>
            <span className={isActive ? styles.nav_item_active : styles.nav_item}></span>
        </div>
    )
}