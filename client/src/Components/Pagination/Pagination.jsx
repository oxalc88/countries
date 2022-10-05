import styles from './pagination.module.css';

export const Pagination = ({ nextpage, prevPage }) => {
    return (
        <div className={styles.Pagination}>
            <button onClick={prevPage} className={styles.prev} >
                Regresar a tanda anterior
            </button>
            <button onClick={nextpage} className={styles.next}
            >
                Ir a la siguiente tanda
            </button>
        </div >)
}