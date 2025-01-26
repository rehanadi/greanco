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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5 justify-content-center align-items-center">
          <div className="col text-center">
            <Image src={client1} alt="Client" width={250} height={60} className="img-fluid" />
          </div>
          <div className="col text-center">
            <Image src={client2} alt="Client" width={250} height={60} className="img-fluid" />
          </div>
          <div className="col text-center">
            <Image src={client3} alt="Client" width={125} height={125} className="img-fluid" />
          </div>
          <div className="col text-center">
            <Image src={client4} alt="Client" width={250} height={60} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client