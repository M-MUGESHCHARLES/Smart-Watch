import React, { useState } from "react";

import Form from "react-bootstrap/Form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import "./Register.css";
import { Link } from "react-router-dom";

export default function ProductRegistrationForm() {
  const DateOfBirth = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        maxDate={new Date()}
        placeholderText="Select Date"
        dateFormat="dd/MM/yyyy"
      />
    );
  };

  const handleSubmit = () => {
    console.log(`Form submitted successsfully...`);
  };

  return (
    <div id="UserRegistrationFormDiv">
      <form className="px-3 py-4" id="UserRegistrationForm">
        <div className="p-3">
          <div className="my-3">
            <h2> Product Registration Form :</h2>
            <h6> Register your product by filling the below form </h6>
          </div>

          <div className="row">
            <div className="col my-2">
              <label htmlFor="FirstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                id="FirstName"
              />
            </div>
            <div className="col my-2">
              <label htmlFor="LastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                id="LastName"
              />
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2">
            <div className="col my-2 col-md-7 col-sm-12">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                id="Email"
                placeholder="E-mail"
              />
            </div>
            <div className="col my-2 col-md-5 col-sm-12">
              <label htmlFor="Phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="Phone"
                placeholder="Phone"
              />
            </div>
          </div>

          <div className="col my-2">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Door.no , street , area"
            />
          </div>

          <div className="row my-2">
            <div className="col-7">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City"
              />
            </div>
            <div className="col-5">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected> Select </option>
                <option id="TamilNadu"> Tamil Nadu </option>
                <option id="Karnataka"> Karnataka </option>
                <option id="Kerala"> Kerala </option>
                <option id="AndhraPradesh"> Andhra Pradesh </option>
                <option id="Telungana"> Telungana </option>
              </select>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-4">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="Zip Code"
              />
            </div>

            <div className="col-5">
              <label htmlFor="inputCountry" className="form-label">
                Country
              </label>
              <select id="inputCountry" className="form-select">
                <option selected> Select </option>
                <option id="India" selected>
                  India
                </option>
              </select>
            </div>
          </div>
        </div>

        <hr className="col-11 mx-auto boldHr" />

        <div className="p-3">
          <div className="mb-3">
            <h2>
              Additional Information :
              <strong className="d-inline-block">(optional)</strong>
            </h2>
          </div>

          <div className="col my-2">
            <label htmlFor="inputAddress" className="form-label">
              Secondary Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Door.no , street , area"
            />
          </div>

          <div className="row my-2">
            <div className="col-7">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="City"
              />
            </div>
            <div className="col-4">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                placeholder="Zip Code"
              />
            </div>
          </div>

          <div className="row my-2">
            <div className="col-3"></div>

            <div className="col-5"></div>
          </div>

          <div className="row">
            <div className="col my-2 col-md-5 col-sm-12">
              <label htmlFor="Phone" className="form-label">
                Secondary Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="Phone"
                placeholder="Phone"
              />
            </div>

            <div className="col-md-5 col-12 my-2">
              <label htmlFor="DOB" className="form-label">
                Date of Birth
              </label>
              <br />
              <DateOfBirth id="DOB" />
            </div>
          </div>

          <div class="form-checkbox px-2 py-3">
            <Form.Check label="Agree Terms and conditions " defaultChecked />
          </div>
        </div>

        <div className="text-center">
          <button
            type="button"
            class="btn btn-warning registerUserButton"
            data-bs-toggle="modal"
            data-bs-target="#UserRegistrationCompleted"
          >
            Save Changes
          </button>
        </div>

        {/* Modal  */}
        <div class="modal fade" id="UserRegistrationCompleted" tabIndex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="ModalLabel">
                  SMART-WATCH
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body"> User details saved successfully...!</div>
              <div class="modal-footer">
                <Link to="/Shop">
                  <button
                    type="submit"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onSubmit={handleSubmit}
                  >
                    Shop
                  </button>
                </Link>
                <Link to="/">
                  <button
                    type="submit"
                    class="btn btn-warning"
                    data-bs-dismiss="modal"
                    onSubmit={handleSubmit}
                  >
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
