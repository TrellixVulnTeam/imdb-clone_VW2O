import styles from "../Header/Header.module.scss"


const Header = () => {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.lgo}> </div>
                <div className={styles.userImage}>
                    <img src={''} />
                </div>
            </div>
        </>
    )
}

export default Header