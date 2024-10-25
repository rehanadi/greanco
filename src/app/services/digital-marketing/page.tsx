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
                Digital marketing adalah strategi pemasaran yang menggunakan internet dan perangkat digital untuk mencapai target audiens. Berbeda dari pemasaran tradisional, digital marketing memanfaatkan berbagai platform online seperti media sosial, mesin pencari, email, dan situs web untuk mempromosikan produk atau jasa. Tujuannya adalah menjangkau audiens yang lebih luas dan meningkatkan engagement secara langsung dan terukur.
              </p>
              <p className={`${styles.textAction} fw-medium`}>
                Diskusikan lebih lanjut mengenai Digital Marketing bersama kami
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