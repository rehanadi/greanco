import React from 'react'
import Image from "next/image";
import software from '@/assets/images/software.svg';
import security from '@/assets/images/security.svg';
import marketing from '@/assets/images/marketing.svg';
import web from '@/assets/images/web.svg';
import mobile from '@/assets/images/mobile.svg';
import Link from "next/link";
import styles from "@/styles/services.module.css";

const Services = () => {
  return (
    <section className="section">
      <div className="container pb-5">
        <h3 className="section-title mb-5">We offer to your business growth</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div
            className={`${styles.serviceCard} card px-5 pt-2 pb-5 d-flex flex-column justify-content-center align-items-center`}
            style={{ backgroundColor: 'rgba(255, 116, 0, 0.15)' }}
          >
            <h4 className="my-4 text-center fs-4 fw-medium">
              <Link
                className={styles.serviceLink}
                href="/services/mobile-development"
              >
                Software Development
              </Link>
            </h4>
            <Image
              src={software}
              alt="Software Development"
              width={150}
              height={150}
              className="m-4 mb-5"
            />
            <div className="d-flex align-items-center gap-3 align-self-start mb-3">
              <Image
                src={web}
                alt="Web Development"
                width={30}
                height={30}
              />
              <Link
                className={styles.serviceLink}
                href="/services/web-development"
              >
                Web Development
              </Link>
            </div>
            <div className="d-flex align-items-center gap-3 align-self-start mb-5">
              <Image
                src={mobile}
                alt="Mobile Development"
                width={30}
                height={30}
              />
              <Link
                className={styles.serviceLink}
                href="/services/mobile-development"
              >
                Mobile Development
              </Link>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} card px-5 pt-2 pb-5 d-flex flex-column justify-content-start align-items-center`}
            style={{ backgroundColor: 'rgba(8, 143, 126, 0.22)' }}
          >
            <h4 className="my-4 text-center fs-4 fw-medium">
              <Link
                className={styles.serviceLink}
                href="/services/cyber-security"
              >
                Cyber Security
              </Link>
            </h4>
            <Image
              src={security}
              alt="Cyber Security"
              width={150}
              height={150}
              className="m-4 mb-5"
            />
          </div>

          <div
            className={`${styles.serviceCard} card px-5 pt-2 pb-5 d-flex flex-column justify-content-start align-items-center`}
            style={{ backgroundColor: 'rgba(217, 217, 217, 0.6)' }}
          >
            <h4 className="my-4 text-center fs-4 fw-medium">
              <Link
                className={styles.serviceLink}
                href="/services/digital-marketing"
              >
                Digital Marketing
              </Link>
            </h4>
            <Image
              src={marketing}
              alt="Digital Marketing"
              width={150}
              height={150}
              className="m-4 mb-5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services