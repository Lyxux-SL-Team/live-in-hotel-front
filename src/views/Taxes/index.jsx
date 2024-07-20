import React, { useRef, useState } from 'react'
import './index.css'
import { Form, Overlay } from 'react-bootstrap';

const Taxes = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [isClicked, setClicked] = useState(true);

  const exampleList = [
    { boldText: "VAT/GST", spanText: "registration number" },
    { boldText: "RUT in Uruguay", spanText: "(Registro Unico Tributario)" },
    { boldText: "ABN", spanText: "(Australian Business Number)" },
    { boldText: "CPF", spanText: "(Cadastro de Pessoas Físicas) or" }
  ];

  return (
    <section className='p-4'>
      <div className="taxes">
        <h5>Taxes</h5>
        <p className=''>
          To get your property listed faster and start sending guests your way,
          we need to collect your property's legal name and tax information.
        </p>

        <div className='p-4 mt-4' style={{ border: '1px solid #E7E7E7' }}>
          {/* -------------------------------Legal name of your property---------------------------------- */}
          <div>
            <h6 className='child-header'>Legal name of your property</h6>
            <p>
              The legal name associated with your property that you use for tax purposes or government registration.
              This could be the name of a company or an individual.
            </p>
            <textarea className='text-input form-control mt-3' />
          </div>

          {/* -------------------------Is this property registered for VAT/GST?--------------------------- */}
          <div className='mt-5'>
            <h6 className='child-header'>Is this property registered for VAT/GST?</h6>
            <p>
              Let us know if you collect and pay value-added tax (VAT) or goods and services tax (GST) for your property's services.
            </p>

            <Form.Group className="d-flex gap-2 mt-3">
              <Form.Label className={`${!isClicked ? "btn-active" : "btn-nonActive"}`} htmlFor="yes">Yes</Form.Label>
              <Form.Check className="d-none" type="radio" name="option" id="yes" onClick={() => setClicked(!isClicked)} />

              <Form.Label className={`${isClicked ? "btn-active" : "btn-nonActive"}`} htmlFor="no">No</Form.Label>
              <Form.Check className="d-none" type="radio" name="option" id="no" onClick={() => setClicked(!isClicked)} />
            </Form.Group>
          </div>

          {/* ---------------------------------VAT/GST ID (optional)------------------------------------ */}
          <div className='mt-4'>
            <h6 className='child-header'>VAT/GST ID (optional)</h6>
            <p>
              We display this number on your invoices to identify your business for tax purposes.
              Please select the appropriate number according to the rules of your business or region.
            </p>
            <textarea className='text-input form-control mt-3' />
          </div>

          <div className='mt-4 d-flex gap-2'>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="19" fill="#02BCBC" fillOpacity="0.1" />
              <circle cx="19" cy="19" r="9.5" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.125 22.5H19V18.25H17.875" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.671 15.0738L18.6715 15.0734C18.769 14.9761 18.9268 14.9763 19.0242 15.0737C19.1215 15.1712 19.1214 15.329 19.024 15.4264C18.9267 15.5238 18.7688 15.5238 18.6714 15.4265C18.5739 15.3292 18.5738 15.1713 18.671 15.0738" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <button type='button' ref={target} onClick={() => setShow(true)}>
              Some examples
            </button>

            {/* ----------------------------------------------Modal-------------------------------------- */}
            <Overlay target={target.current} show={show} placement="top" className='overlay'>
              {({
                placement: _placement,
                arrowProps: _arrowProps,
                show: _show,
                popper: _popper,
                hasDoneInitialMeasure: _hasDoneInitialMeasure,
                ...props
              }) => (
                <div className='p-2 fw-medium'
                  {...props}
                  style={{
                    position: 'absolute',
                    marginLeft: '115px',
                    backgroundColor: '#FFFFFF',
                    width: '328px',
                    height: '154px',
                    color: 'black',
                    border: '1px solid #DBDBDB',
                    borderRadius: '10px',
                    fontSize: '14px',
                    lineHeight: '24px',
                    ...props.style,
                  }}
                >
                  <div className='d-flex justify-content-end'>
                    <button className='p-0' onClick={() => setShow(false)}
                      style={{ backgroundColor: 'transparent', border: 'none' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.33203 5.33337L10.6654 10.6667" stroke="#02BCBC" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.6654 5.33337L5.33203 10.6667" stroke="#02BCBC" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div className='ps-2 '>
                    {exampleList.map((example, index) => {
                      return (
                        <p key={index}>
                          {example.boldText} <span className='fw-light'>{example.spanText}</span>
                        </p>
                      )
                    })}
                  </div>
                </div>
              )}
            </Overlay>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Taxes
