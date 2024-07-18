import React from 'react'

export default function Footer2() {
  return (
    <>
      {/* <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> */}
        {/* <div class="col-md-4 d-flex align-items-center">

      <span class="mb-3 mb-md-0 text-body-secondary">
        © {new Date().getFullYear()} SmartWatch, Inc. All rights reserved.
      </span>

    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <a class="link-body-emphasis text-warning">
        <i class="fa-brands fa-square-x-twitter fa-2x"></i>
        </a>
      </li>
    <li class="ms-3">
      <a class="link-body-emphasis text-warning">
        <i class="fa-brands fa-square-instagram fa-2x"></i>
      </a>
    </li>
    <li class="ms-3">
      <a class="link-body-emphasis text-warning">
        <i class="fa-brands fa-square-facebook fa-2x"></i>
      </a>
    </li>
    </ul> */}

    <footer id='footer'>

        <div class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
          <p className="ms-5 my-auto">
            © {new Date().getFullYear()} SmartWatch, Inc. All rights reserved.
          </p>
          <div className="social-links">
            <h5 className="ms-3 footer-heading mb-3"> Follow Us</h5>
            <ul class="list-unstyled d-flex me-5">
              <li class="ms-3">
                <a class="link-body-emphasis text-warning">
                  <i class="fa-brands fa-square-x-twitter fa-2x"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis text-warning">
                  <i class="fa-brands fa-square-instagram fa-2x"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis text-warning">
                  <i class="fa-brands fa-square-facebook fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
