
import styles from "../MovieCard/MovieCard.module.scss"

const MovieCard = ({data}: any) => {
    return (
        <>
        <div className={styles.cardItem}>
            <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                    <img src={data.Poster} />
                </div>
                <div className={styles.cardBottom}>
                    <div className={styles.cardInfo}>
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieCard
 