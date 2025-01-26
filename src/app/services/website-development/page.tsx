import React from 'react'
import styles from '@/styles/services.module.css'
import Image from "next/image"
import serviceWebsite from '@/assets/images/service-website.svg'
import ButtonContact from "@/components/buttons/ButtonContact"

const ServicePage = () => {
  return (
    <>
      <div className="container py-5">
        <h1 className={`mb-5 fs-4 ${styles.title}`}>Website Development</h1>
        <div className="row pt-3 pb-5 mb-3">
          <div className="col-md-4">
            <div className="position-relative w-100 h-100">
              <Image src={serviceWebsite} alt="Website Development" fill />
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column align-items-start gap-3">
              <p>
                Website Development is the process of creating and developing websites. It involves various stages, from conceptual planning and design to developing the program code to make the website function optimally.
              </p>
              <p className={`${styles.textAction} fw-medium`}>
                Discuss Website Development further with us.
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