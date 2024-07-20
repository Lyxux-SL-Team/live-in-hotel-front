import React, { useState } from "react";
import { Form, Col, FloatingLabel } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import * as Icons from "tabler-icons-react";

const PoliciesAndSettings = () => {
  const [isCreditCardChecked, setIsCreditCardChecked] = useState(false);
  const [
    isYesSelectedInRequireAnyDeposits,
    setIsYesSelectedInRequireAnyDeposits,
  ] = useState(false);
  const [isGenralDepositsChecked, setIsGenralDepositChecked] = useState(false);
  const [isCleaningDepositChecked, setIsCleaningDepositChecked] =
    useState(false);
  const [isSpringBreakDepositChecked, setIsSpringBreakDepositChecked] =
    useState(false);
  const [
    isDamageDepositCollectedBeforeArrivalChecked,
    setIsDamageDepositCollectedBeforeArrivalChecked,
  ] = useState(false);
  const [isAlternateDepositPayment, setIsAlternateDepositPayment] =
    useState(false);
  const [
    selectedRadioDefaultCancellationPolicy,
    setSelectedRadioDefaultCancellationPolicy,
  ] = useState("");
  const [isTaxesAndFeesChecked, setIsTaxesAndFeesChecked] = useState({
    cityTax: false,
    fedaralTax: false,
    occupancyTax: false,
    districtTax: false,
    hotelTax: false,
    goodsAndServicesTax: false,
    harmonizedSalesTax: false,
    valueAddedTax: false,
  });

  const [longTermRentalsDiscount, setLongTermRentalsDiscount] = useState({
    threeMonths: false,
    fourMonths: false,
    fiveMonths: false,
    sixMonths: false,
    sevenMonths: false,
    eightMonths: false,
    nineMonths: false,
    tenMonths: false,
    elevenMonths: false,
    twelveMonths: false,
  });

  console.log(isTaxesAndFeesChecked);

  return (
    <section className="p-4">
      <form action="" className="d-flex flex-column gap-4">
      <p className="text-black fw-semibold fs-5">Policies And Settings</p>
        {/* 1 */}
        <div className="border p-3 rounded d-flex flex-column gap-3">
          <p
            className="text-black"
            style={{ fontSize: "18px", fontWeight: 400 }}
          >
            Which languages are spoken at your property?
          </p>
          <div className="d-flex gap-2">
            {/* Should get the value from the select language text field and set to a state and render here by mapping */}
            <p
              className="d-flex justify-content-around align-content-center border rounded-pill"
              style={{
                width: "74px",
                fontSize: "12px",
                padding: "2px 0",
                cursor: "pointer",
              }}
            >
              <span>English</span>
              <span>
                <Icons.X width={12} height={12} />
              </span>
            </p>
          </div>
          <div>
            <p style={{ fontSize: "14px" }}>Add a language</p>
            <div
              className="d-flex align-items-center gap-2 border rounded p-1 w-50"
              style={{ minWidth: "250px" }}
            >
              <Icons.Search width={16} height={16} className="border-right" />
              <input
                type="text"
                placeholder="Search"
                className="border-0 w-100"
                style={{ outline: "none" }}
              />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="border p-3 rounded d-flex flex-column gap-3">
          <p
            className="text-black"
            style={{ fontSize: "18px", fontWeight: 400 }}
          >
            Which languages are spoken at your property?
          </p>
          <p>Type of cards you accept: </p>
          <Form.Group
            className="mb-3"
            id="formGridCheckbox"
            style={{ fontSize: "16px" }}
          >
            <Form.Check
              type="checkbox"
              label="Credit / Debit Cards"
              onChange={(e) => {
                setIsCreditCardChecked(e.target.checked);
              }}
            />
            {!isCreditCardChecked ? (
              <Form.Check type="checkbox" label="Cash" />
            ) : (
              <Form.Group
                className="mb-3"
                id="formGridCheckbox"
                style={{ fontSize: "16px" }}
              >
                <Form.Check type="checkbox" label="Debit Cards" />
                <Form.Check type="checkbox" label="JCB International" />
                <Form.Check type="checkbox" label="Visa" />
                <Form.Check type="checkbox" label="Discover" />
                <Form.Check type="checkbox" label="MasterCard" />
                <Form.Check type="checkbox" label="Carte Blanche" />
                <Form.Check type="checkbox" label="American Express" />
                <Form.Check type="checkbox" label="UnionPay" />
                <Form.Check type="checkbox" label="Diners Club" />

                <p className="mt-3">Other Settings</p>
                <Form.Check
                  type="checkbox"
                  label="Installment payments offered at front desk (for locals only)"
                />
                <Form.Check type="checkbox" label="Cash" />
              </Form.Group>
            )}
          </Form.Group>
        </div>

        {/* 3 */}
        <div className="border p-3 rounded d-flex flex-column gap-1">
          <p className="text-black">Do you require any deposits ?</p>
          <div className="d-flex gap-2">
            <p
              className="py-1 px-4 border rounded-pill"
              style={
                isYesSelectedInRequireAnyDeposits
                  ? {
                      cursor: "pointer",
                      fontWeight: 400,
                      backgroundColor: "#000000",
                      color: "white",
                    }
                  : { cursor: "pointer", fontWeight: 400 }
              }
              onClick={() => {
                setIsYesSelectedInRequireAnyDeposits(true);
              }}
            >
              Yes
            </p>{" "}
            <p
              className="py-1 px-4 border rounded-pill"
              style={
                isYesSelectedInRequireAnyDeposits
                  ? {
                      cursor: "pointer",
                      fontWeight: 400,
                    }
                  : {
                      cursor: "pointer",
                      fontWeight: 400,
                      backgroundColor: "#000000",
                      color: "white",
                    }
              }
              onClick={() => {
                setIsYesSelectedInRequireAnyDeposits(false);
              }}
            >
              No
            </p>
          </div>
          {isYesSelectedInRequireAnyDeposits && (
            <div className="mt-3 d-flex flex-column gap-2">
              <Form.Check
                type="checkbox"
                label="General deposit"
                onChange={(e) => setIsGenralDepositChecked(e.target.checked)}
              />
              {isGenralDepositsChecked && (
                <div
                  className="d-flex flex-column gap-2 ms-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      label="Year round"
                      name="year-round-and-data-range"
                      id="year-round"
                    />
                    <Form.Check
                      type="radio"
                      label="Data range"
                      name="year-round-and-data-range"
                      id="data-range"
                    />
                  </div>
                  <div>
                    <p>Deposit applies to guests</p>
                    <div className="d-flex gap-4">
                      <Form.Check
                        type="radio"
                        label="Of all ages"
                        name="age-selection-radio"
                        id="of-all-ages"
                      />
                      <Form.Check
                        type="radio"
                        label="Under a specific age"
                        name="age-selection-radio"
                        id="under-a-specific-age"
                      />
                    </div>
                  </div>
                  <div className="d-flex gap-4 flex-wrap align-items-end">
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                      <Form.Label style={{ color: "#808080" }}>
                        Amount in {"{0}"} <br /> Including taxes
                      </Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                      <Form.Label style={{ color: "#808080" }}>
                        Scope
                      </Form.Label>
                      <Form.Select
                        className="custom-form-select"
                        aria-label="Default select example"
                      >
                        <option value="per-stay">Per accommodation</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                      <Form.Label style={{ color: "#808080" }}>
                        Duration
                      </Form.Label>
                      <Form.Select
                        className="custom-form-select"
                        aria-label="Default select example"
                      >
                        <option value="per-stay">Per Stay</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <Form.Check
                    type="radio"
                    label="Cash only"
                    name="year-round-and-data-range"
                    id="data-range"
                  />
                </div>
              )}
              <Form.Check
                type="checkbox"
                label="Breakage/cleaning deposit"
                onChange={(e) => setIsCleaningDepositChecked(e.target.checked)}
              />
              {isCleaningDepositChecked && (
                <div
                  className="d-flex flex-column gap-2 ms-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      label="Breakage deposit"
                      name="breakage-and-cleaning-deposit"
                      id="breakage-deposit"
                    />
                    <Form.Check
                      type="radio"
                      label="Cleaning Deposit"
                      name="breakage-and-cleaning-deposit"
                      id="cleaning-deposit"
                    />
                  </div>
                  <div className="d-flex gap-4">
                    <Form.Check
                      type="radio"
                      label="Year round"
                      name="year-round-and-data-range-2"
                      id="year-round"
                    />
                    <Form.Check
                      type="radio"
                      label="Data range"
                      name="year-round-and-data-range-2"
                      id="data-range"
                    />
                  </div>
                  <div>
                    <p>Deposit applies to guests</p>
                    <div className="d-flex gap-4">
                      <Form.Check
                        type="radio"
                        label="Of all ages"
                        name="age-selection-radio"
                        id="of-all-ages"
                      />
                      <Form.Check
                        type="radio"
                        label="Under a specific age"
                        name="age-selection-radio"
                        id="under-a-specific-age"
                      />
                    </div>
                  </div>
                  <div className="d-flex gap-4 flex-wrap align-items-end">
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                      <Form.Label style={{ color: "#808080" }}>
                        Amount in {"{0}"} <br /> Including taxes
                      </Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                      <Form.Label style={{ color: "#808080" }}>
                        Duration
                      </Form.Label>
                      <Form.Select
                        className="custom-form-select"
                        aria-label="Default select example"
                      >
                        <option value="per-month">Per month</option>
                        <option value="per-year">Per year</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <Form.Check
                    type="radio"
                    label="Cash only"
                    name="cash-only"
                    id="cash-only"
                  />
                </div>
              )}
              <Form.Check
                type="checkbox"
                label="Spring Break Deposit"
                onChange={(e) =>
                  setIsSpringBreakDepositChecked(e.target.checked)
                }
              />
              {isSpringBreakDepositChecked && (
                <div
                  className="d-flex flex-column gap-2 ms-3"
                  style={{ fontSize: "14px" }}
                >
                  <div className="d-flex gap-4">
                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ color: "#808080", fontSize: "12px" }}
                      >
                        From
                      </Form.Label>
                      <DateRangePicker
                        initialSettings={{
                          singleDatePicker: true,
                          showDropdowns: true,
                          startDate: new Date().getFullYear(),
                          minYear: 1901,
                          maxYear: parseInt(moment().format("YYYY"), 10),
                        }}
                      >
                        <Form.Control type="text" name="birthday" />
                      </DateRangePicker>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label
                        style={{ color: "#808080", fontSize: "12px" }}
                      >
                        To
                      </Form.Label>
                      <DateRangePicker
                        initialSettings={{
                          singleDatePicker: true,
                          showDropdowns: true,
                          startDate: new Date().getFullYear(),
                          minYear: 1901,
                          maxYear: parseInt(moment().format("YYYY"), 10),
                        }}
                      >
                        <Form.Control type="text" name="birthday" />
                      </DateRangePicker>
                    </Form.Group>
                  </div>
                  <div>
                    <p>Deposit applies to guests</p>
                    <div className="d-flex gap-4">
                      <Form.Check
                        type="radio"
                        label="Of all ages"
                        name="age-selection-radio-in-spring-break-deposit"
                        id="of-all-ages"
                      />
                      <Form.Check
                        type="radio"
                        label="Under a specific age"
                        name="age-selection-radio-in-spring-break-deposit"
                        id="under-a-specific-age"
                      />
                    </div>
                  </div>
                  <div className="d-flex gap-4 flex-wrap align-items-end">
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                      <Form.Label style={{ color: "#808080" }}>
                        Amount in {"{0}"} <br /> Including taxes
                      </Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                      <Form.Label style={{ color: "#808080" }}>
                        Duration
                      </Form.Label>
                      <Form.Select
                        className="custom-form-select"
                        aria-label="Default select example"
                      >
                        <option value="per-month">Per month</option>
                        <option value="per-year">Per year</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <Form.Check
                    type="radio"
                    label="Cash only"
                    name="cash-only"
                    id="cash-only-in-spring-break-deposit"
                  />
                </div>
              )}
              <Form.Check
                type="checkbox"
                label="Damage deposit collected before arrival"
                onChange={(e) =>
                  setIsDamageDepositCollectedBeforeArrivalChecked(
                    e.target.checked
                  )
                }
              />
              {isDamageDepositCollectedBeforeArrivalChecked && (
                <div
                  className="d-flex flex-column gap-2 ms-3"
                  style={{ fontSize: "14px" }}
                >
                  <Form.Group as={Col} md="2" controlId="validationCustom05">
                    <Form.Label style={{ color: "#808080" }}>
                      Amount in {"{0}"} <br /> Including taxes
                    </Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                </div>
              )}
              <Form.Check
                type="checkbox"
                label="Alternate deposit payment"
                onChange={(e) => setIsAlternateDepositPayment(e.target.checked)}
              />
              {isAlternateDepositPayment && (
                <div className="d-flex gap-4 ms-3" style={{ fontSize: "14px" }}>
                  <Form.Group as={Col} md="2" controlId="validationCustom05">
                    <Form.Label style={{ color: "#808080" }}>
                      Duration
                    </Form.Label>
                    <Form.Select
                      className="custom-form-select"
                      aria-label="Default select example"
                    >
                      <option value="" defaultValue={true} hidden>
                        - Select -
                      </option>
                      <option value="pay-pal">Pay Pal</option>
                      <option value="bank-transfer">Bank Transfer</option>
                      <option value="-wire-transfer">Wire Transfer</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} md="2" controlId="validationCustom05">
                    <Form.Label style={{ color: "#808080" }}>
                      Duration
                    </Form.Label>
                    <Form.Select
                      className="custom-form-select"
                      aria-label="Default select example"
                    >
                      <option value="" defaultValue={true} hidden>
                        - Select -
                      </option>
                      <option value="24">24 hours</option>
                      <option value="48">48 hours</option>
                      <option value="72">72 hours</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              )}
              <p style={{ fontSize: "14px", color: "#808080" }}>
                Forms of payment accepted for incidentals
              </p>
              <Form.Group
                as={Col}
                sm="12"
                md="4"
                controlId="validationCustom05"
              >
                <Form.Label style={{ color: "#808080" }}>Duration</Form.Label>
                <Form.Select
                  className="custom-form-select"
                  aria-label="Default select example"
                >
                  <option value="" defaultValue={true} hidden>
                    - Select -
                  </option>
                  <option value="cash">Cash only</option>
                  <option value="credit-card">Credit cards only</option>
                  <option value="debit-card">Debit cards only</option>
                  <option value="cash-credit">Cash, credit cards only</option>
                </Form.Select>
              </Form.Group>
            </div>
          )}
        </div>

        {/* 4 */}
        <div
          className="border p-3 rounded d-flex flex-column gap-2"
          style={{ fontSize: "14px" }}
        >
          <p className="text-black" style={{ fontSize: "18px" }}>
            Regulatory information
          </p>
          <p style={{ fontSize: "14px", color: "#808080" }}>
            Are you a professional host or a private host?
          </p>
          <div>
            <Form.Check
              type="radio"
              label="Professional host"
              name="host-type"
              id="pro-host"
            />
            <p className="ms-4">
              Providing accommodation is related to your trade, business, or
              profession.
            </p>
          </div>
          <div>
            <Form.Check
              type="radio"
              label="Private host"
              name="host-type"
              id="private-host"
            />
            <p className="ms-4">
              Providing accommodation is not related to your trade, business, or
              profession.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div
          className="border p-3 rounded d-flex flex-column gap-2"
          style={{ fontSize: "14px" }}
        >
          <p className="text-black" style={{ fontSize: "18px" }}>
            Default cancellation policy
          </p>
          <p>Cancellation policy options</p>
          <p>
            A cancellation window is the amount of time before your local
            cancellation cutoff (18:00) on the day of check-in.
          </p>
          <div>
            <Form.Check
              type="radio"
              label="24-hour cancellation window"
              name="policy-cancel-radio"
              id="24-hours"
              value="24"
              checked={selectedRadioDefaultCancellationPolicy === "24"}
              onChange={(event) =>
                setSelectedRadioDefaultCancellationPolicy(event.target.value)
              }
            />
            {
              // 24-hour cancellation window
              selectedRadioDefaultCancellationPolicy === "24" && (
                <div>
                  <ul className="text-black d-flex flex-column gap-2">
                    <li>
                      Travelers who cancel 24 hours or more before 18:00 on the
                      day of check-in are charged no fee.
                    </li>
                    <li>
                      Travelers who cancel less than 24 hours before 18:00 on
                      the day of check-in (including no-shows) are charged:
                    </li>
                    <li>
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Cancelation fee"
                      >
                        <Form.Select aria-label="Floating label select example">
                          <option defaultValue={true} hidden>
                            Open this select menu
                          </option>
                          <option value="50-percent">
                            50 % of booking amount
                          </option>
                          <option value="100-percent">
                            100 % of booking amount
                          </option>
                        </Form.Select>
                      </FloatingLabel>
                    </li>
                  </ul>
                </div>
              )
            }

            <Form.Check
              type="radio"
              label="48-hour cancellation window"
              name="policy-cancel-radio"
              id="48-hours"
              value="48"
              checked={selectedRadioDefaultCancellationPolicy === "48"}
              onChange={(event) =>
                setSelectedRadioDefaultCancellationPolicy(event.target.value)
              }
            />
            {
              // 48-hour cancellation window
              selectedRadioDefaultCancellationPolicy === "48" && (
                <div>
                  <ul className="text-black d-flex flex-column gap-2">
                    <li>
                      Travelers who cancel 48 hours or more before 18:00 on the
                      day of check-in are charged no fee.
                    </li>
                    <li>
                      Travelers who cancel less than 48 hours before 18:00 on
                      the day of check-in (including no-shows) are charged:
                    </li>
                    <li>
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Cancelation fee"
                      >
                        <Form.Select aria-label="Floating label select example">
                          <option defaultValue={true} hidden>
                            Open this select menu
                          </option>
                          <option value="50-percent">
                            50 % of booking amount
                          </option>
                          <option value="100-percent">
                            100 % of booking amount
                          </option>
                        </Form.Select>
                      </FloatingLabel>
                    </li>
                  </ul>
                </div>
              )
            }
            <Form.Check
              type="radio"
              label="72-hour cancellation window"
              name="policy-cancel-radio"
              id="72-hours"
              value="72"
              checked={selectedRadioDefaultCancellationPolicy === "72"}
              onChange={(event) =>
                setSelectedRadioDefaultCancellationPolicy(event.target.value)
              }
            />
            {
              // 48-hour cancellation window
              selectedRadioDefaultCancellationPolicy === "72" && (
                <div>
                  <ul className="text-black d-flex flex-column gap-2">
                    <li>
                      Travelers who cancel 72 hours or more before 18:00 on the
                      day of check-in are charged no fee.
                    </li>
                    <li>
                      Travelers who cancel less than 72 hours before 18:00 on
                      the day of check-in (including no-shows) are charged:
                    </li>
                    <li>
                      <FloatingLabel
                        controlId="floatingSelect"
                        label="Cancelation fee"
                      >
                        <Form.Select aria-label="Floating label select example">
                          <option defaultValue={true} hidden>
                            Open this select menu
                          </option>
                          <option value="50-percent">
                            50 % of booking amount
                          </option>
                          <option value="100-percent">
                            100 % of booking amount
                          </option>
                        </Form.Select>
                      </FloatingLabel>
                    </li>
                  </ul>
                </div>
              )
            }
            <Form.Check
              type="radio"
              label="Non-refundable"
              name="policy-cancel-radio"
              id="non-refundable"
              value="none"
              checked={selectedRadioDefaultCancellationPolicy === "none"}
              onChange={(event) =>
                setSelectedRadioDefaultCancellationPolicy(event.target.value)
              }
            />
            {
              // None refundable window
              selectedRadioDefaultCancellationPolicy === "none" && (
                <div>
                  <ul>
                    <li>
                      Travelers who cancel 72 hours or more before 18:00 on the
                      day of check-in are charged no fee.
                    </li>
                  </ul>
                </div>
              )
            }
          </div>
        </div>

        {/* 6 */}
        <div
          className="border p-3 rounded d-flex flex-column gap-2"
          style={{ fontSize: "14px" }}
        >
          <p className="text-black" style={{ fontSize: "18px" }}>
            Taxes and fees
          </p>
          <p>What taxes do you include in your rates?</p>
          <div className="d-flex flex-column">
            <Form.Check
              type="checkbox"
              id="city-tax"
              label="City tax"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  cityTax: event.target.checked,
                }))
              }
            />
            {isTaxesAndFeesChecked.cityTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}

            <Form.Check
              type="checkbox"
              id="fedaral-fax"
              label="Federal tax"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  fedaralTax: event.target.checked,
                }))
              }
            />
            {isTaxesAndFeesChecked.fedaralTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}
            <Form.Check
              type="checkbox"
              id="occupany-tax"
              label="Occupancy tax"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  occupancyTax: event.target.checked,
                }))
              }
            />

            {isTaxesAndFeesChecked.occupancyTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}

            <Form.Check
              type="checkbox"
              id="district-tax"
              label="District tax"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  districtTax: event.target.checked,
                }))
              }
            />
            {isTaxesAndFeesChecked.districtTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}
            <Form.Check
              type="checkbox"
              id="hotel-tax"
              label="Hotel tax"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  hotelTax: event.target.checked,
                }))
              }
            />
            {isTaxesAndFeesChecked.hotelTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}
            <Form.Check
              type="checkbox"
              id="g-s-tax"
              label="Goods and services tax (GST)"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  goodsAndServicesTax: event.target.checked,
                }))
              }
            />
            {isTaxesAndFeesChecked.goodsAndServicesTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}
            <Form.Check
              type="checkbox"
              id="sales-tax"
              label="Harmonized sales tax (HST)"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  harmonizedSalesTax: event.target.checked,
                }))
              }
            />
            {isTaxesAndFeesChecked.harmonizedSalesTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}
            <Form.Check
              type="checkbox"
              id="vat"
              label="Value added tax (VAT)"
              onChange={(event) =>
                setIsTaxesAndFeesChecked((prevIsTaxesAndFeesChecked) => ({
                  ...prevIsTaxesAndFeesChecked,
                  valueAddedTax: event.target.checked,
                }))
              }
            />
            {isTaxesAndFeesChecked.valueAddedTax && (
              <div className="d-flex gap-2">
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel controlId="floatingSelect" label="Type">
                    <Form.Select
                      aria-label="Floating label select example"
                      className=""
                    >
                      <option value="50-percent">Amount per stay</option>
                      <option value="100-percent">Amount per night</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} sm="5" md="3">
                  <FloatingLabel
                    controlId="floatingEmail"
                    label="Percent %"
                    className="mb-2"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Form.Group>
              </div>
            )}
          </div>
        </div>

        {/* 7 */}
        <div
          className="border p-3 rounded d-flex flex-column gap-2"
          style={{ fontSize: "14px" }}
        >
          <p className="text-black" style={{ fontSize: "18px" }}>
            Discounts for Long-Term Rentals
          </p>
          <p>Would you like to offer a discount?</p>
          <div className="text-black d-flex flex-column gap-4">
            {/* 3 Month */}
            <div>
              <p>For rentals over 3 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.threeMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      threeMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.threeMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      threeMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.threeMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 4 Month */}
            <div>
              <p>For rentals over 4 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.fourMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      fourMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.fourMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      fourMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.fourMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 5 Month */}
            <div>
              <p>For rentals over 5 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.fiveMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      fiveMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.fiveMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      fiveMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.fiveMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 6 Month */}
            <div>
              <p>For rentals over 6 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.sixMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      sixMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.sixMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      sixMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.sixMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 7 Month */}
            <div>
              <p>For rentals over 7 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.sevenMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      sevenMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.sevenMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      sevenMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.sevenMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 8 Month */}
            <div>
              <p>For rentals over 8 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.eightMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      eightMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.eightMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      eightMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.eightMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 9 Month */}
            <div>
              <p>For rentals over 9 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.nineMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      nineMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.nineMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      nineMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.nineMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 10 Month */}
            <div>
              <p>For rentals over 10 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.tenMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      tenMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.tenMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      tenMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.tenMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 11 Month */}
            <div>
              <p>For rentals over 11 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.elevenMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      elevenMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.elevenMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      elevenMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.elevenMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
            {/* 12 Month */}
            <div>
              <p>For rentals over 12 months</p>
              <div className="d-flex gap-4 mt-1">
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.twelveMonths
                      ? {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                      : { cursor: "pointer" }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      twelveMonths: true,
                    }))
                  }
                >
                  Yes
                </p>
                <p
                  className="rounded-pill border border-1 px-3 py-1"
                  style={
                    longTermRentalsDiscount.twelveMonths
                      ? { cursor: "pointer" }
                      : {
                          color: "#FFFFFF",
                          backgroundColor: "#000000",
                          cursor: "pointer",
                        }
                  }
                  onClick={() =>
                    setLongTermRentalsDiscount((prevLongRentalDiscount) => ({
                      ...prevLongRentalDiscount,
                      twelveMonths: false,
                    }))
                  }
                >
                  No
                </p>
              </div>
              {longTermRentalsDiscount.twelveMonths && (
                <div className="mt-2">
                  <p style={{ fontSize: "12px" }}>Discount percentage</p>
                  <span
                    className="d-flex justify-content-between align-content-center border border-2 px-2 rounded"
                    style={{ width: "240px" }}
                  >
                    <input
                      type="number"
                      className="border-0 py-1 "
                      style={{ outline: "none" }}
                    />
                    <p className="text-black fw-bold fs-5">%</p>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default PoliciesAndSettings;
