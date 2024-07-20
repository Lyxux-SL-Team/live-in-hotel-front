import React from 'react'
import './index.css'
import { Home, Pencil, Door, CoffeeCup, Court } from './icons'

const Review = () => {
  const bulletPoints = [
    "Base rate: ILS 3000000",
    "1 twin bed",
    "1 bathroom (private bathroom)",
    "Non-smoking",
    "Sleeps 1 (1 adult, 0 children)"
  ];

  const imageConainers = [...Array(7)];

  return (
    <div className='container p-4 review'>
      <h4>Review your listing</h4>

      {/* -----------------------------------------------------Listing Basics--------------------------------------------- */}
      <div className='mt-5'>
        <div className='d-flex align-items-center gap-3'>
          <Home /> <h5 className='mt-2'>Listing basics</h5>
        </div>

        <div className='row-container mt-2'>
          <div className="row p-4">
            <div className="col">
              <h6>Begin hotel</h6>
              <div className="mt-3">
                <p>begin 159, 159, 7229212, Tel Aviv-Yafo, ISR</p>
                <p>Phone: +972 52 222 2932</p>
              </div>
            </div>
          </div>

          <hr className='mt-0 mb-0' />

          <div className="row p-4">
            <div className="col d-flex justify-content-between">
              <h6>Photos</h6>
              <button className='btn-edit'>
                <Pencil /> Edit
              </button>
            </div>
          </div>

          <div className="row p-4 me-8" id='parent-image-container'>
            {imageConainers.map((imageConainer) => {
              return (
                <div className="col">
                  <div className="image-container"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ---------------------------------------------------Rooms and rates--------------------------------------------- */}
        <div className='mt-5'>
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center gap-3'>
              <Door /> <h5 className='mt-2'>Rooms and rates</h5>
            </div>

            <button className='btn-edit'>
              <Pencil /> Edit
            </button>
          </div>

          <div className='row-container mt-2'>
            <div className="row p-4">
              <div className="col">
                <h6>Double or Twin Room, Men only, Private Pool, Annex Building</h6>
                <div className="mt-3">
                  <ul>
                    {bulletPoints.map((bulletPoint) => {
                      return (
                        <li>
                          <p>{bulletPoint}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------Property amenities--------------------------------------------- */}
        <div className='mt-5'>
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center gap-3'>
              <CoffeeCup /> <h5 className='mt-2'>Property amenities</h5>
            </div>

            <button className='btn-edit'>
              <Pencil /> Edit
            </button>
          </div>

          <div className='row-container mt-2'>
            <div className="row p-4">
              <div className="col">
                <h6>Breakfast</h6>
                <div className="parent-txt-container mt-3">
                  <div className='child-txt-container'>
                    <p>Free breakfast</p>
                    <p>Free breakfast - Daily start time 4:30 AM</p>
                  </div>

                  <div>
                    <p>Free breakfast - Daily end time 9:30 AM</p>
                    <p>Free continental breakfast</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className='mt-0 mb-0' />

            <div className="row p-4">
              <div className="col">
                <h6>Check-in/check-out</h6>
                <div className="mt-3">
                  <p>Check-in time starts at 8:30 AM</p>
                  <p>Check-out time is 6:00 AM</p>
                </div>
              </div>
            </div>

            <hr className='mt-0 mb-0' />

            <div className="row p-4">
              <div className="col">
                <h6>Internet</h6>
                <div className="mt-3">
                  <p>No Wi-Fi in guestrooms</p>
                  <p>No Wi-Fi</p>
                  <p>No wired internet</p>
                  <p>No wired internet in guestrooms</p>
                </div>
              </div>
            </div>

            <hr className='mt-0 mb-0' />

            <div className="row p-4">
              <div className="col">
                <h6>Parking</h6>
                <div className="parent-txt-container mt-3">
                  <div className='child-txt-container'>
                    <p>No self parking</p>
                    <p>No valet parking</p>
                  </div>

                  <div>
                    <p>No electric car charging station</p>
                    <p>Parking not available</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className='mt-0 mb-0' />

            <div className="row p-4">
              <div className="col">
                <h6>Pool access</h6>
                <div className="parent-txt-container mt-3">
                  <div className='child-txt-container'>
                    <p>No children's pool</p>
                    <p>No indoor pool</p>
                    <p>No outdoor pool (open all year)</p>
                  </div>

                  <div>
                    <p>No spa tub</p>
                    <p>No poolside bar</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className='mt-0 mb-0' />

            <div className="row p-4">
              <div className="col">
                <h6>Guest services</h6>
                <div className="parent-txt-container mt-3">
                  <div className='child-txt-container'>
                    <p>Winery attached</p>
                    <p>No luggage storage</p>
                    <p>No library</p>
                    <p>No newspapers in lobby</p>
                  </div>

                  <div>
                    <p>No safe-deposit box at front desk</p>
                    <p>No concierge services</p>
                    <p>No laundry facilities</p>
                    <p>No dry cleaning/laundry service</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className='mt-0 mb-0' />

            <div className="row p-4">
              <div className="col">
                <h6>Pets</h6>
                <div className="mt-3">
                  <p>Pets not allowed</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------Policies and settings--------------------------------------------- */}
          <div className='mt-5'>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center gap-3'>
                <Door /> <h5 className='mt-2'>Policies and settings</h5>
              </div>

              <button className='btn-edit'>
                <Pencil /> Edit
              </button>
            </div>

            <div className='row-container mt-2'>
              <div className="row p-4">
                <div className="col">
                  <h6>Payment method accepted</h6>
                  <div className="mt-3">
                    <p>Cash</p>
                  </div>
                </div>
              </div>

              <hr className='mt-0 mb-0' />

              <div className="row p-4">
                <div className="col">
                  <h6>Cancellation policy</h6>
                  <div className="mt-3">
                    <p>Travelers who cancel at any time (including no-shows) are charged 100% of the booking amount.</p>
                  </div>
                </div>
              </div>

              <hr className='mt-0 mb-0' />

              <div className="row p-4">
                <div className="col">
                  <h6>Taxes and fees</h6>
                  <div className="parent-txt-container mt-3">
                    <div className='child-txt-container'>
                      <p>VAT (Value Added Tax): 0.0% per stay</p>
                    </div>

                    <div>
                      <p>EC-Agency Tax 1 - INTERNAL USE ONLY: 0.0% per stay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------Registration Details--------------------------------------------- */}
          <div className='mt-5'>
            <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center gap-3'>
                <Court/> <h5 className='mt-2'>Registration Details</h5>
              </div>

              <button className='btn-edit'>
                <Pencil /> Edit
              </button>
            </div>

            <p className='mt-1'>
              Unless otherwise noted, this information is for internal record only and won’t be visible to travelers.
            </p>

            <div className='row-container mt-2'>
              <div className="row p-4">
                <div className="col">
                  <h6>Taxes</h6>
                  <div className="parent-txt-container mt-3">
                    <div className='child-txt-container'>
                      <p>Legal name of your property: Drrrr WEll</p>
                      <p>Tax identification number: 124566099</p>
                    </div>

                    <div>
                      <p>Is this property registered for VAT/GST? Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-end mt-5'>
          <button className='btn btn-dark rounded-pill'>Next</button>
        </div>
      </div>
    </div >
  )
}


export default Review
