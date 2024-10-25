import React from 'react'
import styles from '@/styles/services.module.css'
import Image from "next/image"
import serviceMobile from '@/assets/images/service-mobile.svg'
import ButtonContact from "@/components/buttons/ButtonContact"

const ServicePage = () => {
  return (
    <>
      <div className="container py-5">
        <h1 className={`mb-5 fs-4 ${styles.title}`}>Mobile Apps Development</h1>
        <div className="row pt-3 pb-5 mb-3">
          <div className="col-md-4">
            <div className="position-relative w-100 h-100">
              <Image src={serviceMobile} alt="Mobile Apps Development" fill />
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column align-items-start gap-3">
              <p>
                Mobile Apps Development, atau dalam bahasa Indonesia sering disebut Pengembangan Aplikasi Seluler, adalah proses pembuatan aplikasi perangkat lunak yang dirancang khusus untuk perangkat mobile seperti smartphone dan tablet. Aplikasi ini bisa berupa game, aplikasi produktivitas, sosial media, e-commerce, dan masih banyak lagi.
              </p>
              <p className={`${styles.textAction} fw-medium`}>
                Diskusikan lebih lanjut mengenai Mobile Apps Development bersama kami
              </p>
              <ButtonContact />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 mb-5">
        <h2 className="fs-5 mb-4">Manfaat Pentingnya Mobile Apps Development</h2>
        <div className="d-flex flex-column gap-2 mb-5">
          <div>
            <span className={`${styles.textAction} fw-medium me-2`}>Aksesibilitas</span> Pengguna dapat mengakses aplikasi kapan saja dan di mana saja melalui perangkat seluler mereka.
          </div>
          <div>
            <span className={`${styles.textAction} fw-medium me-2`}>Personalisasi</span> Aplikasi dapat memberikan pengalaman yang lebih personal bagi pengguna.
          </div>
          <div>
            <span className={`${styles.textAction} fw-medium me-2`}>Efisiensi</span> Aplikasi dapat membantu pengguna menyelesaikan tugas dengan lebih cepat dan mudah.
          </div>
          <div>
            <span className={`${styles.textAction} fw-medium me-2`}>Engagement</span> Aplikasi dapat meningkatkan interaksi dengan pengguna dan membangun loyalitas merek.
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicePage