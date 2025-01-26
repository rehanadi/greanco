import React from 'react'
import Image from "next/image";
import client1 from '@/assets/images/clients/granvsa.png';
import client2 from '@/assets/images/clients/esbex.png';
import client3 from '@/assets/images/clients/ef.png';
import client4 from '@/assets/images/clients/nearwala.png';

const Client = () => {
  return (
    <section id="client" className="section">
      <div className="container">
        <h3 className="section-title mb-5">Client</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <Image src={client1} alt="Client" width={250} height={60} />
          <Image src={client2} alt="Client" width={250} height={60} />
          <Image src={client3} alt="Client" width={125} height={125} />
          <Image src={client4} alt="Client" width={250} height={60} />
        </div>
      </div>
    </section>
  )
}

export default Client