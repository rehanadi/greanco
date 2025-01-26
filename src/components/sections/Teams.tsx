import React from 'react'
import Image from "next/image";
import styles from '@/styles/teams.module.css';
import ceo from '@/assets/images/ceo.png';
import team1 from '@/assets/images/team1.png';
import team2 from '@/assets/images/team2.png';
import team3 from '@/assets/images/team3.png';
import team4 from '@/assets/images/team4.png';
import team5 from '@/assets/images/team5.png';

const teams = [
  {
    name: 'Alex Jhosua Virdo Manurung',
    role: 'CEO',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Rehan Adi Purwana',
    role: 'CTO',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Ari Wibowo',
    role: 'CFO',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Adang Djumhur Faozi',
    role: 'Operation Officer',
    image: '/api/placeholder/200/200'
  },
  {
    name: 'Muhammad Fariz Warman',
    role: 'Technology Officer',
    image: '/api/placeholder/200/200'
  }
];

const Teams = () => {
  return (
    <section className={`${styles.teams} section`}>
      <div className="container">
        <h3 className="section-title mb-4">CEO Message</h3>
        <div className="row mb-5">
          {/* <div className="col-md-3 d-flex justify-content-center">
            <div className="position-relative w-75 h-100">
              <Image src={ceo} alt="CEO" fill />
            </div>
          </div> */}
          <div className="col-md-12">
            <div className={`${styles.greeting} card px-4 py-3`}>
              <p>
                Welcome to our company. We are dedicated to delivering unique technologies and modern approaches in every solution we offer. Thank you for your trust, and let's work together towards a brighter and more innovative future.
              </p>
              <p>
                This is a highly anticipated moment. We are proud to introduce our latest product, designed with cutting-edge technology and modern approaches. We believe this product will bring positive change and meet your needs in a more effective and efficient manner.
              </p>
            </div>
          </div>
        </div>

        <h3 className="section-title mb-4">Our Teams</h3>

        <div className="row g-4 justify-content-center">
          {teams.map((member, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card text-center h-100">
                <div
                  className="card-body d-flex flex-column justify-content-center"
                  style={{ height: '10rem' }}
                >
                  {/* <div className="rounded-circle overflow-hidden bg-info mx-auto mb-4" style={{width: '160px', height: '160px'}}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div> */}
                  <h3 className="card-title h4">{member.name}</h3>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <Image src={team1} alt="Team" width={200} height={270} />
          <Image src={team2} alt="Team" width={200} height={270} />
          <Image src={team3} alt="Team" width={200} height={270} />
          <Image src={team4} alt="Team" width={200} height={270} />
          <Image src={team5} alt="Team" width={200} height={270} />
        </div> */}
      </div>
    </section>
  )
}

export default Teams