import styles from './navbar.module.scss';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Navbar()   {

    const onLogout = () => {
        localStorage.removeItem('user')
        cookies.remove('pilot')
        cookies.remove('farm')
        cookies.remove('farmer')
        window.location = "/auth/login"
    }

    const goHome = () => {
        const user = JSON.parse(localStorage.getItem('user'));

    }

    const goProfile = () => {
        const user = JSON.parse(localStorage.getItem('user'));

    }

    return (
        <div className={styles['navbar']}>
            <div className={styles['nav-links']}>
                <div className={styles['nav-item']} style={{cursor: "pointer"}} onClick={goHome}>
                    Home
                </div>
                <div className={styles['nav-item']}>
                    Contact
                </div>
                <div className={styles['nav-item']} onClick={goProfile}>
                    Profile
                </div>

                <div className={styles['nav-item']} style={{cursor: "pointer"}}>
                    <button className={styles['nav-item']} style={{background: "none"}} onClick={onLogout}>Logout</button>
                </div>
            </div>
            
            <div className={styles['nav-search']}>
                {/* <span> */}
                    <img src="https://img.icons8.com/ios-glyphs/20/null/search--v1.png"/>
                    <input type="text" placeholder="search" name="search" />
                {/* </span> */}
            </div>
        </div>
    )
}

export default Navbar;