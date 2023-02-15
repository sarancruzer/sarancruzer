import React from 'react';

const PoliticianCtaForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="cta__input-wrapper-10 d-sm-flex align-items-center">
        <div className="cta__input-10">
          <input type="email" placeholder="E-mail*" />
        </div>
        <div className="cta__input-10 sm-input">
          <input type="text" placeholder="Zip code*" />
        </div>
      </div>
      <div className="cta__btn-10">
        <button type="submit" className="tp-btn-8">
          Request
        </button>
      </div>
    </form>
  );
};

export default PoliticianCtaForm;