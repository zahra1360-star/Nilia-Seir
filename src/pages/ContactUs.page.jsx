import React from 'react';

const ContactUsPage = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h4>تماس با ما</h4>
        </div>
      </div>
      <div className="row align-items-center">
        <div col-md-7>
          <div class="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">
              Default checked radio
            </label>
          </div>
          <div>

          </div>
        </div>
        <div col-md-5>
          dddddddddddd
        </div>

      </div>
    </div>
  );
};

export default ContactUsPage;