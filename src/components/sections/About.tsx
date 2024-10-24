import React from 'react'
import Image from "next/image";
import styles from '@/styles/about.module.css';
import teams from '@/assets/images/teams.svg';
import check from '@/assets/images/check.svg';
import arrowRight from '@/assets/images/arrow-right.svg';
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className={`${styles.about} section fw-medium`}>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-4">
            <div className="position-relative w-100 h-100">
              <Image src={teams} alt="Teams" fill />
            </div>
          </div>
          <div className="col-md-8 ps-md-5">
            <div className="d-flex flex-column jusfify-content-start align-items-start gap-3">
              <p>
                Selamat datang di Greanco Kami adalah perusahaan teknologi yang berkomitmen untuk membantu bisnis Anda tumbuh pesat melalui solusi IT yang inovatif. Dengan keahlian kami di bidang pengembangan perangkat lunak, keamanan siber, dan pemasaran digital, kami siap menjadi mitra strategis Anda dalam menghadapi tantangan bisnis di era digital.
              </p>
              <ul className="p-0 list-unstyled d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Inovasi</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Efisiensi</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Solusi</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Pengembangan</span>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-success text-white fw-semibold py-2 px-3 d-flex align-items-center gap-3"
                style={{ backgroundColor: '#088F7E' }}
              >
                <span>Pelajari Selengkapnya</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About