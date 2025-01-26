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
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4">
            <div className="card h-100 px-5 pt-2 pb-5 d-flex flex-column justify-content-center align-items-center"
                 style={{ backgroundColor: 'rgba(255, 116, 0, 0.15)' }}>
              <h4 className="my-4 text-center fs-4 fw-medium">
                <Link className="service-link" href="/services/website-development">
                  Website Development
                </Link>
              </h4>
              <Link href="/services/website-development">
                <Image
                  src={software}
                  alt="Website Development"
                  width={150}
                  height={150}
                  className="m-4 mb-5"
                />
              </Link>
              <div>
                Website Development is the process of creating and developing websites to make the website function optimally.
              </div>
            </div>
          </div>

          {/* <div className="col-12 col-md-4">
            <div className="card h-100 px-5 pt-2 pb-5 d-flex flex-column justify-content-start align-items-center"
                 style={{ backgroundColor: 'rgba(8, 143, 126, 0.22)' }}>
              <h4 className="my-4 text-center fs-4 fw-medium">
                <Link className="service-link" href="/services/cyber-security">
                  Cyber Security
                </Link>
              </h4>
              <Link href="/services/cyber-security">
                <Image
                  src={security}
                  alt="Cyber Security"
                  width={150}
                  height={150}
                  className="m-4 mb-5"
                />
              </Link>
              <div>
                Cyber Security adalah praktik melindungi komputer, server, perangkat seluler, sistem elektronik, jaringan, dan data dari serangan berbahaya siber.
              </div>
            </div>
          </div> */}

          <div className="col-12 col-md-4">
            <div className="card h-100 px-5 pt-2 pb-5 d-flex flex-column justify-content-start align-items-center"
                 style={{ backgroundColor: 'rgba(217, 217, 217, 0.6)' }}>
              <h4 className="my-4 text-center fs-4 fw-medium">
                <Link className="service-link" href="/services/digital-marketing">
                  Digital Marketing
                </Link>
              </h4>
              <Link href="/services/digital-marketing">
                <Image
                  src={marketing}
                  alt="Digital Marketing"
                  width={150}
                  height={150}
                  className="m-4 mb-5"
                />
              </Link>
              <div>
                Digital marketing is a marketing strategy that uses the internet and digital devices to reach a target audience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services