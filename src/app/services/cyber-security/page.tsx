import React from 'react'
import styles from '@/styles/services.module.css'
import Image from "next/image"
import serviceSecurity from '@/assets/images/service-security.svg'
import ButtonContact from "@/components/buttons/ButtonContact"

const ServicePage = () => {
  return (
    <>
      <div className="container py-5">
        <h1 className={`mb-5 fs-4 ${styles.title}`}>Cyber Security</h1>
        <div className="row pt-3 pb-5 mb-3">
          <div className="col-md-4">
            <div className="position-relative w-100 h-100">
              <Image src={serviceSecurity} alt="Cyber Security" fill />
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column align-items-start gap-3">
              <p>
                Cyber Security adalah praktik melindungi komputer, server, perangkat seluler, sistem elektronik, jaringan, dan data dari serangan berbahaya siber (cybercrime). Sederhananya, keamanan siber adalah perisai yang melindungi dunia digital kita dari ancaman seperti peretas, virus, malware, dan serangan siber lainnya.
              </p>
              <p className={`${styles.textAction} fw-medium`}>
                Diskusikan lebih lanjut mengenai Cyber Security bersama kami
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