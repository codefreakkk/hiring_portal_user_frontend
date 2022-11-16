import React from "react";
import logo1 from "../../user_assets/imgs/page/job-single/industry.svg"
import logo2 from "../../user_assets/imgs/page/job-single/job-level.svg"
import logo3 from "../../user_assets/imgs/page/job-single/salary.svg"
import logo4 from "../../user_assets/imgs/page/job-single/experience.svg"
import logo5 from "../../user_assets/imgs/page/job-single/job-type.svg"
import logo6 from "../../user_assets/imgs/page/job-single/deadline.svg"
import logo7 from "../../user_assets/imgs/page/job-single/updated.svg"
import logo8 from "../../user_assets/imgs/page/job-single/location.svg"

function Myjobschild() {
  return (
    <>
      <div class="job-overview" style={{ marginTop: "35px" }}>
        <h5 class="border-bottom pb-15 mb-30">Infosys </h5>
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="sidebar-icon-item">
              <img src={logo1} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description industry-icon mb-10">Industry</span>
              <strong class="small-heading">Information Technology</strong>
            </div>
          </div>
          <div class="col-md-6 d-flex mt-sm-15">
            <div class="sidebar-icon-item">
              <img src={logo2} alt="jobBox" />
            </div>

            <div class="sidebar-text-info ml-10">
              <span class="text-description mb-10">Applied On</span>
              <strong class="small-heading">10/08/2022</strong>
            </div>
          </div>
        </div>
        <div class="row mt-25">
          <div class="col-md-6 d-flex mt-sm-15">
            <div class="sidebar-icon-item">
              <img src={logo3} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description salary-icon mb-10">Salary</span>
              <strong class="small-heading">$800 - $1000</strong>
            </div>
          </div>
          <div class="col-md-6 d-flex">
            <div class="sidebar-icon-item">
              <img src={logo4} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description experience-icon mb-10">
                Experience
              </span>
              <strong class="small-heading">1 - 2 years</strong>
            </div>
          </div>
        </div>
        <div class="row mt-25">
          <div class="col-md-6 d-flex mt-sm-15">
            <div class="sidebar-icon-item">
              <img src={logo5} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description jobtype-icon mb-10">Job type</span>
              <strong class="small-heading">Permanent</strong>
            </div>
          </div>
          <div class="col-md-6 d-flex mt-sm-15">
            <div class="sidebar-icon-item">
              <img src={logo6} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description joblevel-icon mb-10">
                Job level
              </span>
              <strong class="small-heading">Experienced (Non - Manager)</strong>
            </div>
          </div>
        </div>
        <div class="row mt-25">
          <div class="col-md-6 d-flex mt-sm-15">
            <div class="sidebar-icon-item">
              <img src={logo7} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description jobtype-icon mb-10">Updated</span>
              <strong class="small-heading">10/07/2022</strong>
            </div>
          </div>
          <div class="col-md-6 d-flex mt-sm-15">
            <div class="sidebar-icon-item">
              <img src={logo8} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description mb-10">Location</span>
              <strong class="small-heading">
                Dallas, Texas Remote Friendly
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myjobschild;
