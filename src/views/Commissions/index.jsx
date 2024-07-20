import React, { useState } from 'react'
import './index.css'
import { Form } from 'react-bootstrap';

const Commissions = () => {
  const [percentage, setPercentage] = useState(5);
  let value;

  const handleChange = (e) => {
    value = e.target.value;
    if (value >= 5 && value <= 100) {
      setPercentage(value)
    }
  }

  const [isClicked, setClicked] = useState(false);

  const handleUpArrow = () => {
    let value = percentage;
    setPercentage(++value);
  }

  const handleDownArrow = () => {
    let value = percentage;
    setPercentage(--value);
  }

  return (
    <div className='p-4 commission'>
      <h4>
        Do you accept to pay commission?
      </h4>

      <p className='mt-3'>
        You can set the base price to your properties, and the system will automatically calculate the price for your properties <br />
        with your commission rates.
      </p>
      <p className='mt-2'>
        Your commission percentage of the deal they are willing to give us (starting at 5%, but it can be higher).
      </p>
      <p className='mt-2'>
        Our system prioritizes listings with higher percentages, pushing them to the top of the search results.
      </p>

      <Form.Group className="d-flex gap-2 mt-4">
        <Form.Label className={`${isClicked ? "btn-active" : "btn-nonActive"}`} htmlFor="yes">Yes</Form.Label>
        <Form.Check className="d-none" type="radio" name="option" id="yes" onClick={() => setClicked(true)} />

        <Form.Label className={`${!isClicked ? "btn-active" : "btn-nonActive"}`} htmlFor="no">No</Form.Label>
        <Form.Check className="d-none" type="radio" name="option" id="no" onClick={() => setClicked(false)} />
      </Form.Group>

      {!isClicked && (
        <div className="mt-3 d-flex gap-2">
          <p>The platform will get charged 5% from your customer. </p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3339 17.5031H6.6645C4.3627 17.5031 2.49609 15.6365 2.49609 13.3347V6.66528C2.49609 4.36349 4.3627 2.49688 6.6645 2.49688H13.3339C15.6357 2.49688 17.5023 4.36349 17.5023 6.66528V13.3347C17.5023 15.6365 15.6357 17.5031 13.3339 17.5031Z" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.99804 6.66528C9.88299 6.66528 9.78962 6.75865 9.79045 6.8737C9.79045 6.98875 9.88383 7.08212 9.99887 7.08212C10.1139 7.08212 10.2073 6.98875 10.2073 6.8737C10.2073 6.75865 10.1139 6.66528 9.99804 6.66528" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.2087 13.4881V9.52814H9.375" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
      )}

      {/* Content that should appear after clicking 'Yes' button */}
      {isClicked && (
        <div className='mt-3'>
          <p className='fs-8'>Commissions rate percentage</p>

          <div className="mt-2 d-flex align-items-center gap-1">
            <input type="number" value={percentage} onChange={handleChange}
              className="form-control" placeholder="0"
            />

            <span className="percentage-symbol">%</span>

            <div className='input-container-items'>
              <span className='arrows'>
                <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path onClick={handleUpArrow}
                    className='arrow' d="M15 8L12 5L9 8" stroke="#B5B5B5"
                    strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"
                  />
                  <path onClick={handleDownArrow}
                    className='arrow' d="M9 16L12 19L15 16" stroke="#B5B5B5"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <p className='mt-4'>Commission value starting from 5% to up on.</p>

          <p className='mt-2'>
            Your commission percentage of the deal they are willing to give us (starting at 5%, but it can be higher). <br />
            Our system prioritizes listings with higher percentages, pushing them to the top of the search results.
          </p>
        </div>
      )}
      </div>
  )
}

export default Commissions
