'use client';

import React from 'react'
import styles from '@/styles/services.module.css'
import { FaWhatsapp } from "react-icons/fa"
import { CONTACT_PHONE } from "@/constants";

const ButtonContact = () => {
  return (
    <button
      className={`${styles.btnContact} btn btn-success d-flex align-items-center gap-2 px-4 py-2`}
      onClick={() => window.open(`https://wa.me/${CONTACT_PHONE}`)}
    >
      <FaWhatsapp size={22} />
      <span className="fw-medium">Hubungi Kami</span>
    </button>
  )
}

export default ButtonContact