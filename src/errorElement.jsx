import {Link} from 'react-router'
import styles from './error.module.css'

const Error = () => {
    return (
        <>
            <div className={styles.errorBody}>
                 <div className={styles.spinner}></div>
                <div className = {styles.error}>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>the page you are looking for does not exist</p>
                </div>
                <Link to = '/'>Home</Link>

            </div>
           
        </>
    )

}

export default Error;