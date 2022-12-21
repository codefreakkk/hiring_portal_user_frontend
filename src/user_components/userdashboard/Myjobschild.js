import React from "react";
import logo1 from "../../user_assets/imgs/page/job-single/industry.svg";
import logo2 from "../../user_assets/imgs/page/job-single/job-level.svg";

function Myjobschild({id, jobTitle, applied}) {
  return (
    <>
      <div class="job-overview" style={{ marginTop: "35px" }}>
        {/* <h5 class="border-bottom pb-15 mb-30">Infosys </h5> */}
        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="sidebar-icon-item">
              <img src={logo1} alt="jobBox" />
            </div>
            <div class="sidebar-text-info ml-10">
              <span class="text-description industry-icon mb-10">Job Name</span>
              <strong class="small-heading">{jobTitle}</strong>
            </div>
          </div>
          <div class="col-md-6 d-flex mt-sm-15">
            <div class="sidebar-icon-item">
              <img src={logo2} alt="jobBox" />
            </div>

            <div class="sidebar-text-info ml-10">
              <span class="text-description mb-10">Applied On</span>
              <strong class="small-heading">{applied}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myjobschild;
