import Image from "next/image"
import Link from "next/link"
import logo from '@/assets/images/logo.svg'
import {
  FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaRegCopyright,
} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <Link href='/'>
                <Image src={logo} alt='Greanco' width={250} height={80} />
              </Link>
            </div>

            <div className="col-md-3">
              <h4 className="fs-5 fw-semibold mb-3">Site map</h4>
              <div className="d-flex align-items-center gap-3">
                <Link href='/'>
                  <FaInstagram className="fs-4" />
                </Link>
                <Link href='/'>
                  <FaFacebook className="fs-4" />
                </Link>
                <Link href='/'>
                  <FaLinkedin className="fs-4" />
                </Link>
              </div>
            </div>

            <div className="col-md-3">
              <h4 className="fs-5 fw-semibold mb-3">Contact</h4>
              <div className="d-flex align-items-center gap-3 mb-3">
                <FaPhoneAlt className="fs-6" />
                <span>+62 895 147 886 08</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <MdEmail className="fs-5" />
                <span>greanco.info@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container py-2">
          <div className="d-flex flex-column flex-md-row justify-content-md-between gap-3">
            <div className="d-flex align-items-center gap-2">
              <FaRegCopyright />
              <span>GREANCO. ALL RIGHTS RESEVED. </span>
            </div>
            <div>
              GREANCO COMPANY | TERMS & CONDITIONS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer