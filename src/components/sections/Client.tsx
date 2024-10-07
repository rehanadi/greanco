import React from 'react'
import Image from "next/image";
import client1 from '@/assets/images/client1.png';
import client2 from '@/assets/images/client2.png';
import client3 from '@/assets/images/client3.png';
import client4 from '@/assets/images/client4.png';

const Client = () => {
  return (
    <section className="section">
      <div className="container">
        <h3 className="section-title">Client</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <Image src={client1} alt="Client" width={250} height={75} />
          <Image src={client2} alt="Client" width={250} height={75} />
          <Image src={client3} alt="Client" width={250} height={75} />
          <Image src={client4} alt="Client" width={250} height={75} />
        </div>
      </div>
    </section>
  )
}

export default Client