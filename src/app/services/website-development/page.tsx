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
                Website Development adalah proses pembuatan dan pengembangan situs web. Ini melibatkan berbagai tahapan, mulai dari perencanaan konsep, desain tampilan, hingga pengembangan kode program untuk membuat situs web berfungsi secara optimal.
              </p>
              <p className={`${styles.textAction} fw-medium`}>
                Diskusikan lebih lanjut mengenai Website Development bersama kami
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