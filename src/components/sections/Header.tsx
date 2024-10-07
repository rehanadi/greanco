import Link from "next/link"
import logo from '@/assets/images/logo.svg'
import Image from "next/image"
import styles from '@/styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className='navbar-brand' href='/'>
            <Image src={logo} alt='Greanco' width={150} height={40} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto" style={{ gap: '20px' }}>
              <a className={styles.navLink} aria-current="page" href="#">Home</a>
              <a className={styles.navLink} href="#">About</a>
              <a className={styles.navLink} href="#">Services</a>
              <a className={styles.navLink} href="#">Client</a>
              <a className={styles.navLink} href="#">Contact</a>
              <a className={`${styles.navLink} ${styles.enterseaLink}`} href="#">Entersea</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header