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
              <Link className={styles.navLink} aria-current="page" href="/">Home</Link>
              <a className={styles.navLink} href="/#about">About</a>
              <li className={`nav-item dropdown`}>
                <a className={`${styles.navLink} dropdown-toggle`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu mt-2">
                  <li className="mb-2">
                    <Link 
                      className={`${styles.navLink} dropdown-item`}
                      href="/services/mobile-development"
                    >
                      Mobile Apps Development
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="mb-2">
                    <Link 
                      className={`${styles.navLink} dropdown-item`}
                      href="/services/website-development"
                    >
                      Website Development
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="mb-2">
                    <Link 
                      className={`${styles.navLink} dropdown-item`}
                      href="/services/cyber-security"
                    >
                      Cyber Security
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link 
                      className={`${styles.navLink} dropdown-item`}
                      href="/services/digital-marketing"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              <Link className={styles.navLink} href="/#client">Client</Link>
              {/* <Link className={styles.navLink} href="/#contact">Contact</Link> */}
              <Link className={`${styles.navLink} ${styles.enterseaLink}`} href="/">Entersea</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header