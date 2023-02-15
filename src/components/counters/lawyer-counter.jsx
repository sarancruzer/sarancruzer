import Image from 'next/image';
import React from 'react';
import counter_shape from '@assets/img/counter/4/counter-shape-1.png';
import CountUpContent from '../common/counter';

const counter_data = [
  { number: 726, text: '+', title: 'Successfully' },
  { number: 426, text: 'K', title: 'Happy Clients' },
  { number: 176, text: '+', title: 'Indictment' },
  { number: 1074, text: '+', title: 'Lawsuits' },
]

const LawyerCounter = () => {
  return (
    <section className="counter__area counter__border-2">
      <div className="container">
        <div className="counter__inner-4" data-bg-color="green-dark-2">
          <div className="conter__shape">
            <Image className="counter__shape-10" src={counter_shape} alt="shape" priority style={{width:'auto',height:'auto'}} />
          </div>
          <div className="row">
            {counter_data.map((counter, i) => (
              <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item-4-wrapper d-flex justify-content-center wow fadeInUp"
                  data-wow-delay=".3s" data-wow-duration="1s">
                  <div className="counter__item-4">
                    <h4 className="counter__title-4">
                      <span className="counter">
                        <CountUpContent number={counter.number} text={counter.text} />
                      </span>
                    </h4>
                    <div className="counter__content-4">
                      <p>{counter.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerCounter;