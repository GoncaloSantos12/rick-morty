import styles from './Search.module.css'

export function Search({ total, search }) {
    return (
        <div className={styles.container}>
            <div className={styles.total}>{total} Characters found</div>
            <form className={styles.form}>
                <input
                    placeholder="Search"
                    type="Text"
                    onChange={search}
                />
            </form>
        </div>
    )
}