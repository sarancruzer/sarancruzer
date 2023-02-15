import React from 'react';
import CountUpContent from '../common/counter';

const counter_data = [
  { num: 25, text: '+', title: 'Years Experience', subtitle: 'Over 47 projects' },
  { num: 12, text: '+', title: 'Features & Awards', subtitle: 'From design community' },
  { num: 96, text: '%', title: 'Clients Rating', subtitle: '30+ testimonials' },
]

const FreelancerCounter = () => {
  return (
    <div className="about__counter-wrapper mb-50">
      <div className="row gx-1 gy-1 gy-lg-0">
        {counter_data.map((counter, i) => (
          <div key={i} className="col-xxl-4 col-lg-4 col-md-6">
            <div className="about__counter-item d-flex justify-content-center align-items-center">
              <div className="about__counter-text mr-15">
                <h3>
                  <span className="counter">
                    <CountUpContent number={counter.num} text={counter.text} />
                  </span>
                </h3>
              </div>
              <div className="about__counter-content">
                <h3>{counter.title}</h3>
                <p>{counter.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancerCounter;