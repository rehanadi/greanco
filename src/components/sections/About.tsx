import React from 'react'
import Image from "next/image";
import styles from '@/styles/about.module.css';
import teams from '@/assets/images/teams.svg';
import check from '@/assets/images/check.svg';
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className={`${styles.about} section fw-medium`}>
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
                Welcome to Greanco. Our technology company is committed to helping your business grow rapidly through innovative IT solutions. With our software development, cybersecurity, and digital marketing expertise, we are ready to be your strategic partner in facing business challenges in the digital era.
              </p>
              <ul className="p-0 list-unstyled d-flex flex-column gap-2">
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Innovation, groundbreaking solutions, cutting-edge technology</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Efficiency, optimization, productivity</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Solutions, answers, remedies</span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <Image src={check} alt="Check" width={20} height={20} />
                  <span>Development, growth, expansion</span>
                </li>
              </ul>
              {/* <button
                type="button"
                className="btn btn-success text-white fw-semibold py-2 px-3 d-flex align-items-center gap-3"
                style={{ backgroundColor: '#088F7E' }}
              >
                <span>Pelajari Selengkapnya</span>
                <FaArrowRight />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About