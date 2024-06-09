import React from "react";
import { ReactComponent as HealthIcon } from "../../images/icons/health-svgrepo-com.svg";
import { ReactComponent as NotificationIcon } from "../../images/icons/notification-unread-lines-svgrepo-com.svg";
import { ReactComponent as WaterIcon } from "../../images/icons/water-svgrepo-com.svg";
import { ReactComponent as BatteryIcon } from "../../images/icons/battery-bolt-alt-svgrepo-com.svg";
import { ReactComponent as ConnectivityIcon } from "../../images/icons/signal-strong-svgrepo-com.svg";
import { ReactComponent as NavigationIcon } from "../../images/icons/navigation-svgrepo-com.svg";

export default function Features() {
  return (
    <div>
      <section id="features-section">
        <div className=".features-section mb-5">
          <div className="row head-row mb-4 mt-5">
            <div className="col-8 mx-auto text-center">
              <h3 className="mb-3 mt-49  ">
                <span class="material-symbols-outlined fs-1 align-middle">
                  settings_motion_mode
                </span>
                &nbsp; Features & specifications
              </h3>
              <p>
                Our smartwatches offer a multifunctional experience, and
                seamless connectivity to smartphones, they provide users with
                convenience, style, and enhanced productivity on the go.
              </p>
            </div>
          </div>
          <br />

          <div className="row mx-auto features-row justify-content-center mb-5 pb-3">
            <div className="col-lg-3 col-md-5 col-sm-10 feature1 mx-2 my-2 rounded-5">
              <div className="row">
                <div className="col-12 mt-3">
                  <HealthIcon className="feature-icon zoom-effect" />
                </div>
                <div className="col-12 mt-3">
                  <h4>Health and Fitness</h4>
                </div>
                <div className="col-12 mt-3">
                  <p>
                    Equipped with sensors to track various health metrics such
                    as heart rate, steps taken, calories burned, sleep patterns,
                    and sometimes even blood oxygen levels
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="icon-link icon-link-hover link-warning link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover zoom-effect"
                    href="/"
                  >
                    Read more <i class="fa-solid fa-arrow-right bi "></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-10 feature2 mx-2 my-2 rounded-5">
              <div className="row">
                <div className="col-12 mt-3">
                  <NotificationIcon className="feature-icon zoom-effect" />
                </div>
                <div className="col-12 mt-3">
                  <h4>Notifications</h4>
                </div>
                <div className="col-12 mt-3">
                  <p>
                    Sync with your smartphone to deliver notifications for
                    calls, messages, emails, and app alerts directly to your
                    wrist
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="icon-link icon-link-hover link-warning link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover zoom-effect"
                    href="/"
                  >
                    Read more <i class="fa-solid fa-arrow-right bi"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-10 feature3  mx-2 my-2 rounded-5">
              <div className="row">
                <div className="col-12 mt-3 ">
                  <WaterIcon className="feature-icon zoom-effect" />
                </div>
                <div className="col-12 mt-3 ">
                  <h4> Water Resistance </h4>
                </div>
                <div className="col-12 mt-3">
                  <p>
                    Designed to be water-resistant, making them suitable for
                    everyday use and activities like swimming or showering
                    without worrying about damage
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="icon-link icon-link-hover link-warning link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover zoom-effect"
                    href="/"
                  >
                    Read more <i class="fa-solid fa-arrow-right bi"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-sm-10 feature4  mx-2 my-2 rounded-5">
              <div className="row">
                <div className="col-12 mt-3">
                  <BatteryIcon className="feature-icon zoom-effect" />
                </div>
                <div className="col-12 mt-3">
                  <h4>Battery Life </h4>
                </div>
                <div className="col-12 mt-3">
                  <p>
                    Can last multiple days on a single charge, with more
                    high-end performance offering even longer battery life
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="icon-link icon-link-hover link-warning link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover zoom-effect"
                    href="/"
                  >
                    Read more <i class="fa-solid fa-arrow-right bi"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-10 feature5  mx-2 my-2 rounded-5">
              <div className="row">
                <div className="col-12 mt-3">
                  <ConnectivityIcon className="feature-icon zoom-effect" />
                </div>
                <div className="col-12 mt-3">
                  <h4>Connectivity and Compatibility</h4>
                </div>
                <div className="col-12 mt-3">
                  <p>
                    Typically connect to your smartphone via Bluetooth and are
                    compatible with both iOS and Android devices.
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="icon-link icon-link-hover link-warning link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover zoom-effect"
                    href="/"
                  >
                    Read more <i class="fa-solid fa-arrow-right bi"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-10 feature6  mx-2 my-2 rounded-5">
              <div className="row">
                <div className="col-12 mt-3">
                  <NavigationIcon className="feature-icon zoom-effect " />
                </div>
                <div className="col-12 mt-3">
                  <h4> Gps and Navigation</h4>
                </div>
                <div className="col-12 mt-3">
                  <p>
                    GPS allow users to accurately track their location in
                    real-time,Built-in compass functionality helps users by
                    providing voice-guided navigation
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <a
                    className="icon-link icon-link-hover link-warning link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover zoom-effect"
                    href="/"
                  >
                    Read more <i class="fa-solid fa-arrow-right bi"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="light-bg-hr">
          <hr />
        </div>
      </section>
    </div>
  );
}
