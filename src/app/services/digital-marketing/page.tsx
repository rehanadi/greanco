import React from 'react'
import styles from '@/styles/services.module.css'
import Image from "next/image"
import serviceMarketing from '@/assets/images/service-marketing.svg'
import ButtonContact from "@/components/buttons/ButtonContact"

const ServicePage = () => {
  return (
    <>
      <div className="container py-5">
        <h1 className={`mb-5 fs-4 ${styles.title}`}>Digital Marketing</h1>
        <div className="row pt-3 pb-5 mb-3">
          <div className="col-md-4">
            <div className="position-relative w-100 h-100">
              <Image src={serviceMarketing} alt="Digital Marketing" fill />
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column align-items-start gap-3">
              <p>
                Digital marketing is a marketing strategy that utilizes the internet and digital devices to reach a target audience. Unlike traditional marketing, digital marketing leverages various online platforms such as social media, search engines, email, and websites to promote products or services. The goal is to reach a wider audience and increase engagement in a direct and measurable way.
              </p>
              <p className={`${styles.textAction} fw-medium`}>
                Let's discuss Digital Marketing further with us.
              </p>
              <ButtonContact />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicePage